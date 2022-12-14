import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";

/*
##########################################################
Este archivo es para almacener el estado de la autenticacion y funciones 
Relacionadas.
Retorna un elemento global que permite tener presente el estado del usuario.

##########################################################
*/


const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("There is no Auth provider");
    return context;
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [usersimple, setUsersimple] = useState(null);
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    };

    const logout = () => signOut(auth);

    const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

    useEffect(() => {
        const unsubuscribe = onAuthStateChanged(auth,async (currentUser) => {
            // console.log(currentUser)
            setUser(currentUser);
            // if (currentUser) {
            //     const { email, uid } = currentUser
            //   await  axios.get("/home/user", { params: { id: uid } }).then(
            //         (response) => setUsersimple({ ...response.data })
            //     )

            // } else {
            //     setUsersimple(currentUser)
            // }
            setLoading(false);
        });
        return () => unsubuscribe();
    }, []);



    return (
        <authContext.Provider
            value={{
                signup,
                login,
                user,
                usersimple,
                logout,
                loading,
                loginWithGoogle,
                resetPassword,
            }}
        >
            {children}
        </authContext.Provider>
    );
}
