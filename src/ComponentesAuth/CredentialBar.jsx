import React from 'react';
import { useAuth } from '../Context/AuthContext';

function CredentialBar(props) {
    const { user, logout } = useAuth()
    return (
        <div>
            {user
                ? <div>Usuario Logeado <button onClick={logout}>LogOut</button></div>
                : <div>No Logeado</div>}
            {console.log(user)}
            this is a credentialbar
        </div>
    );
}

export default CredentialBar;