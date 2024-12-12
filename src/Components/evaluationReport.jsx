import React, { useEffect, useReducer, useState } from "react";
import { FaDownload, FaHome, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const EvaluationReport = () => {
    const [candidates, setCandidates] = useState([]);
    const [candidateseducation, setCandidateseducation] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resumedata, setResumedata] = useState('');
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const user = searchParams.get("user");



    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await axios.get(`http://161.35.189.160:8000/api/data/candidate/getCandidate?id=${user}`);
                setCandidates(response.data);

                const storedUser = localStorage.getItem("user");
                if (storedUser) {
                    setResumedata(storedUser);
                }
                fetchCandidatesEducation()
            } catch (error) {
                console.error("Error fetching candidates:", error);
                alert("Failed to fetch candidates.");
            } finally {
                setLoading(false);
            }
        };

        fetchCandidates();
    }, []);


    const fetchCandidatesEducation = async () => {
        try {
            const response = await axios.get(`http://161.35.189.160:8000/api/data/education/getEducation?resume_id=${user}`);
            setCandidateseducation(response.data);
            console.log('response.data39', response.data)
        } catch (error) {
            console.error("Error fetching candidates:", error);
            alert("Failed to fetch candidates.");
        } finally {
            setLoading(false);
        }
    };


    // Function to download the content as PDF
    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.text("Ray Agnew", 10, 10);
        doc.text("Current Organization: Lions", 10, 20);
        doc.text("Current Position: AGM", 10, 30);
        doc.text("NFL GM Experience: None", 10, 40);
        doc.text("\nProfessional and Athletic Experience", 10, 50);
        doc.text(
            "2021–Present: Assistant General Manager, Detroit Lions\nResponsibilities include overseeing personnel decisions, contributing to roster building, and aligning scouting strategies with team vision.",
            10,
            60
        );
        doc.text(
            "2017–2020: Director of Pro Scouting, Los Angeles Rams\nEvaluated NFL rosters, prepared for free agency, and contributed to trade and draft strategy. Played a key role in the Rams' rise to prominence, including a Super Bowl appearance.",
            10,
            80
        );
        doc.save("Ray_Agnew_Profile.pdf");
    };




    return (
        <div className="min-h-screen bg-gray-200 p-4 flex flex-col items-center evalreport">
            {/* Top Icons */}
            <div className="flex justify-end w-full space-x-4">
                <button
                    className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    title="Download PDF"
                    onClick={downloadPDF}
                >
                    <FaDownload className="text-gray-600" />
                </button>
                <button
                    className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    title="Go to Home"
                    onClick={() => navigate("/")}
                >
                    <FaHome className="text-gray-600" />
                </button>
                <button
                    className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    title="Close"
                    onClick={() => navigate(-1)}
                >
                    <FaTimes className="text-gray-600" />
                </button>
            </div>

            <div>


                <>
                    <div style={{ float: "left" }}>
                        {"{"}date_time stamp{"}"}
                    </div>
                    <div style={{ float: "right" }}>NurivaTech AI™ confidential</div>
                    <h1>
                        {candidates?.first_name} {candidates?.last_name}
                    </h1>
                    <div className="slideshow-container">
                        <div className="mySlides fade">
                            <div className="numbertext">1 / 3</div>
                            <img
                                src="https://static.clubs.nfl.com/image/private/t_editorial_landscape_6_desktop/f_auto/lions/bhudt3jb56hii5iihwpo.jpg"
                                style={{ width: "100%" }}
                            />
                            <div className="text"> {candidates?.first_name} {candidates?.last_name}</div>
                        </div>
                        <div className="mySlides fade">
                            <div className="numbertext">2 / 3</div>
                            <img
                                src="https://lionswire.usatoday.com/wp-content/uploads/sites/52/2023/11/USATSI_21172936.jpg?w=1000&h=600&crop=1"
                                style={{ width: "100%" }}
                            />
                            <div className="text"> {candidates?.first_name} {candidates?.last_name}</div>
                        </div>
                        <div className="mySlides fade">
                            <div className="numbertext">3 / 3</div>
                            <img
                                src="https://preview.redd.it/ray-agnew-assistant-general-manager-appreciation-post-v0-1fod5wpbapzc1.png?width=1080&crop=smart&auto=webp&s=a5002098a14450716f98c0ee7a647fa9bd8336f4"
                                style={{ width: "100%" }}
                            />
                            <div className="text"> {candidates?.first_name} {candidates?.last_name}</div>
                        </div>
                        {/* Next and previous buttons */}
                        <a className="prev">❮</a>
                        <a className="next">❯</a>
                    </div>
                    <br />
                    {/* The dots/circles */}
                    <div style={{ textAlign: "center" }}>
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                    </div>


                    <div className="block-container">
                        <h2>Profile</h2>
                        <div className="content_container">
                            <table style={{ border: "none", borderSpacing: 10 }}>
                                <tbody style={{ border: "none" }}>
                                    <tr style={{ border: "none" }}>
                                        <td style={{ border: "none" }}>
                                            <strong>Current Position:</strong>
                                        </td>
                                        <td style={{ border: "none" }}>
                                            {candidates?.current_position}
                                        </td>
                                    </tr>
                                    <tr style={{ border: "none" }}>
                                        <td style={{ border: "none" }}>
                                            <strong>Current Orgnization:</strong>
                                        </td>
                                        <td style={{ border: "none" }}>
                                            {candidates?.current_organization}
                                        </td>
                                    </tr>
                                    <tr style={{ border: "none" }}>
                                        <td style={{ border: "none" }}>
                                            <strong>NFL GM Experience:</strong>
                                        </td>
                                        <td style={{ border: "none" }}>
                                            {`${candidates?.gm_experience}`}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <h3>Professional and Athletic Experience</h3>
                            <ul>
                                <li>
                                    <strong>
                                        {"{"}date{"}"}
                                    </strong>
                                    : {"{"}experience 1{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}date{"}"}
                                    </strong>
                                    : {"{"}experience 2{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}date{"}"}
                                    </strong>
                                    : {"{"}experience 3{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}date{"}"}
                                    </strong>
                                    : {"{"}experience 4{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}date{"}"}
                                    </strong>
                                    : {"{"}experience 5{"}"}
                                </li>
                            </ul>
                            <h3>Awards and Recognitions</h3>
                            <ul>
                                <li>
                                    <strong>
                                        {"{"}date{"}"}
                                    </strong>
                                    : {"{"}award 1{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}date{"}"}
                                    </strong>
                                    : {"{"}award 2{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}date{"}"}
                                    </strong>
                                    : {"{"}award 3{"}"}
                                </li>
                            </ul>
                            <h3>Education</h3>
                            <ul>
                                <li>
                                    <strong>
                                        {"{"}Date{"}"}
                                    </strong>
                                    : {candidateseducation?.date}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}Organization{"}"}
                                    </strong>
                                    : {candidateseducation?.candidateseducation} : {candidateseducation?.outcome} 
                                </li>
                            </ul>
                        </div>
                        <div style={{ clear: '"both"', height: "100%" }} />
                    </div>

                    <div className="block-container">
                        <h2>Leadership</h2>
                        <div className="content_container">
                            <h3>Leadership Experience</h3>
                            <p>
                                {"{"}Leadership Experience{"}"}
                            </p>
                            <h3>Leadership Strengths</h3>
                            <ol>
                                <li>
                                    <strong>
                                        {"{"}lead strength 1{"}"}
                                    </strong>
                                    : {"{"}lead strength 1 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}lead strength 2{"}"}
                                    </strong>
                                    : {"{"}lead strength 2 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}lead strength 3{"}"}
                                    </strong>
                                    : {"{"}lead strength 3 description{"}"}
                                </li>
                            </ol>
                            <h3>Leadership Weaknesses</h3>
                            <ol>
                                <li>
                                    <strong>
                                        {"{"}lead weakness 1{"}"}
                                    </strong>
                                    : {"{"}lead weakness 1 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}lead weakness 2{"}"}
                                    </strong>
                                    : {"{"}lead weakness 2 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}lead weakness 3{"}"}
                                    </strong>
                                    : {"{"}lead weakness 3 description{"}"}
                                </li>
                            </ol>
                            <h3>Leadership Summary</h3>
                            <p>
                                {"{"}Leadership Summary{"}"}
                            </p>
                            <h3>Leadership Score</h3>
                            <p>
                                {"{"}Leadership Score{"}"}
                            </p>
                        </div>
                        <div style={{ clear: '"both"', height: "100%" }} />
                    </div>
                    <div className="block-container">
                        <h2>Judgment / Evaluation</h2>
                        <div className="content_container">
                            <h3>Judgment / Evaluation Experience</h3>
                            <p>
                                {"{"}Judgment / Evaluation Experience{"}"}
                            </p>
                            <h3>Judgment Strengths</h3>
                            <ol>
                                <li>
                                    <strong>
                                        {"{"}judge strength 1{"}"}
                                    </strong>
                                    : {"{"}judge strength 1 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}judge strength 2{"}"}
                                    </strong>
                                    : {"{"}judge strength 2 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}judge strength 3{"}"}
                                    </strong>
                                    : {"{"}judge strength 3 description{"}"}
                                </li>
                            </ol>
                            <h3>Judgment Weaknesses</h3>
                            <ol>
                                <li>
                                    <strong>
                                        {"{"}judge weakness 1{"}"}
                                    </strong>
                                    : {"{"}judge weakness 1 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}judge weakness 2{"}"}
                                    </strong>
                                    : {"{"}judge weakness 2 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}judge weakness 3{"}"}
                                    </strong>
                                    : {"{"}judge weakness 3 description{"}"}
                                </li>
                            </ol>
                            <h3>Judgment Summary</h3>
                            <p>
                                {"{"}Judgment Summary{"}"}
                            </p>
                            <h3>Judgment Score</h3>
                            <p>
                                {"{"}Judgment Score{"}"}
                            </p>
                        </div>
                        <div style={{ clear: '"both"', height: "100%" }} />
                    </div>
                    <div className="block-container">
                        <h2>Staff Management / Staff Creation</h2>
                        <div className="content_container">
                            <h3>Staff Management Experience</h3>
                            <p>
                                {"{"}Staff Management Experience{"}"}
                            </p>
                            <h3>Staff Management Strengths</h3>
                            <ol>
                                <li>
                                    <strong>
                                        {"{"}staff strength 1{"}"}
                                    </strong>
                                    : {"{"}staff strength 1 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}staff strength 2{"}"}
                                    </strong>
                                    : {"{"}staff strength 2 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}staff strength 3{"}"}
                                    </strong>
                                    : {"{"}staff strength 3 description{"}"}
                                </li>
                            </ol>
                            <h3>Staff Management Weaknesses</h3>
                            <ol>
                                <li>
                                    <strong>
                                        {"{"}staff weakness 1{"}"}
                                    </strong>
                                    : {"{"}staff weakness 1 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}staff weakness 2{"}"}
                                    </strong>
                                    : {"{"}staff weakness 2 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}staff weakness 3{"}"}
                                    </strong>
                                    : {"{"}staff weakness 3 description{"}"}
                                </li>
                            </ol>
                            <h3>Staff Management Summary</h3>
                            <p>
                                {"{"}Staff Management Summary{"}"}
                            </p>
                            <h3>Staff Management Score</h3>
                            <p>
                                {"{"}Staff Management Score{"}"}
                            </p>
                        </div>
                        <div style={{ clear: '"both"', height: "100%" }} />
                    </div>
                    <div className="block-container">
                        <h2>QB Evaluation and Strategy</h2>
                        <div className="content_container">
                            <h3>QB Evaluation and Strategy Experience</h3>
                            <p>
                                {"{"}QB Evaluation and Strategy Experience{"}"}
                            </p>
                            <h3></h3>
                            <h3>QB Evaluation and Strategy Strengths</h3>
                            <ol>
                                <li>
                                    <strong>
                                        {"{"}qb strength 1{"}"}
                                    </strong>
                                    : {"{"}qb strength 1 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}qb strength 2{"}"}
                                    </strong>
                                    : {"{"}qb strength 2 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}qb strength 3{"}"}
                                    </strong>
                                    : {"{"}qb strength 3 description{"}"}
                                </li>
                            </ol>
                            <h3>QB Evaluation and Strategy Weaknesses</h3>
                            <ol>
                                <li>
                                    <strong>
                                        {"{"}qb weakness 1{"}"}
                                    </strong>
                                    : {"{"}qb weakness 1 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}qb weakness 2{"}"}
                                    </strong>
                                    : {"{"}qb weakness 2 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}qb weakness 3{"}"}
                                    </strong>
                                    : {"{"}qb weakness 3 description{"}"}
                                </li>
                            </ol>
                            <h3>QB Evaluation Summary</h3>
                            <p>
                                {"{"}QB Evaluation Summary{"}"}
                            </p>
                            <h3>QB Evaluation Score</h3>
                            <p>
                                {"{"}QB Evaluation Score{"}"}
                            </p>
                        </div>
                        <div style={{ clear: '"both"', height: "100%" }} />
                    </div>
                    <div className="block-container">
                        <h2>Long Term Planning</h2>
                        <div className="content_container">
                            <h3>Long Term Planning Experience</h3>
                            <p>
                                {"{"}Long Term Planning Experience{"}"}
                            </p>
                            <h3>Long Term Planning Strengths</h3>
                            <ol>
                                <li>
                                    <strong>
                                        {"{"}lt strength 1{"}"}
                                    </strong>
                                    : {"{"}lt strength 1 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}lt strength 2{"}"}
                                    </strong>
                                    : {"{"}lt strength 2 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}lt strength 3{"}"}
                                    </strong>
                                    : {"{"}lt strength 3 description{"}"}
                                </li>
                            </ol>
                            <h3>Long Term Planning Weaknesses</h3>
                            <ol>
                                <li>
                                    <strong>
                                        {"{"}lt weakness 1{"}"}
                                    </strong>
                                    : {"{"}lt weakness 1 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}lt weakness 2{"}"}
                                    </strong>
                                    : {"{"}lt weakness 2 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}lt weakness 3{"}"}
                                    </strong>
                                    : {"{"}lt weakness 3 description{"}"}
                                </li>
                            </ol>
                            <h3>Long Term Planning Summary</h3>
                            <p>
                                {"{"}Long Term Planning Summary{"}"}
                            </p>
                            <h3>Long Term Planning Score</h3>
                            <p>
                                {"{"}Long Term Planning Score{"}"}
                            </p>
                        </div>
                        <div style={{ clear: '"both"', height: "100%" }} />
                    </div>
                    <div className="block-container">
                        <h2>Salary Cap Management</h2>
                        <div className="content_container">
                            <h3>Salary Cap Management Experience</h3>
                            <p>
                                {"{"}Salary Cap Management Experience{"}"}
                            </p>
                            <h3>Salary Cap Management Strengths</h3>
                            <ol>
                                <li>
                                    <strong>
                                        {"{"}cap strength 1{"}"}
                                    </strong>
                                    : {"{"}cap strength 1 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}cap strength 2{"}"}
                                    </strong>
                                    : {"{"}cap strength 2 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}cap strength 3{"}"}
                                    </strong>
                                    : {"{"}cap strength 3 description{"}"}
                                </li>
                            </ol>
                            <h3>Salary Cap Management Weaknesses</h3>
                            <ol>
                                <li>
                                    <strong>
                                        {"{"}cap weakness 1{"}"}
                                    </strong>
                                    : {"{"}cap weakness 1 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}cap weakness 2{"}"}
                                    </strong>
                                    : {"{"}cap weakness 2 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}cap weakness 3{"}"}
                                    </strong>
                                    : {"{"}cap weakness 3 description{"}"}
                                </li>
                            </ol>
                            <h3>Salary Cap Management Summary</h3>
                            <p>
                                {"{"}Salary Cap Management Summary{"}"}
                            </p>
                            <h3>Salary Cap Management Score</h3>
                            <p>
                                {"{"}Salary Cap Management Score{"}"}
                            </p>
                        </div>
                        <div style={{ clear: '"both"', height: "100%" }} />
                    </div>
                    <div className="block-container">
                        <h2>Owner Relations</h2>
                        <div className="content_container">
                            <h3>Owner Relations Experience</h3>
                            <p>
                                {"{"}Owner Relations Experience{"}"}
                            </p>
                            <h3>Owner Relations Strengths</h3>
                            <ol>
                                <li>
                                    <strong>
                                        {"{"}owner strength 1{"}"}
                                    </strong>
                                    : {"{"}owner strength 1 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}owner strength 2{"}"}
                                    </strong>
                                    : {"{"}owner strength 2 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}owner strength 3{"}"}
                                    </strong>
                                    : {"{"}owner strength 3 description{"}"}
                                </li>
                            </ol>
                            <h3>Owner Relations Weaknesses</h3>
                            <ol>
                                <li>
                                    <strong>
                                        {"{"}owner weakness 1{"}"}
                                    </strong>
                                    : {"{"}owner weakness 1 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}owner weakness 2{"}"}
                                    </strong>
                                    : {"{"}owner weakness 2 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}owner weakness 3{"}"}
                                    </strong>
                                    : {"{"}owner weakness 3 description{"}"}
                                </li>
                            </ol>
                            <h3>Owner Relations Summary</h3>
                            <p>
                                {"{"}Owner Relations Summary{"}"}
                            </p>
                            <h3>Owner Relations Score</h3>
                            <p>
                                {"{"}Owner Relations Score{"}"}
                            </p>
                        </div>
                        <div style={{ clear: '"both"', height: "100%" }} />
                    </div>
                    <div className="block-container">
                        <h2>Public Relations</h2>
                        <div className="content_container">
                            <h3>Public Relations Experience</h3>
                            <p>
                                {"{"}Public Relations Experience{"}"}
                            </p>
                            <h3>Public Relations Strengths</h3>
                            <ol>
                                <li>
                                    <strong>
                                        {"{"}public strength 1{"}"}
                                    </strong>
                                    : {"{"}public strength 1 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}public strength 2{"}"}
                                    </strong>
                                    : {"{"}public strength 2 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}public strength 3{"}"}
                                    </strong>
                                    : {"{"}public strength 3 description{"}"}
                                </li>
                            </ol>
                            <h3>Public Relations Weaknesses</h3>
                            <ol>
                                <li>
                                    <strong>
                                        {"{"}public weakness 1{"}"}
                                    </strong>
                                    : {"{"}public weakness 1 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}public weakness 2{"}"}
                                    </strong>
                                    : {"{"}public weakness 2 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}public weakness 3{"}"}
                                    </strong>
                                    : {"{"}public weakness 3 description{"}"}
                                </li>
                            </ol>
                            <h3>Public Relations Summary</h3>
                            <p>
                                {"{"}Public Relations Summary{"}"}
                            </p>
                            <h3>Public Relations Score</h3>
                            <p>
                                {"{"}Public Relations Score{"}"}
                            </p>
                        </div>
                        <div style={{ clear: '"both"', height: "100%" }} />
                    </div>
                    <div className="block-container">
                        <h2>Analytics</h2>
                        <div className="content_container">
                            <h3>Analytics Experience</h3>
                            <p>
                                {"{"}Analytics Experience{"}"}
                            </p>
                            <h3>Analytics Strengths</h3>
                            <ol>
                                <li>
                                    <strong>
                                        {"{"}analytics strength 1{"}"}
                                    </strong>
                                    : {"{"}analytics strength 1 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}analytics strength 2{"}"}
                                    </strong>
                                    : {"{"}analytics strength 2 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}analytics strength 3{"}"}
                                    </strong>
                                    : {"{"}analytics strength 3 description{"}"}
                                </li>
                            </ol>
                            <h3>Analytics Weaknesses</h3>
                            <ol>
                                <li>
                                    <strong>
                                        {"{"}analytics weakness 1{"}"}
                                    </strong>
                                    : {"{"}analytics weakness 1 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}analytics weakness 2{"}"}
                                    </strong>
                                    : {"{"}analytics weakness 2 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}analytics weakness 3{"}"}
                                    </strong>
                                    : {"{"}analytics weakness 3 description{"}"}
                                </li>
                            </ol>
                            <h3>Analytics Summary</h3>
                            <p>
                                {"{"}Analytics Summary{"}"}
                            </p>
                            <h3>Analytics Score</h3>
                            <p>
                                {"{"}Analytics Score{"}"}
                            </p>
                        </div>
                        <div style={{ clear: '"both"', height: "100%" }} />
                    </div>
                    <div className="block-container">
                        <h2>Overall</h2>
                        <div className="content_container">
                            <h3>Overall Experience</h3>
                            <p>
                                {"{"}Overall Experience{"}"}
                            </p>
                            <h3>Overall Strengths</h3>
                            <ol>
                                <li>
                                    <strong>
                                        {"{"}overall strength 1{"}"}
                                    </strong>
                                    : {"{"}overall strength 1 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}overall strength 2{"}"}
                                    </strong>
                                    : {"{"}overall strength 2 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}overall strength 3{"}"}
                                    </strong>
                                    : {"{"}overall strength 3 description{"}"}
                                </li>
                            </ol>
                            <h3>Overall Weaknesses</h3>
                            <ol>
                                <li>
                                    <strong>
                                        {"{"}overall weakness 1{"}"}
                                    </strong>
                                    : {"{"}overall weakness 1 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}overall weakness 2{"}"}
                                    </strong>
                                    : {"{"}overall weakness 2 description{"}"}
                                </li>
                                <li>
                                    <strong>
                                        {"{"}overall weakness 3{"}"}
                                    </strong>
                                    : {"{"}overall weakness 3 description{"}"}
                                </li>
                            </ol>
                            <h3>Media Sentiment</h3>
                            <p>
                                {"{"}Media Sentiment{"}"}
                            </p>
                            <h3>Public Sentiment</h3>
                            <p>
                                {"{"}Public Sentiment{"}"}
                            </p>
                            <h3>Social Media Presence</h3>
                            <p>
                                {"{"}Social Media Presence{"}"}
                            </p>
                            <h3>Overall Summary</h3>
                            <p>
                                {"{"}Overall Summary{"}"}
                            </p>
                            <h3>Overall Score</h3>
                            <p>
                                {"{"}Overall Score{"}"}
                            </p>
                        </div>
                        <div style={{ clear: '"both"', height: "100%" }} />
                    </div>
                </>

            </div>
        </div>
    );
};

export default EvaluationReport;
