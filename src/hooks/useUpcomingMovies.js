import { API_GET_OPT } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/Redux/slices/movieSlice";

const useUpcomingMovies = () => {

    // For Browse Route
    const dispatch = useDispatch();

    const upcomingMovies = useSelector(store => store.movies.upcomingMovies);

    useEffect(() => {
        const getUpcomingMovies = async() => {
            try{    
                const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', API_GET_OPT);
                const json = await data.json();
                dispatch(addUpcomingMovies(json.results));
            }catch(err){
                console.log(err.message);
            }
        };
        
        if(!upcomingMovies){
            getUpcomingMovies();    
        }
    
    }, []); 

};

export default useUpcomingMovies;