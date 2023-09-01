import { useEffect, useState } from "react"
import Header from "../Header"
import { API_GET_OPT } from "../../utils/constants";
import {addMovieInfo, addCastInfo, addMovieTrailers} from '../../utils/movieSlice';
import { useDispatch } from "react-redux";
import MainInfo from "./MainInfo";
import MovieTrailer from "./MovieTrailer";
import { Navigate, useParams } from "react-router-dom";

const MovieInfo = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const [isError, setIsError] = useState(false);

    useEffect(() => {
        
        const getMovieDetails = async() => {
            try{    
                const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, API_GET_OPT);

                if(!data.ok){
                    setIsError(true);
                    return;
                }

                const json = await data.json();
                dispatch(addMovieInfo(json));
            }catch(err){
                console.log(err.message);
                setIsError(true);
            }
        };
        
        const getCastDetails = async() => {
            try{
                const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, API_GET_OPT);

                if(!data.ok){
                    setIsError(true);
                    return;
                }

                const json = await data.json();
                dispatch(addCastInfo(json));
            }catch(err){
                console.log(err.message);
                setIsError(true);
            }
        }

        const getTrailer = async() => {
            try{
                
                const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_GET_OPT);
                if(!data.ok){
                    setIsError(true);
                    return;
                }
                const json = await data.json();
                
                const filterTrailers = json.results.filter(video => video.type==="Trailer")
                dispatch(addMovieTrailers(filterTrailers));
                // const trailer = filterTrailers.length ? filterTrailers[0] : json.results[0];
            }catch(err){
                console.log(err);
                setIsError(true);
            }

        };

        getMovieDetails();
        getCastDetails();
        getTrailer();
    
    }, []); 

    return isError ? (<Navigate to="/not-found" replace={true} />) : (
        <>
            <Header />        
            <main className="md:pt-[8%] pt-[40%] bg-gray-900 text-white pb-5">
                <section className="flex flex-col md:flex-row">
                    <MainInfo />
                    <MovieTrailer />
                </section>
            </main>
        </>
    )
}

export default MovieInfo;