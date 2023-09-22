import { useEffect, useState } from "react";
import { getProjects } from "../services/PortfolioService";
import { Project } from "./Project";

export const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((p) => setProjects(p.data));
  }, []);

  return (
    <>
      <div id="projects">
        <div className="container mb-4 " id="projects">
          <div className="row py-4  text-center">
            <h1 className="mb-0">PROJECTS</h1>
            <p className="fs-1 fw-bold mb-0 text-danger-emphasis">- - -</p>
            <p className="fs-5 fw-light">
              Here you will find some of the personal and clients projects that
              I created with each project <br /> containing its own case study
            </p>
          </div>
          {projects.map(({ id, nombre, descripcion, foto }) => (
            <Project
              key={id}
              nombre={nombre}
              descripcion={descripcion}
              foto={foto}
            />
          ))}
        </div>
      </div>
    </>
  );
};
