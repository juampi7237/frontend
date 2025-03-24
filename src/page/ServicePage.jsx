import { ServiceModalForm } from "../components/Services/ServiceModalForm";
import ServicesList from "../components/Services/ServicesList";
import { useServices } from "../hooks/useService";

export default function ServicePage() {
  const {
    services,
    serviceSelected,
    initialServiceForm,
    handlerAddService,
    handlerRemoveService,
    handlerServiceSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
    visibleForm,
  } = useServices();

  return (
    <>
      {!visibleForm || (
        <ServiceModalForm
          serviceSelected={serviceSelected}
          initialServiceForm={initialServiceForm}
          handlerAddService={handlerAddService}
          handlerCloseForm={handlerCloseForm}
        />
      )}
      <div className="container my-4">
        <h2>Maestria App</h2>
        <div className="row">
          <div className="col">
            {visibleForm || (
              <button className="btn btn-primary my-2" onClick={handlerOpenForm}>
                Nuevo Servicio
              </button>
            )}

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
    </>
  );
}
