import ServiceForm from "./components/Services/ServiceForm";
import ServicesList from "./components/Services/ServicesList";

function App() {
  const initialUsers = [
    {
      id: 1,
      name: "pepe",
      descripton: "12345",
    },
  ];

  return (
    <div className="container my-4">
      <h2>Maestria App</h2>
      <div className="row">
        <div className="col">
          <ServiceForm />
        </div>
        <div className="col">
          <ServicesList users={initialUsers} />
        </div>
      </div>
    </div>
  );
}

export default App;
