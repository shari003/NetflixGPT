/* eslint-disable no-unused-vars */
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ]);

    

    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    )
}

export default Body