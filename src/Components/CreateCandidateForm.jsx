import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateCandidateForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
    title: "",
    current_organization: "",
    current_position: "",
    overview: "",
    profile_picture: null,
    age: "",
    gender: "",
    gm_experience: false,
    num_calls: 0,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post(
        "http://161.35.189.160:8000/api/data/candidate/createCandidate",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Candidate created successfully:", response.data);
      alert("Candidate created successfully!");
    } catch (error) {
      console.error("Error creating candidate:", error);
      alert("Failed to create candidate.");
    }
  };

  const handleCancel = () => {
    navigate("/candidate");
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-md w-full  mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Add Candidate</h2>
        <button
          onClick={handleCancel}
          className="text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          ✖
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          {/* Profile Picture */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 border rounded-full overflow-hidden">
              {formData.profile_picture ? (
                <img
                  src={URL.createObjectURL(formData.profile_picture)}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
            </div>
            <label className="mt-2">
              <input
                type="file"
                name="profile_picture"
                onChange={handleChange}
                className="hidden"
              />
              <span className="text-sm text-blue-600 cursor-pointer hover:underline">
                Select Profile Picture
              </span>
            </label>
          </div>
          {/* Form Fields */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="middle_name"
              placeholder="Middle Name"
              value={formData.middle_name}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="current_organization"
              placeholder="Current Organization"
              value={formData.current_organization}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="current_position"
              placeholder="Current Position"
              value={formData.current_position}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option value="">Gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="Other">Other</option>
            </select>
            <label className="flex items-center col-span-2">
              <input
                type="checkbox"
                name="gm_experience"
                checked={formData.gm_experience}
                onChange={handleChange}
                className="mr-2"
              />
              GM Experience
            </label>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 border rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Add Candidate
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCandidateForm;
