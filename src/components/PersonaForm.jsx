import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

export const PersonaForm = () => {
  const { personaForm, setPersonaForm,handlerEditPersona } = useContext(PortfolioContext);

  const { nombre, apellido, descripcion, } = personaForm;

  const onInputChange = ({ target }) => {
    const { name,value } = target;
    setPersonaForm({ ...personaForm, [name]: value });
  };

  const {closeForm} = useContext(PortfolioContext);

  const onSubmit = (event) => {
    event.preventDefault();
    handlerEditPersona(personaForm);
  };

  return (
    <>
      <form className="" onSubmit={onSubmit}>
      <p className="fs-6 fw-semibold m-0">Nombre:</p>
        <input
          className="form-control w-75"
          placeholder="nombre"
          name="nombre"
          value={nombre}
          onChange={onInputChange}
        />
        <p className="fs-6 fw-semibold m-0">Apellido:</p>
        <input
          className="form-control w-75"
          placeholder="apellido"
          name="apellido"
          value={apellido}
          onChange={onInputChange}
        />
        <p className="fs-6 fw-semibold m-0">Descripción:</p>
        <textarea
          className="form-control mb-2 w-75"
          rows="4"
          placeholder="descripcion"
          name="descripcion"
          value={descripcion}
          onChange={onInputChange}
        />
        <button className="btn btn-primary " type="submit">
          Editar
        </button>
        <button
          className="btn btn-danger mx-2"
          type="button"
          onClick={closeForm}
        >
          Cerrar
        </button>
      </form>
    </>
  );
};
