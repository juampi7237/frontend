export default function ServiceRow({ handlerRemoveService, id, name, description }) {
  const onRemoveService = (id) => {
    handlerRemoveService(id);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <button type="button" className="btn btn-secondary btn-sm">
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
