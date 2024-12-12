import React, { useState, useEffect } from "react";
import { FaPencilAlt, FaTimes } from "react-icons/fa";

// Fake API functions (replace with actual API calls)
const updateTextInDatabase = (section, updatedText) => {
  console.log(`Updated ${section}:`, updatedText);
  // Make API call to update the text in the database
};

const OverviewPage = () => {
  // State management for editable content
  const [activeTab, setActiveTab] = useState("Overview");
  const [isEditing, setIsEditing] = useState(false);
  const [textContent, setTextContent] = useState({
    Overview: "Ray Agnew is strictly football. A former top-10 pick as a defensive tackle...",
    Resume: "A former first-round defensive lineman back in 1990, Agnew spent a decade in the NFL...",
    "Social Media": "Facebook: Ray Agnew, Twitter: @RayAgnewNFL",
    Interviews: "Interview 1: Ray Agnew speaks about leadership...",
    Links: "Google: www.google.com"
  });
  const [updatedText, setUpdatedText] = useState(textContent.Overview);

  // Handle tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setUpdatedText(textContent[tab]); // Reset updatedText when switching tabs
    setIsEditing(false); // Disable editing when switching tabs
  };

  // Handle text changes in the editable section
  const handleTextChange = (e) => {
    setUpdatedText(e.target.value);
  };

  // Handle save click
  const handleSave = () => {
    setTextContent((prev) => ({
      ...prev,
      [activeTab]: updatedText
    }));
    updateTextInDatabase(activeTab, updatedText); // Call API to save the update
    setIsEditing(false); // Exit edit mode
  };

  // Effect to update content when tab changes
  useEffect(() => {
    setUpdatedText(textContent[activeTab]);
  }, [activeTab]);

  return (
    <div className="w-full h-full bg-white shadow-lg mx-auto my-auto border border-gray-300 overflow-hidden">
      {/* Content Section */}
      <div className="flex">
        {/* Left Section (Image & Info) */}
        <div className="w-1/5 border-r border-gray-300 p-6 flex flex-col items-start text-start">
          <div className="font-bold text-xl text-gray-500 flex items-center justify-center w-full border border-gray-700">
            <h1 className="text-start">Gio Rdrz</h1>
          </div>
          <img
            src="https://via.placeholder.com/150"
            alt="Ray Agnew"
            className="w-full h-60 rounded-sm object-cover mb-4"
          />
          <h2 className="text-lg font-medium text-gray-800">Winston</h2>
          <p className="text-sm text-gray-600">GM</p>
          <div className="mt-4 px-4 py-1 bg-green-100 text-green-700 font-medium rounded-full">
            In the running
          </div>
        </div>

        {/* Right Section (Tabs & Content) */}
        <div className="w-full p-6">
          <div className="flex space-x-3 w-full justify-end">
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
            >
              <FaTimes className="text-gray-600" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4 border-b mb-4">
            {["Overview", "Resume", "Social Media", "Interviews", "Links"].map((tab) => (
              <button
                key={tab}
                className={`text-gray-600 text-sm font-medium pb-2 hover:text-gray-800 border-b-2 border-transparent hover:border-gray-800 focus:outline-none ${
                  activeTab === tab ? "border-gray-800" : ""
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
                <p className="mb-4">{updatedText}</p>
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

export default OverviewPage;
