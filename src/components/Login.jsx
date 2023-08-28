import { useRef, useState } from "react"
import Header from "./Header"
import { checkData } from "../utils/validate";

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const toggleForm = async() => {
        setIsSignIn(!isSignIn);
    }

    const handleSubmit = async(ev) => {
        ev.preventDefault();
        // form validation if all OK then req to server else throw error on form
        // form validation in UTIL folder
        const msg = checkData(email.current.value, password.current.value);
        setErrorMsg(msg);
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
                    <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-800 rounded-md"/>
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