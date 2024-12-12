import React, { useState } from "react";
import { FaSearch, FaLinkedin, FaXing, FaInstagram, FaPaperclip } from 'react-icons/fa';

const AddInterviews = () => {
    const [showModal, setShowModal] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);

    // reviews
    const [showModalReviews, setShowModalReviews] = useState(false);
    const [uploadedFileReviews, setUploadedFileReviews] = useState(null);

    const [activeTab, setActiveTab] = useState("Interviews"); // Default tab

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedFile(file);
            alert(`File uploaded: ${file.name}`);
        }
    };

    const handleFileUploadReviews = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedFile(file);
            alert(`File uploaded: ${file.name}`);
        }
    };


    const renderTabContent = () => {
        switch (activeTab) {
            case "Interviews":
                return (
                    <>
                        {/* Add File Button */}
                        <div className="mb-4">
                            <button
                                className="flex items-center px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                                onClick={() => setShowModalReviews(true)}
                            >
                                + Add File
                            </button>
                        </div>

                        <div className="overflow-x-auto bg-white shadow-md rounded border border-gray-300">

                            <table className="table-auto w-full">
                                <thead className="bg-gray-200 text-gray-700 text-sm">
                                    <tr>
                                        <th className="px-4 py-2 text-left">File</th>
                                        <th className="px-4 py-2 text-left">Date</th>
                                        <th className="px-4 py-2 text-left">Round</th>
                                        <th className="px-4 py-2 text-left">Transcript</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-gray-300 bg-gray-100 hover:bg-gray-100">
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                    </tr>

                                    <tr className="border-t border-gray-300 bg-gray-200 hover:bg-gray-100">
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                    </tr>

                                    <tr className="border-t border-gray-300 bg-gray-100 hover:bg-gray-100">
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </>
                );
            case "Reviews":
                return (
                    <div>
                        {/* Add File Button for reviews */}
                        <div className="mb-4">
                            <button
                                className="flex items-center px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                                onClick={() => setShowModal(true)}
                            >
                                + Add File
                            </button>
                        </div>
                        {/* Reviews Section */}
                        <div className="overflow-x-auto bg-white shadow-md rounded border border-gray-300">
                            <table className="table-auto w-full">
                                <thead className="bg-gray-200 text-gray-700 text-sm">
                                    <tr>
                                        <th className="px-4 py-2 text-left">File</th>
                                        <th className="px-4 py-2 text-left">Date</th>
                                        <th className="px-4 py-2 text-left">Round</th>
                                        <th className="px-4 py-2 text-left">Reviewer</th>
                                        <th className="px-4 py-2 text-left">Advance</th>
                                        <th className="px-4 py-2 text-left">Hire</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-gray-300 hover:bg-gray-100">
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                    </tr>

                                    <tr className="border-t border-gray-300 bg-gray-200 hover:bg-gray-100">
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                    </tr>

                                    <tr className="border-t border-gray-300 hover:bg-gray-100">
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="mt-4 text-lg font-semibold">Sentiment Evaluation</h3>
                        <p className="mt-2 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium iure similique laudantium nesciunt voluptatibus eum doloribus corporis aut exercitationem commodi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quas, aperiam neque hic beatae nihil?</p>

                        <h3 className="mt-4 text-lg font-semibold">Prompt History</h3>
                        <div className="overflow-x-auto bg-white shadow-md rounded border border-gray-300">
                            <table className="table-auto w-full">
                                <thead className="bg-gray-200 text-gray-700 text-sm">
                                    <tr>
                                        <th className="px-4 py-2 text-left">Prompt</th>
                                        <th className="px-4 py-2 text-left">Output</th>
                                        <th className="px-4 py-2 text-left">Date</th>
                                        <th className="px-4 py-2 text-left">Author</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-gray-300 hover:bg-gray-100">
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                    </tr>

                                    <tr className="border-t border-gray-300 bg-gray-200 hover:bg-gray-100">
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                    </tr>

                                    <tr className="border-t border-gray-300 hover:bg-gray-100">
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Suggested Prompts:
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                                placeholder="Enter prompt"
                            />
                        </div>
                    </div>
                );
            case "Transcript Analysis":
                return (
                    <div>
                        {/* Transcript Section */}

                        <div className="my-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Analyze
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                                placeholder="All Interview Transcripts for Ray Agnew"
                            />
                        </div>

                        <div className="overflow-x-auto bg-white shadow-md rounded border border-gray-300">
                            <table className="table-auto w-full">
                                <thead className="bg-gray-200 text-gray-700 text-sm">
                                    <tr>
                                        <th className="px-4 py-2 text-left">File</th>
                                        <th className="px-4 py-2 text-left">Date</th>
                                        <th className="px-4 py-2 text-left">Round</th>
                                        <th className="px-4 py-2 text-left">Reviewer</th>
                                        <th className="px-4 py-2 text-left">Advance</th>
                                        <th className="px-4 py-2 text-left">Hire</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-gray-300 hover:bg-gray-100">
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="mt-4 text-lg font-semibold">Sentiment Evaluation</h3>
                        <p className="mt-2 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium iure similique laudantium nesciunt voluptatibus eum doloribus corporis aut exercitationem commodi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quas, aperiam neque hic beatae nihil?</p>

                        <h3 className="mt-4 text-lg font-semibold">Prompt History</h3>
                        <div className="overflow-x-auto bg-white shadow-md rounded border border-gray-300">
                            <table className="table-auto w-full">
                                <thead className="bg-gray-200 text-gray-700 text-sm">
                                    <tr>
                                        <th className="px-4 py-2 text-left">Prompt</th>
                                        <th className="px-4 py-2 text-left">Output</th>
                                        <th className="px-4 py-2 text-left">Date</th>
                                        <th className="px-4 py-2 text-left">Author</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-gray-300 hover:bg-gray-100">
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Suggested Prompts:
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                                placeholder="Enter prompt"
                            />
                        </div>
                    </div>
                );
            case "Audio Analysis":
                return (
                    <div>
                        {/* Transcript Section */}

                        <div className="my-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Analyze
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                                placeholder="All Interview Transcripts for Ray Agnew"
                            />
                        </div>

                        <div className="overflow-x-auto bg-white shadow-md rounded border border-gray-300">
                            <table className="table-auto w-full">
                                <thead className="bg-gray-200 text-gray-700 text-sm">
                                    <tr>
                                        <th className="px-4 py-2 text-left">File</th>
                                        <th className="px-4 py-2 text-left">Date</th>
                                        <th className="px-4 py-2 text-left">Round</th>
                                        <th className="px-4 py-2 text-left">Reviewer</th>
                                        <th className="px-4 py-2 text-left">Advance</th>
                                        <th className="px-4 py-2 text-left">Hire</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-gray-300 hover:bg-gray-100">
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="mt-4 text-lg font-semibold">Sentiment Evaluation</h3>
                        <p className="mt-2 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium iure similique laudantium nesciunt voluptatibus eum doloribus corporis aut exercitationem commodi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quas, aperiam neque hic beatae nihil?</p>

                        <h3 className="mt-4 text-lg font-semibold">Prompt History</h3>
                        <div className="overflow-x-auto bg-white shadow-md rounded border border-gray-300">
                            <table className="table-auto w-full">
                                <thead className="bg-gray-200 text-gray-700 text-sm">
                                    <tr>
                                        <th className="px-4 py-2 text-left">Prompt</th>
                                        <th className="px-4 py-2 text-left">Output</th>
                                        <th className="px-4 py-2 text-left">Date</th>
                                        <th className="px-4 py-2 text-left">Author</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-gray-300 hover:bg-gray-100">
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Suggested Prompts:
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                                placeholder="Enter prompt"
                            />
                        </div>
                    </div>
                );
            case "Combined Sentiment Analysis":
                return (
                    // <div>
                    //     {/* Transcript Section */}

                    //     {/* analyze input & LAbel */}
                    //     <div className="my-4 ">
                    //         <label className="block text-sm font-medium text-gray-700 mb-1">
                    //             Analyze
                    //         </label>
                    //         <input
                    //             type="text"
                    //             className="border border-gray-300 rounded px-2 py-1 w-full pr-28"
                    //             placeholder="All Interview Transcripts for Ray Agnew"
                    //         />
                    //     </div>

                    //     <h3 className="mt-4 text-lg font-semibold">Sentiment Evaluation</h3>
                    //     <p className="mt-2 text-sm text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium iure similique laudantium nesciunt voluptatibus eum doloribus corporis aut exercitationem commodi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quas, aperiam neque hic beatae nihil?</p>

                    //     <h3 className="mt-4 text-lg font-semibold">Prompt History</h3>
                    //     <div className="overflow-x-auto bg-white shadow-md rounded border border-gray-300">
                    //         <table className="table-auto w-full">
                    //             <thead className="bg-gray-200 text-gray-700 text-sm">
                    //                 <tr>
                    //                     <th className="px-4 py-2 text-left">Prompt</th>
                    //                     <th className="px-4 py-2 text-left">Output</th>
                    //                     <th className="px-4 py-2 text-left">Date</th>
                    //                     <th className="px-4 py-2 text-left">Author</th>
                    //                 </tr>
                    //             </thead>
                    //             <tbody>
                    //                 <tr className="border-t border-gray-300 hover:bg-gray-100">
                    //                     <td className="px-4 py-2">-</td>
                    //                     <td className="px-4 py-2">-</td>
                    //                     <td className="px-4 py-2">-</td>
                    //                     <td className="px-4 py-2">-</td>
                    //                 </tr>
                    //                 <tr className="border-t border-gray-200 hover:bg-gray-100">
                    //                     <td className="px-4 py-2">-</td>
                    //                     <td className="px-4 py-2">-</td>
                    //                     <td className="px-4 py-2">-</td>
                    //                     <td className="px-4 py-2">-</td>
                    //                 </tr>
                    //                 <tr className="border-t border-gray-300 hover:bg-gray-100">
                    //                     <td className="px-4 py-2">-</td>
                    //                     <td className="px-4 py-2">-</td>
                    //                     <td className="px-4 py-2">-</td>
                    //                     <td className="px-4 py-2">-</td>
                    //                 </tr>
                    //             </tbody>
                    //         </table>
                    //     </div>

                    //     <div className="mt-4">
                    //         <label className="block text-sm font-medium text-gray-700 mb-1">
                    //             Suggested Prompts:
                    //         </label>
                    //         <input
                    //             type="text"
                    //             className="border border-gray-300 rounded px-2 py-1 w-full"
                    //             placeholder="Enter prompt"
                    //         />
                    //     </div>
                    // </div>
                    <>
                        <div className="h-full w-full flex items-center justify-center bg-gray-100">
                            <div className="bg-white shadow-md rounded-lg w-full h-auto p-4 flex">
                                {/* Form Section */}
                                <div className="w-2/3 pr-6">
                                    {[
                                        { label: 'Last Name' },
                                        { label: 'First Name' },
                                        { label: 'Current Team or Employer' },
                                        { label: 'Current Position or Job Title' },
                                    ].map(({ label }, index) => (
                                        <div key={index} className="mb-4 flex items-center">
                                            <label className="w-1/3 text-black">{label}</label>
                                            <input
                                                type="text"
                                                className="flex-grow p-2 border border-gray-300 rounded"
                                            />
                                            <button className="ml-2 w-8 h-8 bg-gray-300 text-black rounded-full flex items-center justify-center">
                                                <FaSearch />
                                            </button>
                                        </div>
                                    ))}
                                    {/* Media Links */}
                                    <div className="mb-4 flex items-center">
                                        <label className="w-1/3 text-black">Media</label>
                                        <div className="flex gap-4">
                                            <button className="w-8 h-8 bg-gray-300 text-black rounded-full flex items-center justify-center">
                                                <FaLinkedin />
                                            </button>
                                            <button className="w-8 h-8 bg-gray-300 text-black rounded-full flex items-center justify-center">
                                                <FaXing />
                                            </button>
                                            <button className="w-8 h-8 bg-gray-300 text-black rounded-full flex items-center justify-center">
                                                <FaInstagram />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Resume Upload */}
                                    <div className="flex items-center">
                                        <label className="w-1/3 text-black">Resume / CV</label>
                                        <button className="w-8 h-8 bg-gray-300 text-black rounded-full flex items-center justify-center">
                                            <FaPaperclip />
                                        </button>
                                    </div>
                                </div>
                                {/* Image Section */}
                                <div className="w-1/3 relative">
                                    <div className="w-full h-[90%] border border-gray-300 flex items-center justify-center">
                                        <span className="text-gray-500">Image Placeholder</span>
                                    </div>
                                    <button className="absolute bottom-4 right-4 w-8 h-8 bg-gray-300 text-black rounded-full flex items-center justify-center">
                                        <FaSearch />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4 flex pt-10 px-10 flex-col">
            {/* Page Header */}
            <div className="flex justify-between items-center mb-2">
                <ul className="flex space-x-4 bg-white border-b border-gray-300">
                    {["Interviews", "Reviews", "Transcript Analysis", "Audio Analysis", "Combined Sentiment Analysis"].map((tab, index) => (
                        <li
                            key={index}
                            className={`px-4 py-2 cursor-pointer font-medium text-sm text-gray-700 ${activeTab === tab ? "bg-gray-300" : "bg-white"
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </li>
                    ))}
                </ul>
                <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={() => window.history.back()}
                >
                    ✖
                </button>
            </div>

            {/* Tab Content */}
            {renderTabContent()}



            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 w-full h-full">
                    <div className="bg-white rounded-lg shadow-lg w-full  max-w-5xl p-6 relative mx-8">
                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                            onClick={() => setShowModal(false)}
                        >
                            ✖
                        </button>

                        {/* Modal Content */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Upload a file or drag and drop here
                            </label>
                            <input
                                type="file"
                                accept="image/*,.pdf,.doc,.docx, .png, .jpg"
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                                onChange={handleFileUpload}
                            />
                        </div>

                        {/* Input Fields */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Interview Round
                            </label>
                            <input
                                type="number"
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                                defaultValue="1"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Interview Location
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                                placeholder="Enter location"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Interview Date
                            </label>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="date"
                                    className="border border-gray-300 rounded px-2 py-1 w-full"
                                />
                            </div>
                        </div>

                        {/* Save Button */}
                        <button
                            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                            onClick={() => setShowModal(false)}
                        >
                            Save
                        </button>
                    </div>
                </div>
            )}

            {/* Modal Reviews*/}
            {showModalReviews && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 w-full h-full">
                    <div className="bg-white rounded-lg shadow-lg w-full  max-w-5xl p-6 relative mx-8">
                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                            onClick={() => setShowModalReviews(false)}
                        >
                            ✖
                        </button>

                        {/* Modal Content */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Upload a file or drag and drop here
                            </label>
                            <input
                                type="file"
                                accept="image/*,.pdf,.doc,.docx, .png, .jpg"
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                                onChange={handleFileUploadReviews}
                            />
                        </div>

                        {/* Input Fields */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Interview Round
                            </label>
                            <input
                                type="number"
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                                defaultValue="1"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Interview Location
                            </label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                                placeholder="Enter location"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Interview Date
                            </label>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="date"
                                    className="border border-gray-300 rounded px-2 py-1 w-full"
                                />
                            </div>
                        </div>

                        {/* Save Button */}
                        <button
                            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                            onClick={() => setShowModal(false)}
                        >
                            Save
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default AddInterviews;