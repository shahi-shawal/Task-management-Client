import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user, isLoading}= useContext(AuthContext)
    const location = useLocation()

    if (isLoading) {
        return <span className="loading loading-spinner text-error loading-lg"></span>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoutes;