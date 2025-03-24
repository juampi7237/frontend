import ServiceForm from "./ServiceForm";

export const ServiceModalForm = ({ serviceSelected, initialServiceForm, handlerAddService, handlerCloseForm }) => {
  return (
    <div className="abrir-modal animacion fadeIn">
      <div className="modal " style={{ display: "block" }} tabIndex="-1">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{serviceSelected.id > 0 ? "Editar" : "Crear"} Modal Usuarios</h5>
            </div>
            <div className="modal-body">
              <ServiceForm
                initialServiceForm={initialServiceForm}
                serviceSelected={serviceSelected}
                handlerAddService={handlerAddService}
                handlerCloseForm={handlerCloseForm}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
