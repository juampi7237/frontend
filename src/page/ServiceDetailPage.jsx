import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ServiceContext } from "../contexts/ServiceContext";
import { getServiceById } from "../api/serviceApi";
import Swal from "sweetalert2";

export default function ServiceDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadService = async () => {
      try {
        const data = await getServiceById(id);
        setService(data);
      } catch (error) {
        console.error("Error loading service details:", error);
        Swal.fire("Error", "No se pudieron cargar los detalles del servicio", "error");
        navigate("/services");
      } finally {
        setLoading(false);
      }
    };

    loadService();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="container my-4">
        <div className="alert alert-info">Cargando detalles del servicio...</div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="container my-4">
        <div className="alert alert-danger">Servicio no encontrado</div>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h2>Detalles del Servicio</h2>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{service.name}</h5>
          <p className="card-text">{service.description}</p>
        </div>
      </div>

      <h3>Productos Asociados</h3>
      {service.products && service.products.length > 0 ? (
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {service.products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="alert alert-warning">No hay productos asociados a este servicio</div>
      )}

      <button className="btn btn-secondary" onClick={() => navigate("/services")}>
        Volver a Servicios
      </button>
    </div>
  );
} 