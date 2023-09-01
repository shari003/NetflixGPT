/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    const user = useSelector(store => store.user);

    return (
        <>
            {user ? <Outlet /> : <Navigate to={'/login'} />}
        </>
    )
}

export default PrivateRoutes