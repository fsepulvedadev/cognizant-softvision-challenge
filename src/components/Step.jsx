import React from "react";

const Step = ({titulo, first, children, changeModal}) => {
  return (
    <div className=" rounded overflow-hidden shadow-lg flex bg-white justify-start items-center flex-col h-auto w-full md:w-1/6 mt-4 md:mt-0">
      <div className="font-bold text-xl mb-2 w-10/12 pt-4">{titulo}</div>
      {children}

      {first && (
        <div className="flex flex-col justify-end h-full">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded my-4"
            onClick={() => {
              changeModal();
            }}
          >
            Agregar Candidato
          </button>
        </div>
      )}
    </div>
  );
};

export default Step;
