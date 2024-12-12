import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed bg-stone-500 bottom-0 left-0 md:left-[259px] w-full md:w-[calc(100%-250px)] px-4 md:px-6 py-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 shadow-md -z-1">
      <input
        type="text"
        placeholder="Ask your question here"
        className="w-full md:flex-1 h-10 md:h-12 px-4 rounded bg-white/50 backdrop-blur-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
      <button className="bg-gray-400 hover:bg-gray-600 text-white w-full md:w-auto px-6 py-2 rounded flex items-center justify-center space-x-2">
        <FaPaperPlane className="w-5 h-5" />
        <span>Send</span>
      </button>
    </div>
  );
};

export default Footer;