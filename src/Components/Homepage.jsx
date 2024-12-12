import React from "react";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const navigate = useNavigate();

  return (
    <main className="p-4 sm:p-6 bg-stone-800 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-6 text-center">
        General Manager Candidates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-10">
        <button
          onClick={() => navigate("/candidates")}
          className="bg-white text-gray-800 px-6 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10 text-lg sm:text-xl lg:text-2xl font-semibold rounded-lg shadow-md border-4 border-stone-900 hover:bg-gray-200"
          style={{ boxShadow: "5px 5px gray" }}
        >
          View Candidates
        </button>

        <button
          onClick={() => navigate("/create-candidate")}
          className="bg-white text-gray-800 px-6 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10 text-lg sm:text-xl lg:text-2xl font-semibold rounded-lg shadow-md border-4 border-stone-900 hover:bg-gray-200"
          style={{ boxShadow: "5px 5px gray" }}
        >
          Add Candidate
        </button>

        <button
          className="bg-white text-gray-800 px-6 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10 text-lg sm:text-xl lg:text-2xl font-semibold rounded-lg shadow-md border-4 border-stone-900 hover:bg-gray-200"
          style={{ boxShadow: "5px 5px gray" }}
        >
          Prompt 2 (tbd)
        </button>

        <button
          className="bg-white text-gray-800 px-6 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10 text-lg sm:text-xl lg:text-2xl font-semibold rounded-lg shadow-md border-4 border-stone-900 hover:bg-gray-200"
          style={{ boxShadow: "5px 5px gray" }}
        >
          Prompt 3 (tbd)
        </button>
      </div>
    </main>
  );
};

export default Homepage;
