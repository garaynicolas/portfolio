import { useState } from "react";
import { getPersonaById, updatePersona } from "../services/PortfolioService";
import Swal from "sweetalert2";

const initialPersonaForm = {
  id: "",
  nombre: "",
  apellido: "",
  descripcion: "",
};

const initialPersona = {
  id: "",
  nombre: "",
  apellido: "",
  descripcion: "",
};

export const usePortfolio = () => {
  const [persona, setPersona] = useState(initialPersona);
  const [personaForm, setPersonaForm] = useState(initialPersonaForm);
  const [visibleForm, setVisibleForm] = useState(false);

  const handlerEditPersona = async () => {
    Swal.fire({
      title: "Desea guardar los cambios?",
      showCancelButton: true,
      confirmButtonText: "Guardar",
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let response;
        response = await updatePersona(personaForm);
        setPersona(response.data);
        Swal.fire("Cambios guardados!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("No se guardaron los cambios", "", "info");
      }
    });
  };

  const closeForm = () => {
    setVisibleForm(false);
  };

  const openForm = (user) => {
    setVisibleForm(true);
    setPersonaForm({ ...user });
  };

  return {
    persona,
    personaForm,
    visibleForm,
    setPersona,
    setPersonaForm,
    setVisibleForm,
    openForm,
    closeForm,
    handlerEditPersona,
  };
};
