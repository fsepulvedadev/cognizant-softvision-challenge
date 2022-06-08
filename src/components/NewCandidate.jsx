import React, {useState} from "react";

const NewCandidate = ({addCandidate, changeModal}) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [comentarios, setComentarios] = useState("");

  return (
    <div className="w-full h-full lg:w-2/4 bg-blue-500 absolute lg:h-2/5 z-50 rounded lg:left-1/4 lg:top-52 text-white">
      <div
        className="absolute top-4 left-4 cursor-pointer"
        onClick={() => {
          changeModal();
        }}
      >
        <ion-icon className="" name="close-circle-outline" size="large" />
      </div>
      <h1 className="font-bold text-xl pt-4">Agregar Candidato</h1>
      <form className="flex flex-col justify-center items-center w-full pt-5 text-black">
        <div className="flex flex-row justify-around items-center text-center">
          <div className="flex flex-col">
            <label className="text-white px-3" htmlFor="nombre">
              Nombre{" "}
            </label>
            <input
              className="p-1 rounded"
              name="nombre"
              type="text"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col pl-3">
            <label className="text-white px-3" htmlFor="apellido">
              Apellido{" "}
            </label>
            <input
              className="p-1 rounded"
              name="apellido"
              type="text"
              value={apellido}
              onChange={(e) => {
                setApellido(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full pt-4">
          <label className="text-white" htmlFor="comentarios">
            Comentarios{" "}
          </label>
          <textarea
            className="rounded max-w-full"
            cols="50"
            name="comentarios"
            rows="4"
            value={comentarios}
            onChange={(e) => {
              setComentarios(e.target.value);
            }}
          />
        </div>
        <button
          className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-2 rounded my-3 w-1/3"
          onClick={(e) => {
            e.preventDefault();
            addCandidate(nombre, apellido, comentarios);
          }}
        >
          Agregar
        </button>
      </form>
    </div>
  );
};

export default NewCandidate;
