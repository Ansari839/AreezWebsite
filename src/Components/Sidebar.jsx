import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaBars, FaTimes, FaVideo } from "react-icons/fa";
import { RiFolderSettingsFill } from "react-icons/ri";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden flex justify-between items-center p-4 bg-gray-700 text-white ">
        <h1 className="font-Inter font-medium text-lg sm:text-xl">Candidates</h1>
        <button onClick={toggleMenu} className="text-xl sm:text-2xl focus:outline-none">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar for larger screens and mobile menu when open */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:block text-gray-700 bg-white md:bg-transparent md:h-full fixed md:relative top-0 left-0 w-64 md:w-auto h-full  overflow-x-hidden z-50`}
      >
        <div className="p-4 sm:p-6">
          <h1 className="font-Inter font-medium text-2xl sm:text-3xl hidden md:block">Candidates</h1>
        </div>
        <div className="border-t border-gray-400 mt-2 sm:mt-3"></div>

        <nav className="py-4 sm:py-6 flex flex-col w-full px-4 sm:px-6">
          <Link
            to="/"
            className="flex items-center w-full px-2 py-2 font-Inter text-sm sm:text-lg hover:bg-[#004E89] hover:text-white justify-start"
          >
            <FaUsers className="mr-2 sm:mr-4 w-6 sm:w-8 h-6 sm:h-8" />
            Candidates
          </Link>
          <Link
            to="/interview"
            className="flex items-center w-full px-2 py-2 font-Inter text-sm sm:text-base hover:bg-[#004E89] hover:text-white justify-start"
          >
            <FaVideo className="mr-2 sm:mr-4 w-6 sm:w-8 h-6 sm:h-8" />
            Interviews
          </Link>
          <Link
            to="/admin"
            className="flex items-center w-full px-2 py-2 font-Inter text-sm sm:text-base hover:bg-[#004E89] hover:text-white justify-start"
          >
            <RiFolderSettingsFill className="mr-2 sm:mr-4 w-6 sm:w-8 h-6 sm:h-8" />
            Admin
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;