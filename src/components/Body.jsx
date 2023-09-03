/* eslint-disable no-unused-vars */
import { BrowserRouter, Navigate, Route, Router, RouterProvider, Routes, createBrowserRouter, useNavigate } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import Signup from './Signup'
import GptMain from './GptMain'
import MovieInfo from './movie-info/MovieInfo'
import { useSelector } from 'react-redux'
import NotFound from './NotFound'
import Home from './Home'

const Body = () => {

    const user = useSelector(store => store.user);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* Auth Routes */}
                    <Route element={<Login />} path='/login' exact/>
                    <Route element={<Signup />} path='/signup' exact/>
                    {/* Protected Routes */}
                    {user.uid && user.email && 
                        (
                            <>
                                <Route element={<Browse />} path='/browse' exact/>
                                <Route element={<GptMain />} path='/gptplus' exact/>
                                <Route element={<MovieInfo />} path='/movie/:id' exact/>
                            </>
                        )
                    }
                    
                    <Route path="/not-found" element={<NotFound />} />
                    <Route path="*" element={<Navigate to="/not-found" replace={true} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Body