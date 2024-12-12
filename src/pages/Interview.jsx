import React from "react";
// import { FaRegCircleCheck } from "react-icons/fa6";
import { TbCircleNumber1 } from "react-icons/tb";
import manager from "../Assets/manager.png";
// import { Link } from "react-router-dom";

const candidates = [
  {
    name: "Ray Agnew",
    org: "Detroit Lions",
    pos: "Assistant GM",
    status: "Add Interview",
    img: "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/lions/bhudt3jb56hii5iihwpo",
  },
  {
    name: "Mike Borgonzi",
    org: "Kansas City Chiefs",
    pos: "Assistant GM",
    status: "1st round",
    img: "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/chiefs/rozawpltgmfk2e4cdqwe",
  },
  {
    name: "Ed Dodds",
    org: "Indianapolis Colts",
    pos: "Assistant GM",
    status: "Add Interview",
    img: "https://www.indystar.com/gcdn/presto/2020/01/13/PIND/a0b37352-f368-4eb3-8db3-28aa36024ab8-AP846222619147.jpg",
  },
  {
    name: "Ian Cunningham",
    org: "Chicago Bears",
    pos: "Assistant GM",
    status: "Add Interview",
    img: "https://cst.brightspotcdn.com/dims4/default/fc1ad1a/2147483647/strip/true/crop/4658x3105+0+39/resize/840x560!/quality/90/?url=https%3A%2F%2Fchorus-production-cst-web.s3.us-east-1.amazonaws.com%2Fbrightspot%2F8d%2Fe4%2F5176a7634620a567a413044799ea%2Ftitans-gm-search-football.jpg",
  },
  {
    name: "Jef Ireland",
    org: "New Orleans Saints",
    pos: "Assistant GM",
    status: "Add Interview",
    img: "https://static.clubs.nfl.com/image/private/t_editorial_landscape_mobile/f_auto/saints/jtvyyput0oxguvg70try.jpg",
  },
  {
    name: "Alec Halaby",
    org: "Philadelphia Eagles",
    pos: "Assistant GM",
    status: "Add Interview",
    img: "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/eagles/xkatstbgr6ekr07gfili",
  },
  {
    name: "Will McClay",
    org: "Dallas Cowboys",
    pos: "VP of Player Personnel",
    status: "Add Interview",
    img: "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/cowboys/apyn4fl5xcnkguzfms1d",
  },
  {
    name: "Catherine Raîche",
    org: "Cleveland Browns",
    pos: "VP of Football Operations",
    status: "Add Interview",
    img: "https://static.clubs.nfl.com/image/private/t_editorial_landscape_mobile/f_auto/eagles/mqtay0oibcvgccnezczy.jpg",
  },
  {
    name: "Glenn Cook",
    org: "Cleveland Browns",
    pos: "Assistant GM",
    status: "Add Interview",
    img: "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/eagles/xkatstbgr6ekr07gfili",
  },
];

const Candidates = () => {
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
          >

            <div className="w-[220px] h-full">
              <img
                src={candidate.img}
                alt={candidate.name}
                className="w-full h-full rounded-l-2xl object-cover"
              />
            </div>


            <div className="flex flex-col p-6 font-medium text-sm leading-2 w-full">
              <div className="flex justify-between">
                <h1 className="">Name</h1>
                <h1 className=" text-right ">{candidate.name}</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="">Org</h1>
                <h1 className=" text-right text-nowrap ">{candidate.org}</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="">Pos</h1>
                <h1 className=" text-right text-nowrap ">{candidate.pos}</h1>
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

                  <span className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                    <a href="/add-interviews">
                    <button type="button">{candidate.status }</button>
                    </a>
                  </span>
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
