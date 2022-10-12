import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";


function Profile(props) {
    const { error, user, isLoading, isAuthenticated } = useAuth0();

    return (
        <div>
            {user?.name || "Cargando..."}
            {console.log(error, user, isLoading, isAuthenticated)}
            {JSON.stringify(user)}
        </div>
    );
}

export default Profile;