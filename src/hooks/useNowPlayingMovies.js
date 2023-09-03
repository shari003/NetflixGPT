import { API_GET_OPT } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/Redux/slices/movieSlice";

const useNowPlayingMovies = () => {

    // For Browse Route
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

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
    
        if(!nowPlayingMovies){
            getNowPlayingMovies();
        }
    
    }, []); 

};

export default useNowPlayingMovies;