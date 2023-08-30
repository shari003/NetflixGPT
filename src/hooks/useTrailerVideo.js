/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { API_GET_OPT } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlice";

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();

    const trailerVideo = useSelector(store => store.movies.trailerVideo);

    useEffect(() => {
        const getTrailer = async() => {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_GET_OPT);
            const json = await data.json();

            const filterTrailers = json.results.filter(video => video.type==="Trailer")
            const trailer = filterTrailers.length ? filterTrailers[0] : json.results[0];
            dispatch(addTrailer(trailer));
        };

        if(!trailerVideo){
            getTrailer();
        }

    }, []);


}

export default useTrailerVideo;