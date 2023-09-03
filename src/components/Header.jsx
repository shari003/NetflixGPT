/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { COMMON_AVATAR, MAIN_LOGO, SUPPORTED_LANGS } from "../utils/constants";

// Slice imports
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from "../utils/Redux/slices/configSlice";
import {toggleGptSearchView, removeGptMovies, disableGptSearchView, setGptLoading} from '../utils/Redux/slices/gptSlice';
import {addUser, removeUser} from '../utils/Redux/slices/userSlice';
import {removeMovieInfo} from '../utils/Redux/slices/movieSlice';

import setLocalStorage from '../utils/localStorageFunc';

const Header = () => {

    const user = useSelector(store => store.user);

    const showGptView = useSelector(store => store.gpt.showGptSearch);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        signOut(auth)
            .then(() => {
                setLocalStorage("", "", "", "");
                
                dispatch(removeUser());
                dispatch(removeGptMovies());
                dispatch(disableGptSearchView());
                dispatch(removeMovieInfo());
                dispatch(setGptLoading(false));
                
                navigate('/');
            })
            .catch((error) => {
                navigate('/not-found');
            });
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                const {uid, email, displayName, photoURL} = user;

                setLocalStorage(uid, email, displayName, photoURL);

                dispatch(addUser({uid, email, displayName, photoURL}));
                // User Signed in redirect to protected route
                
            } else {
                // User is signed out redirect to login/signup page
                dispatch(removeUser());
            }
          });
        
          return () => unsubscribe(); 

    }, []);

    const handleGptClick = () => {
        dispatch(toggleGptSearchView());
        navigate('/gptplus');
    }

    const handleHomeClick = () => {
        dispatch(toggleGptSearchView());
        navigate('/browse');
    }

    const handleLanguage = (e) => {
        dispatch(changeLanguage(e.target.value));
    }   

    const handleLogoClick = () => {
        if(user.uid){
            navigate('/browse'); 
            dispatch(disableGptSearchView());
            return;
        }
        
        navigate('/');
        dispatch(disableGptSearchView());

    }

    return (
        <>
            <div className="fixed px-8 pt-8 pb-2 w-full bg-gradient-to-b from-black bg-gray-900 z-[90] flex flex-col md:flex-row md:justify-between">
                <img className="w-28 mx-auto md:mx-0 relative bottom-1 cursor-pointer" src={MAIN_LOGO} alt="logo" onClick={handleLogoClick} />  
                {
                    (user.uid !== '' && user.email !== '') && (
                        <>
                            <div className="flex items-center justify-between"> 
                                {showGptView && (
                                    <select onChange={handleLanguage} className="outline-none opacity-90 p-1 rounded-lg bg-slate-700 text-white font-semibold">
                                        {SUPPORTED_LANGS.map((lng) => {
                                            return (<option key={lng.identifier} value={lng.identifier}>{lng.name}</option>)
                                        })}
                                    </select>
                                )}
                                {
                                    !showGptView ? (
                                        <button className="py-1 px-2 m-2 mr-4 font-semibold rounded-md bg-green-300" onClick={handleGptClick}>GPT+</button>
                                    ) : (
                                        <button className="py-1 px-2 m-2 mr-4 font-semibold rounded-md bg-green-300" onClick={handleHomeClick}><FontAwesomeIcon className="text-gray-800" icon={faHome} /></button>
                                    )
                                }

                                
                                <img className="w-8 h-8 hidden md:block" src={user.photoUrl || COMMON_AVATAR} alt="usericon" />
                                <button onClick={logout} className="py-1 px-2 m-2 ml-4 mr-4 font-semibold rounded-md bg-red-700 text-white pl-2"><FontAwesomeIcon icon={faSignOut} /></button>
                            </div>
                        </>
                    ) 
                }
                
            </div>
        </>
    )
}

export default Header