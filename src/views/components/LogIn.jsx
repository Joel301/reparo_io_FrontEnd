import React, { useState } from 'react';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

function LogIn(props) {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const { login, loginWithGoogle } = useAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(user.email, user.password);
            navigate("/");
        } catch (error) {
            //aqui debe de manejarse el error dependiendo lo que se tenga que hacer si no se puede logear
            console.log(error)
        }
    };
    const handleInputChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

    const googlelog = () => {
        loginWithGoogle()
        navigate("/");
    }
    return (
        <div>
            <form action="handleSubmit">

                Usuario(email/registrado): <input name={`email`} type="email" onChange={handleInputChange} />
                <br />
                Contraseña: <input name={`password`} type="password" onChange={handleInputChange} />
                <button>Logear</button>
            </form>
            <br />
            ---------linea separadora----------
            ---------linea separadora----------
            ---------linea separadora----------
            <br /> O logea con google:
            <br /><button onClick={googlelog}>Google</button>

        </div>
    );
}

export default LogIn;