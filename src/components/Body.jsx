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

    

    return (
        <>
            {/* <RouterProvider router={appRouter} /> */}
            <BrowserRouter>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route element={<Browse />} path='/browse' exact/>
                        <Route element={<GptMain />} path='/gptplus' exact/>
                    </Route>
                    <Route element={<UnprotectedRoutes />}>
                        <Route element={<Login />} path='/login' exact/>
                        <Route element={<Signup />} path='/signup' exact/>
                    </Route>
                    <Route element={<MovieInfo />} path='/movie/:id'/>
                    <Route path="/not-found" element={<NotFound />} />
                    <Route path="*" element={<Navigate to="/not-found" replace={true} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Body