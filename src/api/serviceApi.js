import { isAxiosError } from "axios";
import api from "./axios";

export const getAllServices = async () => {
  try {
    const { data } = await api("/services");
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      const errorMessage = error.response?.data?.error || 'Error al conectar con el servidor';
      throw new Error(errorMessage);
    }
    throw new Error('Error inesperado al cargar los servicios');
  }
};

// export const save = async ({ username, email, password }) => {
//   try {
//       return await axios.post(BASE_URL, {
//           username,
//           email,
//           password,
//       });
//   } catch (error) {
//       console.error(error);
//   }
//   return undefined;
// }

// export const update = async({ id, username, email }) => {
//   try {
//       return await axios.put(`${BASE_URL}/${id}`, {
//           username,
//           email,
//       });
//   } catch (error) {
//       console.error(error);
//   }
//   return undefined;
// }

// export const remove = async (id) => {
//   try {
//       await axios.delete(`${BASE_URL}/${id}`);
//   } catch (error) {
//       console.error(error);
//   }
// }
