import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import Rutas from './Rutas';

function Register(props) {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const { signup,loginWithGoogle } = useAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(user.email, user.password);
            navigate("/home");
        } catch (error) {
            //aqui debe de manejarse el error dependiendo lo que se tenga que hacer si no se puede logear
            console.log(error)
        }
    };
    const handleInputChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

    return (
        <div>
            Esto es un magnifico Formulario de registro
            <form onSubmit={handleSubmit}>
                <br /> usuario: <input name={`email`} type="email" onChange={handleInputChange} />
                <br /> contraseña: <input name={`password`} type="password" onChange={handleInputChange} />
                <button>Registrar</button>
            </form>
            <button onClick={loginWithGoogle}>google login </button>
            <br /> <Rutas />
        </div>
    );
}

export default Register;