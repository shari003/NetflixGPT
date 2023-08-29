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
import { COMMON_AVATAR, MAIN_LOGO } from "../utils/constants";

const Header = () => {

    const user = useSelector(store => store.user);
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

    return (
        <>
            <div className="absolute px-8 pb-2 w-full bg-gradient-to-b from-black z-10 flex justify-between">
                <img className="w-28 relative bottom-1" src={MAIN_LOGO} alt="logo" />  
                {
                    user && (
                        <div className="flex items-center"> 
                            <img className="w-8 h-8" src={user.photoUrl || COMMON_AVATAR} alt="usericon" />
                            <button onClick={logout} className="font-bold text-white pl-2">(Sign Out)</button>
                        </div>
                    ) 
                }
                
            </div>
        </>
    )
}

export default Header