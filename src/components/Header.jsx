/* eslint-disable no-unused-vars */
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

    const user = useSelector(store => store.user);

    console.log(user===null);

    const navigate = useNavigate();

    const logout = () => {
        signOut(auth)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                navigate('/error');
            });
    }

    return (
        <>
            <div className="absolute px-8 pb-2 w-full bg-gradient-to-b from-black z-10 flex justify-between">
                <img className="w-28 relative bottom-1" src="img/logo-netflix.png" alt="logo" />  
                {
                    user && (
                        <div className="flex items-center"> 
                            <img className="w-8 h-8" src={user.photoUrl || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"} alt="usericon" />
                            <button onClick={logout} className="font-bold text-white pl-2">(Sign Out)</button>
                        </div>
                    ) 
                }
                
            </div>
        </>
    )
}

export default Header