/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {addUser, removeUser} from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { COMMON_AVATAR, MAIN_LOGO, SUPPORTED_LANGS } from "../utils/constants";
import {toggleGptSearchView} from '../utils/gptSlice';
import { changeLanguage } from "../utils/configSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSignOut } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const user = useSelector(store => store.user);
    const showGptView = useSelector(store => store.gpt.showGptSearch);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        signOut(auth)
            .then(() => {})
            .catch((error) => {
                navigate('/error');
            });
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid, email, displayName, photoURL}));
                // User Signed in redirect to protected route
                navigate('/browse');
                
            } else {
                // User is signed out redirect to login/signup page
                dispatch(removeUser());
                navigate('/');
            }
          });
        
          return () => unsubscribe(); 

    }, []);

    const handleGptClick = () => {
        dispatch(toggleGptSearchView());
    }

    const handleLanguage = (e) => {
        dispatch(changeLanguage(e.target.value));
    }   

    return (
        <>
            <div className="absolute px-8 pb-2 w-full bg-gradient-to-b from-black z-10 flex justify-between">
                <img className="w-28 relative bottom-1" src={MAIN_LOGO} alt="logo" />  
                {
                    user && (
                        <>
                            <div className="flex items-center justify-between"> 
                                {showGptView && (
                                    <select onChange={handleLanguage} className="outline-none opacity-90 p-1 rounded-lg bg-slate-700 text-white font-semibold">
                                        {SUPPORTED_LANGS.map((lng) => {
                                            return (<option key={lng.identifier} value={lng.identifier}>{lng.name}</option>)
                                        })}
                                    </select>
                                )}
                                <button className="py-1 px-2 m-2 mr-4 font-semibold rounded-md bg-green-300" onClick={handleGptClick}>{showGptView ? <FontAwesomeIcon className="text-gray-800" icon={faHome} /> : "GPT +"}</button>
                                <img className="w-8 h-8" src={user.photoUrl || COMMON_AVATAR} alt="usericon" />
                                <button onClick={logout} className="py-1 px-2 m-2 mr-4 font-semibold rounded-md bg-red-700 text-white pl-2"><FontAwesomeIcon icon={faSignOut} /></button>
                            </div>
                        </>
                    ) 
                }
                
            </div>
        </>
    )
}

export default Header