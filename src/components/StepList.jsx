import React from "react";

import Step from "./Step";

const StepList = () => {
  return (
    <div className="flex md:flex-row flex-col w-full justify-around md:pt-20">
      <Step titulo="Entrevista Inicial" />
      <Step titulo="Entrevista Tecnica" />
      <Step titulo="Oferta" />
      <Step titulo="Asignacion" />
      <Step titulo="Rechazo" />
    </div>
  );
};

export default StepList;
