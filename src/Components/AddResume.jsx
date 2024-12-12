import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddResume = () => {
    const { id } = useParams(); // Get the candidate ID from URL params
    const [filename, setFilename] = useState("");
    const [source, setSource] = useState("");
    const [skills, setSkills] = useState("");
    const [candidateId, setCandidateId] = useState(id); // Initialize with the candidate ID from URL
    const navigate = useNavigate();
    const handleAddResume = async (resumeData) => {
        try {
            const requestData = {
                filename: resumeData.filename,
                source: resumeData.source,
                skills: resumeData.skills,
                candidate_id: resumeData.candidate_id,
            };

            // Make the API request to create a resume
            const response = await axios.post('http://161.35.189.160:8000/api/data/resume/createResume', requestData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // If the API call is successful, show success message
            alert("Resume added successfully!");
            navigate(`/candidate/${candidateId}`)
            // Optionally, you can refresh the data after adding the resume
            // fetchTabData("Resume"); 
        } catch (error) {
            console.error("Error adding resume:", error);
            alert("Failed to add resume. Please try again.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare the resume data from form inputs
        const resumeData = {
            filename: filename,
            source: source,
            skills: skills.split(",").map(skill => skill.trim()),  // Convert comma-separated skills into an array
            candidate_id: candidateId,
        };

        handleAddResume(resumeData); // Call the function to add resume
    };

    return (
        <div style={styles.formContainer}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Filename:</label>
                    <input
                        type="text"
                        value={filename}
                        onChange={(e) => setFilename(e.target.value)}
                        placeholder="Enter filename"
                        style={styles.input}
                        required
                    />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Source:</label>
                    <input
                        type="text"
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                        placeholder="Enter source"
                        style={styles.input}
                        required
                    />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Skills (comma separated):</label>
                    <input
                        type="text"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        placeholder="Enter skills"
                        style={styles.input}
                        required
                    />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Candidate ID:</label>
                    <input
                        type="number"
                        value={candidateId}
                        onChange={(e) => setCandidateId(e.target.value)}
                        placeholder="Enter candidate ID"
                        style={styles.input}
                        required
                    />
                </div>

                <button type="submit" style={styles.submitButton}>Add Resume</button>
            </form>
        </div>
    );
};

const styles = {
    formContainer: {
        maxWidth: '500px',
        margin: '0 auto',
        padding: '10px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '24px',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        fontSize: '16px',
        marginBottom: '4px',
        color: '#555',
    },
    input: {
        padding: '5px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        outline: 'none',
        marginBottom: '10px',
    },
    submitButton: {
        padding: '10px 20px',
        fontSize: '18px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
};

export default AddResume;
