import { Navigate, Route, Routes } from "react-router-dom";
import ServicePage from "../page/ServicePage";
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
            <Route path="products" element={<ProductPage />} />
            <Route path="/" element={<Navigate to="/services" />} />
          </Routes>
        </ProductProvider>
      </ServiceProvider>
    </>
  );
};
