import { API_GET_OPT } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {

    // For Browse Route
    const dispatch = useDispatch();

    useEffect(() => {
        const getPopularMovies = async() => {
            try{    
                const data = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_GET_OPT);
                const json = await data.json();
                dispatch(addPopularMovies(json.results));
            }catch(err){
                console.log(err.message);
            }
        };
    
        getPopularMovies();
    
    }, []); 

};

export default usePopularMovies;