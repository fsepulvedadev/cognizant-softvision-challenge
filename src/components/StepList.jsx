import React, {useState, useEffect} from "react";

import Step from "./Step";
import Candidate from "./Candidate";

const StepList = () => {
  const [candidates, setCandidates] = useState([]);
  const [stepOne, setStepOne] = useState([]);
  const [stepTwo, setStepTwo] = useState([]);
  const [stepTree, setStepTree] = useState([]);
  const [stepFour, setStepFour] = useState([]);
  const [stepFive, setStepFive] = useState([]);

  const clasificarCandidatos = (candidatos) => {
    candidatos.forEach((candidato) => {
      const {step} = candidato;

      switch (step) {
        case "Entrevista inicial":
          let newStepOne = [...stepOne, candidato];

          setStepOne(newStepOne);
          break;
        case "Entrevista técnica":
          let newStepTwo = [...stepTwo, candidato];

          setStepTwo(newStepTwo);
          break;
        case "Oferta":
          let newStepTree = [...stepTree, candidato];

          setStepTree(newStepTree);
          break;
        case "Asignacion":
          let newStepFour = [...stepFour, candidato];

          setStepFour(newStepFour);
          break;
        case "Rechazo":
          let newStepFive = [...stepFive, candidato];

          setStepFive(newStepFive);
      }
    });
  };

  useEffect(() => {
    fetch("src/api/candidates.json")
      .then((res) => res.json())
      .then((data) => {
        clasificarCandidatos(data);
      });
  }, []);

  return (
    <div className="flex md:flex-row flex-col w-full justify-around md:pt-20">
      <Step first={true} titulo="Entrevista Inicial">
        {stepOne.map((candidatos) => (
          <Candidate key={candidatos.id} comments={candidatos.comments} name={candidatos.name} />
        ))}
      </Step>
      <Step titulo="Entrevista Tecnica">
        {stepTwo.map((candidatos) => (
          <Candidate key={candidatos.id} comments={candidatos.comments} name={candidatos.name} />
        ))}
      </Step>
      <Step titulo="Oferta">
        {stepTree.map((candidatos) => (
          <Candidate key={candidatos.id} comments={candidatos.comments} name={candidatos.name} />
        ))}
      </Step>
      <Step titulo="Asignacion">
        {stepFour.map((candidatos) => (
          <Candidate key={candidatos.id} comments={candidatos.comments} name={candidatos.name} />
        ))}
      </Step>
      <Step titulo="Rechazo">
        {stepFive.map((candidatos) => (
          <Candidate key={candidatos.id} comments={candidatos.comments} name={candidatos.name} />
        ))}
      </Step>
    </div>
  );
};

export default StepList;
