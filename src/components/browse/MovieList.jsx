/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import MovieCard from './MovieCard';


const MovieList = ({title, movies}) => {
    return (
        <>  
        <div className='px-6'>
            <h1 className='text-lg md:text-3xl text-white py-4'>{title}</h1>
            <div className='flex content '>
                <div className='flex'>
                    {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie?.poster_path}/>)}
                </div>
            </div>
        </div>
        </>
    )
}

export default MovieList