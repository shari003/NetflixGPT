/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux"
import MovieList from "../browse/MovieList";

const GptMovieSuggestions = () => {

    const {movieNames, movieData} = useSelector(store => store.gpt);

    if(!movieNames || !movieData) {
        return null;
    }

    return (
        <>
            <main className="p-4 mx-4 mt-4 bg-black text-white bg-opacity-80">
                <div>
                    {movieNames.map((movieName, index) => <MovieList key={movieName} title={movieName} movies={movieData[index]} />)}
                </div>
            </main>  
        </>
    )
}

export default GptMovieSuggestions