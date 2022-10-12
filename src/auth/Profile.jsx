import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";


function Profile(props) {
    const { error, user, isLoading, isAuthenticated } = useAuth0();

    return (
        isAuthenticated &&
        <div>
            <div>Nombre: {user.name}</div>
            <div>Nick: {user.nickname}</div>
            <div>Nombre Completo: {`${user.given_name} ${user.family_name}`}</div>
            <div>PP: <img src={user.picture} /></div>
            <div>Email: {user.email}</div>
            {/* <div>Nombre: {user.name}</div> */}

            {JSON.stringify(user)}
        </div>
    );
}

export default Profile;