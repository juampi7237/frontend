import { Navigate, Route, Routes } from "react-router-dom";
import ServicePage from "../page/ServicePage";
import ServiceDetailPage from "../page/ServiceDetailPage";
import ProductPage from "../page/ProductPage";
import { ServiceProvider } from "../contexts/ServiceProvider";
import { ProductProvider } from "../contexts/ProductProvider";

export const ServiceRoutes = () => {
  return (
    <>
      <ServiceProvider>
        <ProductProvider>
          <Routes>
            <Route path="services" element={<ServicePage />} />
            <Route path="services/:id" element={<ServiceDetailPage />} />
            <Route path="products" element={<ProductPage />} />
            <Route path="/" element={<Navigate to="/services" />} />
          </Routes>
        </ProductProvider>
      </ServiceProvider>
    </>
  );
};
