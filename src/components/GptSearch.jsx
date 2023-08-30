import { BG_GLOBAL } from "../utils/constants"
import GptMovieSuggestions from "./gpt/GptMovieSuggestions"
import GptSearchBar from "./gpt/GptSearchBar"

const GptSearch = () => {
    return (
        <main>
            <div className="fixed -z-10">
                <img src={BG_GLOBAL} alt="bg-img" />
            </div>
            <main className="">
                <GptSearchBar />
                <GptMovieSuggestions />
            </main>
        </main>
    )
}

export default GptSearch