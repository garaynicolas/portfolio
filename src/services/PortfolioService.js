import axios from "axios";
import { API_URL } from "../constants/API_URL";

export const getProjects = async () => {
  const response = await axios.get(API_URL.PROJECTS());
  return response;
};

export const getPersonaById = async (id) => {
  const response = await axios.get(API_URL.PERSONA_BY_ID(id));
  return response;
};

export const updatePersona = async ({ id,nombre, apellido, descripcion }) => {
  try {
    return await axios.put(API_URL.PERSONA_EDIT(), {id,
      nombre,
      apellido,
      descripcion,
    });
  } catch (error) {
    throw error;
  }
};
