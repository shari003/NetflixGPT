import { useSelector } from "react-redux"
import lang from "../../utils/languageConstants"


const GptSearchBar = () => {

    const language = useSelector(store => store.config.lang);

    return (
        <>
            <div className="pt-[20%] flex justify-center">
                <form className="bg-black w-1/2 grid grid-cols-12">
                    <input type="text" className="p-2 m-4 col-span-10" placeholder={lang[language].gptSearchPlaceholder} />
                    <button className="p-2 m-4 bg-green-500 text-white rounded-md col-span-2">{lang[language].search}</button>
                </form>
            </div>
        </>
    )
}

export default GptSearchBar