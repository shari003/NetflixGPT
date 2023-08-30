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
            <main>
                <VideoTitle title={original_title} overview={overview} />
                <VideoBG movieId={id} />
            </main>
        </>
    )
}

export default MainBrowse