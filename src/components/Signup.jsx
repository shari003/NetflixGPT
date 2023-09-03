/* eslint-disable no-unused-vars */
import { useRef, useState } from "react"
import Header from "./Header"
import { checkData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/Redux/slices/userSlice";
import { BG_GLOBAL } from "../utils/constants";


const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [errorMsg, setErrorMsg] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleSubmit = async(ev) => {
        ev.preventDefault();
        // form validation if all OK then req to server else throw error on form
        // form validation in UTIL folder
        const msg = checkData(email.current.value, password.current.value);
        setErrorMsg(msg);

        if(msg) return;

        // here to login or singup
        // SIGN UP Form
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                updateProfile(user, 
                    {
                        displayName: name.current.value
                    }).then(() => {
                        // updating the name after creating an account
                        const {uid, email, displayName, photoURL} = auth.currentUser;
                        setErrorMsg(null);
                        navigate('/login');
                    }).catch((error) => {
                        setErrorMsg(error);
                });
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
                <img className="h-[120vh] object-cover md:h-[140vh] md:object-none" src={BG_GLOBAL} alt="bg-img" />
            </div>
            <form onSubmit={handleSubmit} className="absolute md:w-3/12 p-12 bg-black md:my-32 my-24 mx-auto right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">
                    Sign Up
                </h1>

                <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-800 rounded-md" ref={name}/>
                <input type="email" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800 rounded-md" ref={email} />
                <input type="password" placeholder="Password (Min. 8 characters)" className="p-4 my-4 w-full bg-gray-800 rounded-md" ref={password}/>

                <div className="text-xs p-4">
                    <ul className="list-disc">
                        <li className="py-2">Password should consist of a Numeric, Uppercase, Lowercase and Special Characters</li>
                    </ul>
                </div>

                {errorMsg!==null &&  <p className="text-red-700 font-bold text-lg py-2">{errorMsg}</p>}

                <button className="p-3 my-6 bg-red-700 w-full rounded-lg">
                    Sign Up
                </button>

                
                <p className="py-4">Already have an Account? <br /> <span className="cursor-pointer hover:underline"><Link to={'/login'}>Sign In</Link></span> Now!</p>
                
            </form>
        </>
    )
}

export default Login