import ServiceForm from "./components/Services/ServiceForm";
import ServicesList from "./components/Services/ServicesList";
import { useServices } from "./hooks/useService";

function App() {
  const {
    services,
    serviceSelected,
    initialServiceForm,
    handlerAddService,
    handlerRemoveService,
    handlerServiceSelectedForm,
  } = useServices();

  return (
    <div className="container my-4">
      <h2>Maestria App</h2>
      <div className="row">
        <div className="col">
          <ServiceForm
            handlerAddService={handlerAddService}
            serviceSelected={serviceSelected}
            initialServiceForm={initialServiceForm}
          />
        </div>
        <div className="col">
          {services.length === 0 ? (
            <div className="alert alert-warning">No hay Servicios en el sistema!</div>
          ) : (
            <ServicesList
              handlerServiceSelectedForm={handlerServiceSelectedForm}
              handlerRemoveService={handlerRemoveService}
              services={services}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
