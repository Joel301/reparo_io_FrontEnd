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
    useEffect(() => { }, [user,usersimple])

    return (
        usersimple && usersimple.email && <div>
            {console.log(usersimple)}
            soy una simple carta de logeo mi email es {usersimple.email}
            <button onClick={handleLogout}>Cerrar Sesion</button>
        </div>
    );
}

export default LogSimpleCard;