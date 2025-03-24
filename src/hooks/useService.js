import { useReducer, useState } from "react";
import { serviceReducer } from "../reducers/ServiceReducers";
import Swal from "sweetalert2";

const initialService = [
  {
    id: 1,
    name: "pepe",
    description: "12345",
  },
];

const initialServiceForm = {
  id: 0,
  name: "",
  description: "",
};

export const useServices = () => {
  const [services, dispatch] = useReducer(serviceReducer, initialService);
  const [serviceSelected, setServiceSelected] = useState(initialServiceForm);

  const handlerAddService = (service) => {
    // console.log(service);
    let type;

    if (service.id === 0) {
      type = "addService";
    } else {
      type = "updateService";
    }
    dispatch({
      type,
      payload: service,
    });

    Swal.fire(
      service.id === 0 ? "Servicio Creado" : "Servicio Actualizado",
      service.id === 0 ? "El servicio ha sido creado con exito!" : "El servicio ha sido actualizado con exito!",
      "success"
    );
  };

  const handlerRemoveService = (id) => {
    // console.log(id);

    Swal.fire({
      title: "Esta seguro que desea eliminar?",
      text: "Cuidado el servicio sera eliminado!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: "deleteService",
          payload: id,
        });
        Swal.fire("servicio Eliminado!", "El servicio ha sido eliminado con exito!", "success");
      }
    });
  };

  const handlerServiceSelectedForm = (service) => {
    // console.log(service)
    setServiceSelected({ ...service });
  };
  return {
    services,
    serviceSelected,
    initialServiceForm,
    handlerAddService,
    handlerRemoveService,
    handlerServiceSelectedForm,
  };
};
