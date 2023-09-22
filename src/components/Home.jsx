import { useContext, useEffect } from "react";
import { getPersonaById } from "./../services/PortfolioService";
import { PersonaModalForm } from "./PersonaModalForm";
import { usePortfolio } from "../hooks/usePortfolio";
import { PortfolioContext } from "../context/PortfolioContext";
import { About } from "./About";
import { ProjectsList } from "./ProjectsList";
import { Footer } from "./Footer";
import { AuthContext } from "../auth/context/authContex";

export const Home = () => {
  
  const {persona, setPersona, visibleForm, openForm} = useContext(PortfolioContext);

  const {nombre,apellido,descripcion} = persona;

  const {login} = useContext(AuthContext);

  useEffect(() => {
    getPersonaById(1).then((persona) => setPersona(persona.data));
  }, []);

  

  return (
    <>
    {visibleForm ? <PersonaModalForm />  : <></>}
      
      <div className="" id="home">
        <div className="position-absolute top-50 start-0 translate-middle-y mx-2 bg-light shadow d-none d-md-block">
          <img className="m-1" src="github-dark.svg" alt="" width="40px" />
          <br />
          <img className="m-1" src="linkedin-dark.svg" alt="" width="40px" />
        </div>
        <div className="text-center" id="home-cabe">
          <h1 className="pb-4 text-wrap" id="titulo">
            HI, I'M {apellido} {nombre}
          </h1>
          <p className="fs-5 fw-light " width="10%">
            {descripcion}
            {/* A Full Stack Developer specializing in the Backend of Websites and
            Web <br /> Applicationes for optimal operation of your project. */}
          </p>
          <button
            type="button"
            className="btn btn-secondary btn-lg my-4"
            id="btnProjects"
          >
            PROJECTS
          </button>
          <div>
            {login.isAdmin ? <button
              type="button"
              className="btn btn-warning btn-lg my-4"
              
              onClick={() => openForm({nombre, apellido,descripcion})}
            >
              EDITAR
            </button> : <></>}
            
          </div>
        </div>
      </div>
      <About/>
      <ProjectsList/>
      <Footer/>
    </>
  );
};
