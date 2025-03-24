import { useContext } from "react";
import { ServiceContext } from "../../contexts/ServiceContext";

export default function ServiceRow({ id, name, description }) {
  const { handlerServiceSelectedForm, handlerRemoveService } = useContext(ServiceContext);

  const onRemoveService = (id) => {
    handlerRemoveService(id);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={() =>
            handlerServiceSelectedForm({
              id,
              name,
              description,
            })
          }
        >
          update
        </button>
      </td>
      <td>
        <button type="button" className="btn btn-danger btn-sm" onClick={() => onRemoveService(id)}>
          remove
        </button>
      </td>
    </tr>
  );
}
