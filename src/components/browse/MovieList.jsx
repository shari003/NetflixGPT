/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import MovieCard from './MovieCard';


const MovieList = ({title, movies}) => {
    return (
        <>  
        <div className='px-6 md:pt-0 pt-4 pb-5'>
            <h1 className='text-2xl md:text-3xl text-white py-4'>{title}</h1>
            <div className='flex content'>
                <div className='flex'>
                    {movies?.map(movie => <MovieCard key={movie?.id} movieId={movie?.id} posterPath={movie?.poster_path}/>)}
                </div>
            </div>
        </div>
        </>
    )
}

export default MovieList