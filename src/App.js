// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./ComponentesAuth/Home";
import RutaProtegitaAdmin from "./ComponentesAuth/RutaProtegitaAdmin";
import RutaProtegitaCliente from "./ComponentesAuth/RutaProtegitaCliente";
import RutaProtegitaProfesional from "./ComponentesAuth/RutaProtegitaProfesional";
import Rutas from "./ComponentesAuth/Rutas";
import Login from "./ComponentesAuth/Login";


function App() {
    return (
        <Routes >
            <Route path="/" element={<Rutas />} />
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={<RutaProtegitaAdmin />} />
            <Route path="/cliente" element={<RutaProtegitaCliente />} />
            <Route path="/profesional" element={<RutaProtegitaProfesional />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default App;
