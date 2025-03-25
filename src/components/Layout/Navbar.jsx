import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // Aquí iría la lógica de logout
    navigate("/login");
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Maestría App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/") ? "active" : ""}`} to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/about") ? "active" : ""}`} to="/about">
                Quienes Somos
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/services") ? "active" : ""}`} to="/services">
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/products") ? "active" : ""}`} to="/products">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/contact") ? "active" : ""}`} to="/contact">
                Contacto
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
