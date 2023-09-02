/* eslint-disable no-unused-vars */
import { useRef, useState } from "react"
import Header from "./Header"
import { checkData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_GLOBAL } from "../utils/constants";
import setLocalStorage from "../utils/localStorageFunc";

const Login = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [errorMsg, setErrorMsg] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const handleSubmit = async(ev) => {
        ev.preventDefault();
        // form validation if all OK then req to server else throw error on form
        // form validation in UTIL folder
        const msg = checkData(email.current.value, password.current.value);
        setErrorMsg(msg);

        if(msg) return;
        
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const {uid, email, displayName, photoURL} = userCredential.user;
                setErrorMsg(null);
                
                setLocalStorage(uid, email, displayName, photoURL);
                
                dispatch(addUser({uid, email, displayName, photoURL}));
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorCode + " - " + errorMessage);
            });

    }

    return (
        <>
            <Header />
            <div className="absolute">
                <img className="h-screen object-cover md:h-auto md:object-none" src={BG_GLOBAL} alt="bg-img" />
            </div>
            <form onSubmit={handleSubmit} className="absolute md:w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">
                    Sign In
                </h1>
                
                <input type="email" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800 rounded-md" ref={email} />

                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-800 rounded-md" ref={password}/>

                {errorMsg !== null &&  <p className="text-red-700 font-bold text-lg py-2">{errorMsg}</p>}

                <button className="p-3 my-6 bg-red-700 w-full rounded-lg">
                    Sign In
                </button>

                
                <p className="py-4">New to JETFLIX? <br /> <span className="cursor-pointer hover:underline"><Link to={'/signup'}>Sign Up</Link></span> Now!</p>
                
            </form>
        </>
    )
}

export default Login