import { useReducer } from "react";
import ServiceForm from "./components/Services/ServiceForm";
import ServicesList from "./components/Services/ServicesList";
import { serviceReducer } from "./reducers/ServiceReducers";

function App() {
  const initialUsers = [
    {
      id: 1,
      name: "pepe",
      description: "12345",
    },
  ];

  const [services, dispatch] = useReducer(serviceReducer, initialUsers);

  const handlerAddService = (service) => {
    console.log(service);
    dispatch({
      type: "addService",
      payload: service,
    });
  };

  const handlerRemoveService = (id) => {
    // console.log(id);
    dispatch({
      type: "deleteService",
      payload: id,
    });
  };

  return (
    <div className="container my-4">
      <h2>Maestria App</h2>
      <div className="row">
        <div className="col">
          <ServiceForm handlerAddService={handlerAddService} />
        </div>
        <div className="col">
          <ServicesList handlerRemoveService={handlerRemoveService} services={services} />
        </div>
      </div>
    </div>
  );
}

export default App;
