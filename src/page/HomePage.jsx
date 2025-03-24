import { useContext, useEffect, useState } from "react";
import { ServiceContext } from "../contexts/ServiceContext";
import { ProductContext } from "../contexts/ProductContext";
import Sidebar from "../components/Layout/Sidebar";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { services, getServices } = useContext(ServiceContext);
  const { products, getProducts } = useContext(ProductContext);
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState("services");

  useEffect(() => {
    const loadData = async () => {
      try {
        await Promise.all([getServices(), getProducts()]);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [getServices, getProducts]);

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  if (loading) {
    return (
      <div className="d-flex">
        <Sidebar onViewChange={handleViewChange} />
        <div className="flex-grow-1 p-4" style={{ marginLeft: "250px", marginTop: "56px" }}>
          <div className="alert alert-info">Cargando datos...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex">
      <Sidebar onViewChange={handleViewChange} />
      <div className="flex-grow-1 p-4" style={{ marginLeft: "250px", marginTop: "56px" }}>
        <h2 className="mb-4">Bienvenidos</h2>

        {activeView === "services" ? (
          <>
            <div className="row mb-4">
              <div className="col">
                <h3>Servicios</h3>
              </div>
            </div>

            <div className="row">
              {services.map((service) => (
                <div key={service.id} className="col-md-4 mb-3">
                  <div className="card h-100 rounded-4 shadow-sm">
                    <div style={{ height: "200px", overflow: "hidden" }}>
                      <img
                        src="https://bfesteticadental.com/wp-content/uploads/2017/06/Odontologia-Caracas-Venezuela-BF-Estetica-Dental-700x450.jpg"
                        className="card-img-top rounded-top-4 w-100 h-100 object-fit-cover"
                        alt={service.name}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{service.name}</h5>
                      <p className="card-text">{service.description}</p>
                      <Link to={`/services/${service.id}`} className="btn btn-primary">
                        Ver Detalles
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="row mb-4">
              <div className="col">
                <h3>Productos</h3>
              </div>
            </div>

            <div className="row">
              {products.map((product) => (
                <div key={product.id} className="col-md-4 mb-3">
                  <div className="card h-100 rounded-4 shadow-sm">
                    <div style={{ height: "200px", overflow: "hidden" }}>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjC2xdNLl4t2_lhYO1ksgYEkYT86pZMKdgcQ&s"
                        className="card-img-top rounded-top-4 w-100 h-100 object-fit-cover"
                        alt={product.name}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.description}</p>
                      <p className="card-text">
                        <strong>Precio:</strong> ${product.price}
                      </p>
                      <Link to={`/products/${product.id}`} className="btn btn-primary">
                        Ver Detalles
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
