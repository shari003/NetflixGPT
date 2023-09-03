/* eslint-disable no-unused-vars */
import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainBrowse from "./browse/MainBrowse";
import SecondaryBrowse from "./browse/SecondaryBrowse";
import GptSearch from "./gpt/GptSearch";
import { useSelector } from "react-redux";

const Browse = () => { 

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return (
        <>
            <Header />
            <MainBrowse />
            <SecondaryBrowse />
            {/* {
                showGptView ? 
                (
                    <GptSearch />
                ) :
                (
                    <>
                        <MainBrowse />
                        <SecondaryBrowse />
                    </>
                )
            } */}
        </>
    )
}

export default Browse