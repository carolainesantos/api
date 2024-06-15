import { BrowserRouter, Routes, Route } from "react-router-dom";

import Body from "../layouts/Body";
import Login from "../pages/Login";
import Sobre from "../pages/Sobre";
import Filmes from "../pages/Filmes";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      {" "}
      <Routes>
        {" "}
        <Route path="/" element={<Body />}>
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />
          <Route path="/filmes" element={<Filmes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
