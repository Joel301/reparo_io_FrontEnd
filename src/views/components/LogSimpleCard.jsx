import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';


function LogSimpleCard(props) {
    const { user, usersimple, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = (e) => {
        // e.preventDefault()
        logout()
        navigate('/')
    }
    useEffect(() => { if (user && usersimple) { console.log(`${usersimple}`) } }, [user, usersimple])

    return (
        user && usersimple && usersimple.email && <div>
            <div>
                {usersimple.client ? "es cliente" : ""}
                {usersimple.professional ? "es professional" : ""}
                {usersimple.admin ? "es admin" : ""}
            </div>
            Datos en usersimple:
            <div>
                {!!usersimple.client && JSON.stringify(usersimple.client)}
                {!!usersimple.professional && JSON.stringify(usersimple.professional)}
                {!!usersimple.admin && JSON.stringify(usersimple.admin)}
            </div>
            soy una simple carta de logeo mi email es {usersimple.email}
            <button onClick={handleLogout}>Cerrar Sesion</button>
        </div>
    );
}

export default LogSimpleCard;