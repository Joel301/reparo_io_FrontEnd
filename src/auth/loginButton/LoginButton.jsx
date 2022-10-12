import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";


function LoginButton(props) {
    const { loginWithRedirect } = useAuth0();
    
    return (
        <div>
            <h2>auth branch</h2>
            <button onClick={() => loginWithRedirect()}>LogIn</button>
        </div>
    );
}

export default LoginButton;