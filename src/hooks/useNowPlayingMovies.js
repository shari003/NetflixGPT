import { API_GET_OPT } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {

    // For Browse Route
    const dispatch = useDispatch();

    useEffect(() => {
        const getNowPlayingMovies = async() => {
            try{    
                const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_GET_OPT);
                const json = await data.json();
                dispatch(addNowPlayingMovies(json.results));
            }catch(err){
                console.log(err.message);
            }
        };
    
        getNowPlayingMovies();
    
    }, []); 

};

export default useNowPlayingMovies;