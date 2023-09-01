/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBG from "./VideoBG";

const MainBrowse = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if(!movies) return;

    const mainMovie = movies[0];

    const {original_title, overview, id} = mainMovie;

    return (
        <>
            <main className="pt-[30%] bg-black md:pt-0">
                <VideoTitle title={original_title} overview={overview} movieId={id} />
                <VideoBG movieId={id} />
            </main>
        </>
    )
}

export default MainBrowse