/* eslint-disable react/prop-types */
import {POSTER_CDN} from '../../utils/constants';

const MovieCard = ({posterPath}) => {
    return (
        <>
            <div className='w-48 px-4'>
                <img src={POSTER_CDN+`/${posterPath}`} alt="movie-poster" />
            </div>
        </>
    )
}

export default MovieCard