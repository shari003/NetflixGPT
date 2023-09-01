/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons'
import {Navigate, useNavigate} from 'react-router-dom'

const VideoTitle = ({title, overview, movieId}) => {
    console.log(movieId);

    const navigate = useNavigate();

    const getMovieInfo = () => {
        // <Navigate to={`/movie/${movieId}`} replace={true} />
        navigate(`/movie/${movieId}`);
    }

    return (
        <>
            <div className="w-full aspect-video pt-[17%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black">
                <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
                <p className="text-base py-6 w-1/4 hidden md:inline-block">{overview}</p>
                <div className="md:m-0 my-4">
                    <button disabled={true} className="bg-white cursor-not-allowed text-black font-semibold md:py-2 py-1 md:px-10 px-4 text-xl rounded-md mr-2 hover:bg-opacity-80"><FontAwesomeIcon icon={faPlay} className='pr-1'/> Play</button>
                    <button className="hidden md:inline-block bg-gray-400 text-white font-semibold py-2 px-6 text-xl rounded-md bg-opacity-60 hover:bg-gray-800" onClick={getMovieInfo}><FontAwesomeIcon icon={faInfoCircle} className='pr-1'/>More Info</button>
                </div>
            </div>
        </>
    )
}

export default VideoTitle