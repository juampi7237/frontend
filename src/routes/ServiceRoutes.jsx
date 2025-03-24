import { Navigate, Route, Routes } from "react-router-dom";
import ServicePage from "../page/ServicePage";

export const ServiceRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="services" element={<ServicePage />} />
        <Route path="/" element={<Navigate to="/services" />} />
      </Routes>
    </>
  );
};
