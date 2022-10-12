import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function LogOutButton(props) {
    const { logout } = useAuth0()
    return (
        <div>
            <button onClick={() => logout()}>LogOut</button>
        </div>
    );
}

export default LogOutButton;