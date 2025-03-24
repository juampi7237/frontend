import { useState } from "react";

export default function Sidebar({ onViewChange }) {
  const [activeView, setActiveView] = useState("services");

  const handleViewChange = (view) => {
    setActiveView(view);
    onViewChange(view);
  };

  return (
    <div
      className="card text-dark position-fixed"
      style={{
        width: "250px",
        top: "100px",
        left: "10px",
        zIndex: 1,
        overflowY: "auto",
      }}
    >
      <div className="p-3">
        <h5>Menú</h5>
        <hr />
        <ul className="nav flex-column">
          <li className="nav-item">
            <button
              className={`nav-link text-white w-100 text-start border-0 ${
                activeView === "services" ? "active bg-primary" : "active bg-secondary"
              }`}
              onClick={() => handleViewChange("services")}
            >
              <i className="bi bi-gear me-2"></i>
              Servicios
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link text-white w-100 text-start border-0 ${
                activeView === "products" ? "active bg-primary" : "active bg-secondary"
              }`}
              onClick={() => handleViewChange("products")}
            >
              <i className="bi bi-box me-2"></i>
              Productos
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
