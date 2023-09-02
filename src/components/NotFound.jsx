import { useNavigate } from "react-router-dom"
import Header from "./Header"
import { useEffect } from "react";

const NotFound = () => {

    const navigate = useNavigate();
    
    useEffect(() => {
        const redirectTimeout = setTimeout(() => {
            navigate('/');
        }, 2000);
        return () => clearTimeout(redirectTimeout);
    }, [])

    return (
        <>
            <Header />
            <main className="bg-gray-900 w-screen h-screen pt-[22%]">
                <h1 className="text-center font-bold text-4xl text-white">404 Page Not Found</h1>
                <p className="text-center mt-4 font-semibold text-2xl text-white">Redirecting to Home...</p>
            </main>
        </>
    )
}

export default NotFound