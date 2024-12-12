
import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaPencilAlt, FaPlus, FaTimes } from "react-icons/fa"; // Assuming you're using react-icons for these
import { useNavigate } from "react-router-dom";

// Reducer for managing text content states
const textContentReducer = (state, action) => {
    switch (action.type) {
        case "SET_TEXT_CONTENT":
            return { ...state, [action.tab]: action.text };
        default:
            return state;
    }
};

const CandidateDetail = () => {
    const { id } = useParams(); // Get the candidate id from the URL
    const [candidate_id , setCandidateId] = useState(id)
    // console.log(candidate_id , "id.............")
    const [candidate, setCandidate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [tabLoading, setTabLoading] = useState(false); // Loading state for tabs
    const [resume , setResume] = useState([])
    const [interview , setInterview] = useState('')
    const [links , setLinks] = useState([])
    const navigate = useNavigate();

    // Initialize reducer state for text content
    const [textContent, dispatch] = useReducer(textContentReducer, {
        Overview: "Loading overview...",
        Resume: "Loading resume...",
        "Social Media": "Loading social media...",
        Interviews: "Loading interviews...",
        Links: "Loading links..."
    });
    const [activeTab, setActiveTab] = useState("Overview");
    const [isEditing, setIsEditing] = useState(false);
    const [updatedText, setUpdatedText] = useState(textContent.Overview);

    const tabEndpoints = {
        Overview: `http://161.35.189.160:8000/api/data/candidate/getCandidate?id=${id}`,
        Resume: `http://161.35.189.160:8000/api/data/resume/getResume?candidate_id=${candidate_id}`,
        "Social Media": `http://161.35.189.160:8000/api/data/link/getLinks?candidate_id=${id}`,
        Interviews: `http://161.35.189.160:8000/api/data/interviews/getInterviews?candidate_id=${id}`,
        Links: `http://161.35.189.160:8000/api/data/link/getLinks?candidate_id=${id}`
    };

    const apiActions = {
        createResume: `http://161.35.189.160:8000/api/data/resume/createResume`,
        deleteResume: (resumeId) => `http://161.35.189.160:8000/api/data/resume/deleteResume/${resumeId}`,
        updateResume: (resumeId) => `http://161.35.189.160:8000/api/data/resume/updateResume/${resumeId}`,

        createLink: `http://161.35.189.160:8000/api/data/link/createLink`,
        deleteLink: (linkId) => `http://161.35.189.160:8000/api/data/link/deleteLink/${linkId}`,
        updateLink: (linkId) => `http://161.35.189.160:8000/api/data/link/updateLink/${linkId}`,
    };

    // Handle tab switching
    const handleTabClick = (tab) => {
        setActiveTab(tab);
        fetchTabData(tab); // Fetch data for the selected tab
        setUpdatedText(textContent[tab]); // Reset updatedText when switching tabs
        setIsEditing(false); // Disable editing when switching tabs
    };



    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // API endpoints
                const getResume = `http://161.35.189.160:8000/api/data/resume/getResume?candidate_id=${candidate_id}`;
                const getCandidate = `http://161.35.189.160:8000/api/data/candidate/getCandidate?id=${id}`;
                const getLinks = `http://161.35.189.160:8000/api/data/link/getLinks?candidate_id=${id}`;
                const getInterviews = `http://161.35.189.160:8000/api/data/interviews/getInterviews?candidate_id=${id}`;
                const api5 = `http://161.35.189.160:8000/api/data/link/getLinks?candidate_id=${id}`

                // Perform all API calls concurrently
                const [response1, response2, response3] = await Promise.all([
                    axios.get(getResume),
                    axios.get(getCandidate),
                    axios.get(getInterviews),
                    axios.get(getLinks)
                ]);

                // Set state with the responses
                setResume(response1.data);
                setInterview(response2.data);
                setLinks(response3.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    // Fetch data for the active tab
    const fetchTabData = async (tab) => {
        if (!tabEndpoints[tab]) return;
        setTabLoading(true);
        try {
            const response = await axios.get(tabEndpoints[tab]);
            console.log(`${tab} Response:`, response.data); // Add this line to debug
            let tabData;
            if (tab === "Overview") {
                tabData = response.data?.overview || "No overview available.";
            } else if (tab === "Resume") {
                tabData = response.data?.resume || "No resume available.";
                console.log(response.data?.resume , "resumr data")
            } else if (tab === "Social Media" || tab === "Links") {
                tabData = response.data?.map(link => link.name + " - " + link.uri).join(", ") || "No links available.";
            } else if (tab === "Interviews") {
                tabData = response.data?.map(interview => interview.notes).join("\n") || "No interview notes available.";
            }

            dispatch({ type: "SET_TEXT_CONTENT", tab, text: tabData });
        } catch (error) {
            console.error(`Error fetching ${tab} data:`, error);
            dispatch({ type: "SET_TEXT_CONTENT", tab, text: `Failed to fetch ${tab} data.` });
        } finally {
            setTabLoading(false);
        }
    };

    // Handle text changes in the editable section
    const handleTextChange = (e) => {
        setUpdatedText(e.target.value);
    };

    // Function to update text content in the database
    const updateTextInDatabase = async (tab, text) => {
        try {
            await axios.patch(`http://161.35.189.160:8000/api/data/candidate/updateCandidate/${id}`, {
                [tab.toLowerCase().replace(/ /g, "_")]: text
            });
            alert("Text updated successfully");
        } catch (error) {
            console.error("Error updating text in database:", error);
            alert("Failed to update text. Please try again later.");
        }
    };

    // Handle save click
    const handleSave = () => {
        dispatch({ type: "SET_TEXT_CONTENT", tab: activeTab, text: updatedText });
        updateTextInDatabase(activeTab, updatedText); // Call API to save the update
        setIsEditing(false); // Exit edit mode
    };

    // Handle delete for resume or link
    const handleDelete = async (tab, idToDelete) => {
        try {
            if (tab === "Resume") {
                await axios.delete(apiActions.deleteResume(idToDelete));
            } else if (tab === "Links") {
                await axios.delete(apiActions.deleteLink(idToDelete));
            }
            alert("Deleted successfully!");
            fetchTabData(activeTab); // Refresh the data after deletion
        } catch (error) {
            console.error("Error deleting:", error);
            alert("Failed to delete. Please try again.");
        }
    };

    // // Handle adding new resume or link
    // const handleAdd = async (tab) => {
    //     const newData = prompt(`Enter new ${tab.slice(0, -1)}`); // 'Resume' becomes 'Resum'
    //     if (newData) {
    //         try {
    //             if (tab === "Resume") {
    //                 await axios.post(apiActions.createResume, { resume: newData });
    //             } else if (tab === "Links") {
    //                 await axios.post(apiActions.createLink, { name: newData, uri: "http://" });
    //             }
    //             alert(`${tab} added successfully!`);
    //             fetchTabData(activeTab); // Refresh the data after adding
    //         } catch (error) {
    //             console.error(`Error adding new ${tab.toLowerCase()}:`, error);
    //             alert(`Failed to add ${tab.toLowerCase()}. Please try again.`);
    //         }
    //     }
    // };

    useEffect(() => {
        const fetchCandidate = async () => {
            try {
                const response = await axios.get(tabEndpoints["Overview"]);
                const candidateData = response.data;
                setCandidate(candidateData);

                // Initialize the Overview tab content
                dispatch({ type: "SET_TEXT_CONTENT", tab: "Overview", text: candidateData?.overview || "No overview available." });
            } catch (error) {
                console.error("Error fetching candidate details:", error);
                alert("Failed to fetch candidate details.");
            } finally {
                setLoading(false);
            }
        };

        fetchCandidate();
    }, [id]);

    if (loading) {
        return (
            <div className="p-4 bg-stone-800 text-white text-center">
                <h1>Loading Candidate Details...</h1>
            </div>
        );
    }

    if (!candidate) {
        return (
            <div className="p-4 bg-stone-800 text-white text-center">
                <h1>Candidate not found</h1>
            </div>
        );
    }

    const handleClick = (data) => {
        // Set the `user` query parameter
        navigate(`/evaluation-report?user=${data?.id}`);
    };

    const handleAddResume = (id) => {
        navigate(`/addResume/${candidate_id}`)
    }

    return (
        <div className="w-full h-full bg-white shadow-lg mx-auto my-auto border border-gray-300 overflow-hidden flex flex-col md:flex-row">
            {/* Content Section */}
            <div className="flex flex-col md:flex-row flex-grow">
                {/* Left Section (Image & Info) */}
                <div className="md:w-1/4 w-full border-b md:border-b-0 md:border-r border-gray-300 p-6 flex flex-col items-center md:items-start text-center md:text-start">
                    <div className="font-bold text-xl text-gray-500 flex items-center justify-center w-full  border-gray-700">
                        <h1 className="text-start">{candidate.first_name} {candidate.last_name}</h1>
                    </div>
                    <img
                        src={candidate.profile_picture || "https://via.placeholder.com/150"} // Fallback to placeholder if no profile picture
                        alt={`${candidate.first_name} ${candidate.last_name}`}
                        className="w-full h-60 rounded-sm object-cover mb-4"
                    />
                    <h2 className="text-lg font-medium text-gray-800">{candidate.current_organization}</h2>
                    <p className="text-sm text-gray-600">{candidate.current_position}</p>
                    <div className="w-full flex flex-col items-center justify-center">
                        <button
                            onClick={() => handleClick(candidate)}
                            className="bg-gray-400 hover:bg-gray-300 rounded-lg px-2 py-2 my-4 border border-gray-500">Generate Evaluation Report</button>
                        <div className="mt-4 px-4 py-1 bg-green-100 text-green-700 font-medium rounded-full">
                            {candidate.gm_experience ? "Experienced GM" : "In the running"}
                        </div>
                    </div>
                </div>

                {/* Right Section (Tabs & Content) */}
                <div className="md:w-3/4 w-full p-6">
                    <div className="flex space-x-3 w-full justify-end">
                        <button
                            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                            title="Edit"
                            onClick={handleAddResume}
                            >
                            <FaPlus className="text-gray-600" />
                        </button>
                        <button
                            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                            title="Edit"
                            onClick={() => setIsEditing(true)}
                        >
                            <FaPencilAlt className="text-gray-600" />
                        </button>
                        <button
                            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                            title="Close"
                            onClick={handleDelete}
                        >
                            <FaTimes className="text-gray-600" />
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex overflow-x-auto space-x-4 border-b mb-4">
                        {["Overview", "Resume", "Social Media", "Interviews", "Links"].map((tab) => (
                            <button
                                key={tab}
                                className={`text-gray-600 text-sm font-medium pb-2 focus:outline-none whitespace-nowrap ${activeTab === tab
                                    ? "border-b-2 border-gray-800 text-gray-800"
                                    : "border-b-2 border-transparent"
                                    }`}
                                onClick={() => handleTabClick(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="text-gray-700">
                        <div>
                            {isEditing ? (
                                <textarea
                                    value={updatedText}
                                    onChange={handleTextChange}
                                    className="w-full p-4 mb-4 border rounded-md"
                                />
                            ) : (
                                <p className="mb-4 break-words">{updatedText}</p>
                            )}
                            {isEditing && (
                                <button
                                    onClick={handleSave}
                                    className="bg-blue-500 text-white py-1 px-3 rounded-md"
                                >
                                    Save Update
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandidateDetail;
