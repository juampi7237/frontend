import { Route, Routes } from "react-router-dom";
import ServicePage from "../page/ServicePage";
import ServiceDetailPage from "../page/ServiceDetailPage";
import ProductPage from "../page/ProductPage";
import ProductDetailPage from "../page/ProductDetailPage";
import HomePage from "../page/HomePage";
import Layout from "../components/Layout/Layout";
import { ServiceProvider } from "../contexts/ServiceProvider";
import { ProductProvider } from "../contexts/ProductProvider";

export const ServiceRoutes = () => {
  return (
    <ServiceProvider>
      <ProductProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/services/:id" element={<ServiceDetailPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
          </Route>
        </Routes>
      </ProductProvider>
    </ServiceProvider>
  );
};
