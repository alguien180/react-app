import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = ({ isAuthenticated }) => {

    return !isAuthenticated
    ? <Outlet />
    : <Navigate to="/" replace />
}

export default PublicRoutes;