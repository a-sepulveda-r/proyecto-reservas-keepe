import { joinPaths } from "@remix-run/router";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  ReservePage,
  InicioSesionPage,
  RegistroPage,
  PagoReservaPage,
  MisionVisionPage,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reserva" element={<ReservePage />} />
        <Route path="/iniciarsesion" element={<InicioSesionPage />} />
        <Route path="/registro" element={<RegistroPage />} />
        <Route path="/pagoreserva" element={<PagoReservaPage />} />
        <Route path="/misionyvision" element={<MisionVisionPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
