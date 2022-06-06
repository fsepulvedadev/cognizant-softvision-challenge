import React from "react";

const Candidate = ({name, comments}) => {
  return (
    <>
      <div className="inline-flex items-center justify-between w-11/12 px-2 bg-white font-sans py-2">
        <div className="">
          <div className="font-bold ">{name}</div>
          <p className="italic">{comments}</p>
        </div>
        <div>
          <div className=" items-center hidden md:flex">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l flex items-center">
              <ion-icon name="caret-back-outline" />
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-r flex items-center">
              <ion-icon name="caret-forward-outline" />
            </button>
          </div>
          <div className="flex items-center md:hidden">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l flex items-center">
              <ion-icon name="caret-up-outline" />
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-r flex items-center">
              <ion-icon name="caret-down-outline" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Candidate;
