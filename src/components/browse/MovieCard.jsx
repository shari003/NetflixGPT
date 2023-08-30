/* eslint-disable react/prop-types */
import {POSTER_CDN} from '../../utils/constants';

const MovieCard = ({posterPath}) => {
    return (
        <>
            <div className='w-48 pr-5 hover:opacity-40 hover:duration-150'>
                {/* <div className=''>
                    <button className='text-white'>hello</button>
                </div> */}
                <div className=''>
                    <img className='' src={POSTER_CDN+`/${posterPath}`} alt="movie-poster" />
                </div>
            </div>
        </>
    )
}

export default MovieCard