/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {POSTER_CDN} from '../../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'

const MovieCard = ({movieId, posterPath}) => {

    const navigate = useNavigate();

    if(!posterPath){
        return null;
    }

    const getMovieInfo = () => {
        navigate(`/movie/${movieId}`);
    }

    return (
        <>
            <div className='w-36 md:w-48 h-auto pr-5 relative z-10 hover:opacity-70 hover:duration-150 '>
                <div className='opacity-0 hover:opacity-100 z-50'>
                    <button className='absolute top-20 p-1 left-4 md:top-28 md:left-6 rounded-lg z-50 text-white md:text-xl bg-gray-800 md:p-2' onClick={getMovieInfo}><FontAwesomeIcon icon={faInfoCircle} className='pr-1'/>More Info</button>
                </div>
                <img className='' src={POSTER_CDN+`/${posterPath}`} alt="movie-poster" />
            </div>
        </>
    )
}

export default MovieCard