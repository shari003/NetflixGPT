/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons'

const VideoTitle = ({title, overview}) => {
    return (
        <>
            <div className="w-full aspect-video pt-[17%] px-20 absolute text-white bg-gradient-to-r from-black">
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="text-base py-6 w-1/4">{overview}</p>
                <div className="">
                    <button className="bg-white text-black font-semibold py-2 px-10 text-xl rounded-md mr-2 hover:bg-opacity-80"><FontAwesomeIcon icon={faPlay} className='pr-1'/> Play</button>
                    <button className="bg-gray-400 text-white font-semibold py-2 px-6 text-xl rounded-md bg-opacity-60 hover:bg-gray-800"><FontAwesomeIcon icon={faInfoCircle} className='pr-1'/>More Info</button>
                </div>
            </div>
        </>
    )
}

export default VideoTitle