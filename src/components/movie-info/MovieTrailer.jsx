import { useSelector } from "react-redux";

const MovieTrailer = () => {

    

    let trailers = useSelector(store => store.movies.movieInfo.trailer);
    if(!trailers) return null;
    const trailer1 = trailers[0];
    const remTrailers = trailers.slice(1);

    return (
        <>
            <div className="mr-4 w-3/4 px-2">
                <h1 className="text-3xl font-bold">Trailer & Clips</h1>
                <div className="pt-4">
                    <iframe className="w-full aspect-video" src={`https://www.youtube.com/embed/${trailer1?.key}?&autoplay=1&mute=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
                {
                    remTrailers.length > 0 && (
                        <>
                            <h2 className="pt-4 text-2xl font-semibold">Other Clips</h2>
                            <div className="flex flex-wrap">
                                {remTrailers.map((t, index) => {
                                    return (
                                        <>
                                            <div key={index} className="w-[19rem] border border-black mr-4 mt-4">
                                                <iframe className="w-full aspect-video" src={`https://www.youtube.com/embed/${t?.key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                            </div>
                                        </>
                                    )
                                })}
                                
                            </div>
                        </>
                    )
                
                }
            </div>
        </>
    )
}

export default MovieTrailer