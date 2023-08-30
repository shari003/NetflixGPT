/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useSelector } from "react-redux";
import useTrailerVideo from "../../hooks/useTrailerVideo";


const VideoBG = ({movieId}) => {

    useTrailerVideo(movieId);

    const trailerKey = useSelector(store => store.movies.trailerVideo);

    return (
        <>
            <iframe className="w-full aspect-video" src={`https://www.youtube.com/embed/${trailerKey?.key}?&autoplay=1&mute=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </>
    )
}

export default VideoBG