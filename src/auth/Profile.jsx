import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";


function Profile(props) {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated &&
        <div>
            <div>Nombre: {user.name}</div>
            <div>Nick: {user.nickname}</div>
            <div>Nombre Completo: {`${user.given_name} ${user.family_name}`}</div>
            <div>PP: <img src={user.picture} alt={user.nickname} /></div>
            <div>Email: {user.email}</div>
            <br />
            <div>
                <h6>
                    Las siguientes caracteristicas pueden ayudar a los modelos de datos del backend
                </h6>
                {JSON.stringify(user)}
            </div>

        </div>
    );
}

export default Profile;