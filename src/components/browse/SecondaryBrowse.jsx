import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryBrowse = () => {

    const movies = useSelector(store => store.movies);
    
    return (
        <>
            {/* Each row below and each row has multiple cards depicing each movie of that row */}
            {/* Popular, NowPlaying, Trending, Horror */}
            <div className="bg-black">
                <div className="-mt-52 pl-12 relative z-50">
                    {movies && <main>
                        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                        <MovieList title={"Popular"} movies={movies.popularMovies} />
                        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
                    </main>}
                </div>
            </div>

        </>
    )
}

export default SecondaryBrowse