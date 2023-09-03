import { useSelector } from "react-redux"
import { BG_GLOBAL } from "../../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"
import ShimmerList from "../shimmer/ShimmerList"

const GptSearch = () => {

    const gptLoading = useSelector(store => store.gpt.gptLoading);

    return (
        <main>
            <div className="fixed -z-10">
                <img className="h-screen object-cover md:h-auto md:object-none" src={BG_GLOBAL} alt="bg-img" />
            </div>
            <main>
                <GptSearchBar />

                {gptLoading ? (<ShimmerList />) : (<GptMovieSuggestions />)}
                </main>
        </main>
    )
}

export default GptSearch