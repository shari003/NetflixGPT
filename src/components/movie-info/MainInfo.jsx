/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux'
import { POSTER_CDN } from '../../utils/constants'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const MainInfo = () => {

    const movieDetails = useSelector(store => store.movies.movieInfo.movieDetails);
    const castDetails = useSelector(store => store.movies.movieInfo.castInfo);

    if(!movieDetails || !castDetails) return null;

    const {poster_path: posterPath, title, runtime, overview, production_countries, production_companies, genres, release_date, vote_average, vote_count} = movieDetails;

    const {cast, crew} = castDetails;

    let chars = cast.filter(c => c.known_for_department === "Acting");
    chars = chars.slice(0, 4);
    const director = crew.filter(c => c.job==="Director");

    return (
        <>
            <div className="px-4 py-1 mr-3 flex flex-col">
                <div className='w-56'>
                    <div>
                        <img src={POSTER_CDN+`/${posterPath}`} alt="" />
                    </div>
                </div>
                <section className='text-left w-72  pt-4'>
                    <h1 className='font-semibold text-xl'>{title}</h1>
                    <div className='flex'>
                        <h2 className='text-xs'>{runtime} min</h2>
                    </div>
                    <p className='pt-6 text-xs'>
                        {overview}
                    </p>
                    <div className='pt-6 text-xs'>
                        <div className='flex my-2'>
                            <div className='min-w-[6rem]'>Type: </div>
                            <span>Movie</span>
                        </div>
                        <div className='flex my-2'>
                            <div className='min-w-[6rem]'>Country: </div>
                            <span>
                                {(production_countries.map(country => country.name)).join(", ")}
                            </span>
                        </div>
                        <div className='flex my-2'>
                            <div className='min-w-[6rem]'>Genre: </div>
                            <span>
                                {(genres.map(genre => genre.name)).join(", ")}
                            </span>
                        </div>
                        <div className='flex my-2'>
                            <div className='min-w-[6rem]'>Release: </div>
                            <span>{release_date}</span>
                        </div>
                        <div className='flex my-2'>
                            <div className='min-w-[6rem]'>Director: </div>
                            <span>
                                {(director.map(d => d.name)).join(", ")}
                            </span>
                        </div>
                        <div className='flex my-2'>
                            <div className='min-w-[6rem]'>Production: </div>
                            <span>
                                {(production_companies.map(company => company.name)).join(", ")}
                            </span>
                        </div>
                        <div className='flex my-2'>
                            <div className='min-w-[6rem]'>Cast: </div>
                            <span>
                                {chars.map(char => char.name).join(", ")}
                            </span>
                        </div>
                    </div>
                </section>
                <section className='pt-4'>
                    <div className='bg-gray-800 flex flex-col p-4'>
                        <div className='mx-auto'>
                            <FontAwesomeIcon className='mx-1' icon={faStar}/>
                            <FontAwesomeIcon className='mx-1' icon={faStar}/>
                            <FontAwesomeIcon className='mx-1' icon={faStar}/>
                            <FontAwesomeIcon className='mx-1' icon={faStar}/>
                            <FontAwesomeIcon className='mx-1' icon={faStar}/>
                        </div>
                        <p className='text-xs text-center'>{vote_average} of 10 ({vote_count} reviews)</p>
                    </div>
                </section>
            </div>
            
        </>
    )
}

export default MainInfo