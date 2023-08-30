import { API_GET_OPT } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {

    // For Browse Route
    const dispatch = useDispatch();

    useEffect(() => {
        const getTopRatedMovies = async() => {
            try{    
                const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', API_GET_OPT);
                const json = await data.json();
                dispatch(addTopRatedMovies(json.results));
            }catch(err){
                console.log(err.message);
            }
        };
    
        getTopRatedMovies();
    
    }, []); 

};

export default useTopRatedMovies;