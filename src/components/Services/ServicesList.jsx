import ServiceRow from "./ServiceRow";

export default function ServicesList({ handlerRemoveService, services = [] }) {
  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>description</th>
          <th>update</th>
          <th>remove</th>
        </tr>
      </thead>
      <tbody>
        {services.map(({ id, name, description }) => (
          <ServiceRow
            key={id}
            id={id}
            name={name}
            description={description}
            handlerRemoveService={handlerRemoveService}
          />
        ))}
      </tbody>
    </table>
  );
}
