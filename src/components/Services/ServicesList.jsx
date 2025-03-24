import ServiceRow from "./ServiceRow";

export default function ServicesList({ users = [] }) {
  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>username</th>
          <th>email</th>
          <th>update</th>
          <th>remove</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, username, email }) => (
          <ServiceRow key={id} id={id} username={username} email={email} />
        ))}
      </tbody>
    </table>
  );
}
