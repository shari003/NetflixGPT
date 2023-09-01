/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const UnprotectedRoutes = () => {
    const user = useSelector(store => store.user);
    return (
        <>
            {!user ? <Outlet/> : <Navigate to={'/browse'} />}
        </>
    )
}

export default UnprotectedRoutes