import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Config/firebase.config";


export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState()
    const [isLoading, setLoading] = useState(true)

    
    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }
   
    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const googlelogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentuser)=>{
            setUser(currentuser)
            setLoading(false)
        }
        )
        return (unSubscribe)
    },[])
    const logout = ()=>{
        return  signOut(auth)
      }
    const authValue={
        user,
        isLoading,
        createUser,
        login,
        googlelogin,
        logout
    }
    return (
        <AuthContext.Provider value={authValue}>
           {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.object
};


export default AuthProvider;
