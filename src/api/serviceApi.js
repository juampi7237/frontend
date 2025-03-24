import { isAxiosError } from "axios";
import api from "./axios";

export const getAllServices = async () => {
  try {
    const { data } = await api("/services");
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      const errorMessage = error.response?.data?.error || "Error al conectar con el servidor";
      throw new Error(errorMessage);
    }
    throw new Error("Error inesperado al cargar los servicios");
  }
};

export const createService = async ({ name, description }) => {
  try {
    return await api.post("/services", {
      name,
      description,
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateService = async ({ id, name, description }) => {
  try {
    return await api.put(`/services/${id}`, {
      name,
      description,
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteService = async (id) => {
  try {
    await api.delete(`/services/${id}`);
  } catch (error) {
    console.error(error);
  }
};
