import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Homepage from "./Homepage";
import CreateCandidateForm from "./CreateCandidateForm";
import Candidates from "./Candidates";
// import OverviewPage from "./OverviewPage";
import CandidateDetail from "./CandidateDetail";
import EvaluationReport from "./evaluationReport";

import Interview from '../pages/Interview'
import AddInterviews from "./AddInterviews";
import Footer from "./Footer"
import AddResume from "./AddResume";
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="flex flex-col md:flex-row bg-gray-200 min-h-screen overflow-x-hidden">
   
          <div className="md:w-1/6 w-full bg-white">
            <Sidebar />
          </div>
    
          <div className="md:w-5/6 w-full">
     
            <header className="bg-[#3b3b3b71] text-white px-6 py-6">
              <h1 className="text-2xl font-semibold">
                Winston - Your AI Consultant for Winning Strategies
              </h1>
            </header>
         
            <Routes>
             
              <Route path="/" element={<Homepage />} />
            
              <Route path="/candidates" element={<Candidates />} />
              <Route path="/interview" element={<Interview />} />
              <Route path="/candidate/:id" element={<CandidateDetail />} />
              <Route path="/create-candidate" element={<CreateCandidateForm />} />
              <Route path="/evaluation-report" element={<EvaluationReport />} />
              <Route path="/add-interviews" element={<AddInterviews />} />
              <Route path="/addResume/:id" element={<AddResume />} /> 

            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Router;
