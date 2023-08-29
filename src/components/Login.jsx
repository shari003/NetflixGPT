/* eslint-disable no-unused-vars */
import { useRef, useState } from "react"
import Header from "./Header"
import { checkData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const toggleForm = async() => {
        setIsSignIn(!isSignIn);
    }

    const handleSubmit = async(ev) => {
        ev.preventDefault();
        // form validation if all OK then req to server else throw error on form
        // form validation in UTIL folder
        const msg = checkData(email.current.value, password.current.value);
        setErrorMsg(msg);

        if(msg) return;

        // here to login or singup
        if(!isSignIn){
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
                            dispatch(addUser({uid, email, displayName, photoURL}));
                            setErrorMsg(null);
                        }).catch((error) => {
                            setErrorMsg(error);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + " - " + errorMessage);
                });



        } else {
            // SIGN IN Form

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    setErrorMsg(null);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + " - " + errorMessage);
                });


        }

    }

    return (
        <>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="bg-img" />
            </div>
            <form onSubmit={handleSubmit} className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">
                    {isSignIn ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignIn && (
                    <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-800 rounded-md" ref={name}/>
                )}
                <input type="email" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800 rounded-md" ref={email} />

                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-800 rounded-md" ref={password}/>

                {errorMsg!==null &&  <p className="text-red-700 font-bold text-lg py-2">{errorMsg}</p>}

                <button className="p-3 my-6 bg-red-700 w-full rounded-lg">
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>

                {isSignIn ? (
                    <p className="py-4">New to Netflix? <br /> <span className="cursor-pointer hover:underline" onClick={toggleForm}>Sign Up</span> Now!</p>
                ) : (
                    <p className="py-4">Already have an Account? <br /> <span className="cursor-pointer hover:underline" onClick={toggleForm}>Sign In</span> Now!</p>
                )}
                
            </form>
        </>
    )
}

export default Login