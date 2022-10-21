import React from 'react';
import { useAuth } from '../Context/AuthContext';

function CredentialBar(props) {
    const { usersimple, logout } = useAuth()
    return (
        <div>
            {usersimple
                ? <div>Usuario Logeado <button onClick={logout}>LogOut</button></div>
                : <div>No Logeado</div>}
            {console.log(usersimple)}
            this is a credentialbar
        </div>
    );
}

export default CredentialBar;