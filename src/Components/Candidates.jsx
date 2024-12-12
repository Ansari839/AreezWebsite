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
        console.log(response, "response")
        setCandidates(response.data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
        alert("Failed to fetch candidates.");
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
    console.log(candidates.status)
  }, []);

  if (loading) {
    return (
      <div className="p-4 bg-stone-800 text-white text-center">
        <h1>Loading Candidates...</h1>
      </div>
    );
  }
  const handleCardClick = (id) => {
    navigate(`/candidate/${id}`);
  };
  return (
    <div className="p-4 bg-stone-800 ">
      <div className="flex items-center space-x-4">
        <img src={manager} alt="manager" />
        <h1 className="text-2xl font-medium text-white">
          General Manager CandidatesView {">"} Candidates
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-6 items-center justify-center w-full">
        {candidates.map((candidate, index) => (
          <div
            key={index}
            className="flex border rounded-2xl shadow-lg bg-white w-full h-[169px] relative"
            onClick={() => handleCardClick(candidate.id)}
         >

            <div className="w-[220px] h-full">
              <img
                src={candidate.profile_picture || manager}
                alt={candidate.first_name}
                className="w-full h-full rounded-l-2xl object-cover"
              />
            </div>


            <div className="flex flex-col p-6 font-medium text-sm leading-2 w-full">
              <div className="flex justify-between">
                <h1 className="">Name</h1>
                <h1 className=" text-right ">{`${candidate.first_name} ${candidate.middle_name || ""}`}</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="">Org</h1>
                <h1 className=" text-right text-nowrap ">{candidate.current_organization}</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="">Pos</h1>
                <h1 className=" text-right text-nowrap ">{candidate.current_position}</h1>
              </div>
            </div>


            <div className="absolute bottom-4 right-4 flex items-center font-medium">
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
