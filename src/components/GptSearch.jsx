import { BG_GLOBAL } from "../utils/constants"
import GptMovieSuggestions from "./gpt/GptMovieSuggestions"
import GptSearchBar from "./gpt/GptSearchBar"

const GptSearch = () => {
    return (
        <main>
            <div className="fixed -z-10">
                <img className="h-screen object-cover md:h-auto md:object-none" src={BG_GLOBAL} alt="bg-img" />
            </div>
            <main>
                <GptSearchBar />
                <GptMovieSuggestions />
            </main>
        </main>
    )
}

export default GptSearch