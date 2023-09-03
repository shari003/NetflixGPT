/* eslint-disable no-unused-vars */
import Header from "./Header"
import Footer from "./Footer"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainBrowse from "./browse/MainBrowse";
import SecondaryBrowse from "./browse/SecondaryBrowse";

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
            <Footer />
        </>
    )
}

export default Browse