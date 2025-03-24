import { Navigate, Route, Routes } from "react-router-dom";
import ServicePage from "../page/ServicePage";
import { ServiceProvider } from "../contexts/ServiceProvider";

export const ServiceRoutes = () => {
  return (
    <>
      <ServiceProvider>
        <Routes>
          <Route path="services" element={<ServicePage />} />
          <Route path="/" element={<Navigate to="/services" />} />
        </Routes>
      </ServiceProvider>
    </>
  );
};
