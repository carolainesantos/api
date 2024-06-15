import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Movies from "../pages/Movies";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { RoutesContainer } from "../styles.js";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesContainer>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </RoutesContainer>
      <Footer />
    </BrowserRouter>
  );
}
