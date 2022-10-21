import React from 'react';

import { Link } from "react-router-dom";
function Rutas(props) {
    return (
        <div>
            Este es un componente general<br />
            <Link to={"/home"}>home link</Link><br />
            <Link to={"/admin"}>admin link</Link><br />
            <Link to={"/cliente"}>cliente link</Link><br />
            <Link to={"/profesional"}>profesional link</Link><br />
            <Link to={"/Login"}>Login link</Link><br />
            <Link to={"/register"}>register link</Link><br />
        </div>
    );
}

export default Rutas;