import React, {useState, useEffect} from "react";

import Step from "./Step";
import Candidate from "./Candidate";
import NewCandidate from "./NewCandidate";

const StepList = () => {
  const [allCandidates, setAllCandidates] = useState([]);
  const [stepOne, setStepOne] = useState([]);
  const [stepTwo, setStepTwo] = useState([]);
  const [stepTree, setStepTree] = useState([]);
  const [stepFour, setStepFour] = useState([]);
  const [stepFive, setStepFive] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const clasificarCandidatos = (candidatos) => {
    candidatos.forEach((candidato) => {
      const {step, id} = candidato;

      let allCandidates = [...stepOne, ...stepTwo, ...stepTree, ...stepFour, ...stepFive];

      console.log(allCandidates);

      const repetidos = allCandidates.find((candidate) => candidate.id === id);

      console.log(repetidos);

      switch (step) {
        case "Entrevista inicial":
          stepOne.includes(id) ? null : setStepOne((stepOne) => [...stepOne, candidato]);

          break;
        case "Entrevista técnica":
          stepTwo.includes(id) ? null : setStepTwo((stepTwo) => [...stepTwo, candidato]);
          break;
        case "Oferta":
          stepTree.includes(id) ? null : setStepTree((stepTree) => [...stepTree, candidato]);
          break;
        case "Asignacion":
          stepFour.includes(id) ? null : setStepFour((stepFour) => [...stepFour, candidato]);
          break;
        case "Rechazo":
          stepFive.includes(id) ? null : setStepFive((stepFive) => [...stepFive, candidato]);
      }
    });
  };

  const onFoward = (candidate) => {
    switch (candidate.step) {
      case "Entrevista inicial":
        const filterStepOne = stepOne.filter((candidato) => candidato.id !== candidate.id);

        candidate.step = "Entrevista técnica";

        setStepOne(filterStepOne);
        setStepTwo((stepTwo) => [...stepTwo, candidate]);
        break;
      case "Entrevista técnica":
        const filterStepTwo = stepTwo.filter((candidato) => candidato.id !== candidate.id);

        candidate.step = "Oferta";

        setStepTwo(filterStepTwo);
        setStepTree((stepTree) => [...stepTree, candidate]);
        break;
      case "Oferta":
        const filterStepTree = stepTree.filter((candidato) => candidato.id !== candidate.id);

        candidate.step = "Asignacion";

        setStepTree(filterStepTree);
        setStepFour((stepFour) => [...stepFour, candidate]);
        break;
      case "Asignacion":
        const filterStepFour = stepFour.filter((candidato) => candidato.id !== candidate.id);

        candidate.step = "Rechazo";

        setStepFour(filterStepFour);
        setStepFive((stepFive) => [...stepFive, candidate]);
        break;
      case "Rechazo":
        const filterStepFive = stepFive.filter((candidato) => candidato.id !== candidate.id);

        candidate.step = "Entrevista inicial";

        setStepFive(filterStepFive);
        setStepOne((stepOne) => [...stepOne, candidate]);
    }
  };

  const onBackwards = (candidate) => {
    switch (candidate.step) {
      case "Entrevista inicial":
        const filterStepOne = stepOne.filter((candidato) => candidato.id !== candidate.id);

        candidate.step = "Rechazo";

        setStepOne(filterStepOne);
        setStepFive((stepFive) => [...stepFive, candidate]);
        break;
      case "Entrevista técnica":
        const filterStepTwo = stepTwo.filter((candidato) => candidato.id !== candidate.id);

        candidate.step = "Entrevista inicial";

        setStepTwo(filterStepTwo);
        setStepOne((stepOne) => [...stepOne, candidate]);
        break;
      case "Oferta":
        const filterStepTree = stepTree.filter((candidato) => candidato.id !== candidate.id);

        candidate.step = "Entrevista técnica";

        setStepTree(filterStepTree);
        setStepTwo((stepTwo) => [...stepTwo, candidate]);
        break;
      case "Asignacion":
        const filterStepFour = stepFour.filter((candidato) => candidato.id !== candidate.id);

        candidate.step = "Oferta";

        setStepFour(filterStepFour);
        setStepTree((stepTree) => [...stepTree, candidate]);
        break;
      case "Rechazo":
        const filterStepFive = stepFive.filter((candidato) => candidato.id !== candidate.id);

        candidate.step = "Asignacion";

        setStepFive(filterStepFive);
        setStepFour((stepFour) => [...stepFour, candidate]);
    }
  };
  const changeModal = () => {
    setShowModal(!showModal);
  };

  const addCandidate = (nombre, apellido, comentarios) => {
    let newCandidate = {
      id: Date.now(),
      name: `${nombre} ${apellido}`,
      step: "Entrevista inicial",
      comments: comentarios,
    };

    setAllCandidates((allCandidates) => [...allCandidates, newCandidate]);
    clasificarCandidatos([newCandidate]);
    setShowModal(false);
  };

  useEffect(() => {
    fetch("src/api/candidates.json")
      .then((res) => res.json())
      .then((data) => {
        /*  let PrevCandidatos = JSON.parse(localStorage.getItem("candidatos"));
        let newCandidatos = [...PrevCandidatos, ...data];

        localStorage.setItem("candidatos", JSON.stringify(newCandidatos));
        let candidatos = JSON.parse(localStorage.getItem("candidatos")); */

        clasificarCandidatos(data);
      });
  }, []);

  /* useEffect(() => {
    setAllCandidates((allCandidates) => [
      ...allCandidates,
      ...stepOne,
      ...stepTwo,
      ...stepTree,
      ...stepFour,
      ...stepFive,
    ]);

    localStorage.setItem("candidatos", JSON.stringify(allCandidates));
  }, [stepOne, stepTwo, stepTree, stepFour, stepFive]);
 */
  return (
    <>
      {showModal && <NewCandidate addCandidate={addCandidate} changeModal={changeModal} />}

      <div
        className={`flex ${
          showModal ? "blur-sm" : ""
        } md:flex-row flex-col w-full justify-around md:pt-20`}
      >
        <Step changeModal={changeModal} first={true} titulo="Entrevista Inicial">
          {stepOne.map((candidatos) => (
            <Candidate
              key={candidatos.id}
              candidato={candidatos}
              changeModal={changeModal}
              comments={candidatos.comments}
              name={candidatos.name}
              onBackwards={onBackwards}
              onFoward={onFoward}
            />
          ))}
        </Step>
        <Step titulo="Entrevista Tecnica">
          {stepTwo.map((candidatos) => (
            <Candidate
              key={candidatos.id}
              candidato={candidatos}
              comments={candidatos.comments}
              name={candidatos.name}
              onBackwards={onBackwards}
              onFoward={onFoward}
            />
          ))}
        </Step>
        <Step titulo="Oferta">
          {stepTree.map((candidatos) => (
            <Candidate
              key={candidatos.id}
              candidato={candidatos}
              comments={candidatos.comments}
              name={candidatos.name}
              onBackwards={onBackwards}
              onFoward={onFoward}
            />
          ))}
        </Step>
        <Step titulo="Asignacion">
          {stepFour.map((candidatos) => (
            <Candidate
              key={candidatos.id}
              candidato={candidatos}
              comments={candidatos.comments}
              name={candidatos.name}
              onBackwards={onBackwards}
              onFoward={onFoward}
            />
          ))}
        </Step>
        <Step titulo="Rechazo">
          {stepFive.map((candidatos) => (
            <Candidate
              key={candidatos.id}
              candidato={candidatos}
              comments={candidatos.comments}
              name={candidatos.name}
              onBackwards={onBackwards}
              onFoward={onFoward}
            />
          ))}
        </Step>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded my-4"
            onClick={() => {
              localStorage.clear("candidatos");
            }}
          >
            Borrar Datos
          </button>
        </div>
      </div>
    </>
  );
};

export default StepList;
