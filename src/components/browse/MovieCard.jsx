/* eslint-disable react/prop-types */
import {POSTER_CDN} from '../../utils/constants';

const MovieCard = ({posterPath}) => {

    if(!posterPath){
        return null;
    }

    return (
        <>
            <div className='w-48 h-auto pr-5 hover:opacity-40 hover:duration-150'>
                <div className=''>
                    <img className='' src={POSTER_CDN+`/${posterPath}`} alt="movie-poster" />
                </div>
            </div>
        </>
    )
}

export default MovieCard