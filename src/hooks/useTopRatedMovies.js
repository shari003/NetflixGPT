import { API_GET_OPT } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/Redux/slices/movieSlice";

const useTopRatedMovies = () => {

    // For Browse Route
    const dispatch = useDispatch();

    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);

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
    
        if(!topRatedMovies){
            getTopRatedMovies();
        }
    
    }, []); 

};

export default useTopRatedMovies;