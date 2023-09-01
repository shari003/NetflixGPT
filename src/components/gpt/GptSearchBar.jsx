/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux"
import lang from "../../utils/languageConstants"
import { useRef, useState } from "react";
import openai from "../../utils/openAi";
import { API_GET_OPT } from "../../utils/constants";
import {addGptMovies, setGptLoading} from "../../utils/gptSlice";


const GptSearchBar = () => {

    const dispatch = useDispatch();
    const language = useSelector(store => store.config.lang);
    const searchText = useRef(null);
    const [error, setError] = useState(false);

    const searchMovieTmdb = async(movieName) => {
        try{
            const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, API_GET_OPT);
            
            const json = await data.json();
            
            return json.results;
        }catch(err){
            console.log(err.message);
            setError(err.message);
        }
    }

    const handleGptRequest = async() => {

        // Request to GPT API
        try{
            dispatch(setGptLoading(true));
            const gptQuery = "Act as a Movie Recommendation system and suggest me some movies for the query " + searchText.current.value + ". Only give me names of 5 movies, also give results in comma separated like the example given ahead. Example Result: Gadar, Sholay, Don, Jailer, Leo";
            
            const completion = await openai.chat.completions.create({
                messages: [{ role: 'user', content: gptQuery }],
                model: 'gpt-3.5-turbo',
            });

            if(!completion.choices){
                // Error Handling
                setError(true);
            }
            setError(false);
            console.log(completion?.choices[0]?.message?.content);

            const gptMovies = completion?.choices[0]?.message?.content.split(",");
            
            const promisesMovieData = gptMovies.map(movie => searchMovieTmdb(movie));

            const gptMoviesData = await Promise.all(promisesMovieData);
            
            console.log(gptMoviesData);
            
            dispatch(addGptMovies({movieNames: gptMovies, movieData: gptMoviesData}));
            dispatch(setGptLoading(false));
            
        }catch(err){
            console.log(err.message);
            dispatch(setGptLoading(false));
            setError(err.message);
        }

    }

    

    return error ? 
        (
            <>
                <div className="pt-[20%] flex justify-center">
                    <p className="p-6 rounded-2xl text-red-700 text-xl font-bold bg-black inline">Something went wrong! Please try again later.</p>
                </div>
            </>
        ) : 
        (
            <>
                <div className="pt-[50%] md:pt-[20%] flex justify-center">
                    <form className="bg-black w-full md:w-1/2 grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
                        <input ref={searchText} type="text" className="p-2 m-4 rounded-md col-span-10" placeholder={lang[language].gptSearchPlaceholder} />
                        <button onClick={handleGptRequest} className="my-4 mr-2 md:mr-4 bg-green-500 text-white rounded-md col-span-2">{lang[language].search}</button>
                    </form>
                </div>
            </>
        )
}

export default GptSearchBar