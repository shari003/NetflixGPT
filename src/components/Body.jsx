/* eslint-disable no-unused-vars */
import { BrowserRouter, Navigate, Route, Router, RouterProvider, Routes, createBrowserRouter, useNavigate } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import Signup from './Signup'
import GptMain from './GptMain'
import PrivateRoutes from './PrivateRoutes'
import MovieInfo from './movie-info/MovieInfo'
import  UnprotectedRoutes from './UnprotectedRoutes'
import { useSelector } from 'react-redux'
import NotFound from './NotFound'
import Home from './Home'

const Body = () => {

    // const appRouter = createBrowserRouter([
    //     {
    //         path: "/",
    //         element: <Login />
    //     },
    //     {
    //         path: "/browse",
    //         element: <Browse />
    //     }
    // ]);

    const user = useSelector(store => store.user);

    return (
        <>
            {/* <RouterProvider router={appRouter} /> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* Auth Routes */}
                    <Route element={<Login />} path='/login' exact/>
                    <Route element={<Signup />} path='/signup' exact/>
                    {/* Protected Routes */}
                    {user && 
                        (
                            <>
                                <Route element={<Browse />} path='/browse' exact/>
                                <Route element={<GptMain />} path='/gptplus' exact/>
                                <Route element={<MovieInfo />} path='/movie/:id' exact/>
                            </>
                        )
                    }
                    
                    {/* <Route element={<PrivateRoutes />}>
                    </Route> */}
                    
                    <Route path="/not-found" element={<NotFound />} />
                    <Route path="*" element={<Navigate to="/not-found" replace={true} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Body