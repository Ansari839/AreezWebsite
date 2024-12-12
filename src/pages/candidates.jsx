import React, { useEffect, useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { TbCircleNumber1 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import manager from "../Assets/manager.png";

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get(
          "http://161.35.189.160:8000/api/data/candidate/getAllCandidates"
        );
        setCandidates(response.data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
        alert("Failed to fetch candidates.");
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  if (loading) {
    return (
      <div className="p-4 bg-stone-800 text-white text-center">
        <h1>Loading Candidates...</h1>
      </div>
    );
  }

  return (
    <div className="p-4 bg-stone-800 min-h-screen">
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <img src={manager} alt="manager" className="w-16 h-16 sm:w-20 sm:h-20 object-cover" />
        <h1 className="text-xl sm:text-2xl font-medium text-white text-center sm:text-left">
          General Manager Candidates View {">"} Candidates
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 w-full">
        {candidates.map((candidate, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row rounded-2xl shadow-lg bg-white w-full h-auto overflow-hidden"
            onClick={() => navigate(`/candidate/${candidate.id}`)}
          >
            <div className="w-full h-48 sm:h-auto">
              <img
                src={candidate.img || manager}
                alt={candidate.first_name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col p-4 sm:p-6 font-medium text-sm leading-5 w-full">
              <div className="flex justify-between">
                <h1 className="text-gray-700">Name</h1>
                <h1 className="text-right text-gray-900">{`${candidate.first_name} ${candidate.middle_name || ""}`}</h1>
              </div>
              <div className="flex justify-between mt-2">
                <h1 className="text-gray-700">Org</h1>
                <h1 className="text-right text-gray-900 truncate">{candidate.org}</h1>
              </div>
              <div className="flex justify-between mt-2">
                <h1 className="text-gray-700">Pos</h1>
                <h1 className="text-right text-gray-900 truncate">{candidate.pos}</h1>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex items-center font-medium sm:static mt-4 sm:mt-0">
              {candidate.status === "1st round" ? (
                <>
                  <TbCircleNumber1 className="text-black w-5 h-5 mr-1" />
                  <span className="text-black text-sm">{candidate.status}</span>
                </>
              ) : (
                <>
                  <FaRegCircleCheck className="text-green-600 w-4 h-4 mr-1" />
                  <span className="text-green-600 text-sm">{candidate.status}</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Candidates;