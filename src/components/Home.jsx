import { useSelector } from 'react-redux';
import Header from './Header';
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

    const user = useSelector(store => store.user);

    const navigate = useNavigate();

    return (
        <>
            <Header />
            <main className="md:pt-[8%] pt-[40%] bg-gray-900 h-screen text-white pb-5">
                <section className='flex flex-col justify-center items-center pt-[8%]'>
                    <h1 className='text-4xl font-semibold'>
                        Welcome
                        {
                            (user.uid && user.email) ? (<span>, {user.displayName}</span>) : (", to JETFLIX")
                        }
                    </h1>
                    
                    <div className='flex w-full pt-12 justify-center'>
                        {
                            !(user.uid && user.email) ? (
                                <>
                                    <button className='block border border-solid bg-white text-red-700 text-xl border-red-700 py-2 px-4 hover:bg-red-700 hover:text-white duration-300 mr-2' onClick={() => navigate('/login')}>Sign In</button>
                                    <button className='block border border-solid border-white py-2 px-4 bg-red-700 text-white hover:bg-white hover:text-red-700 text-xl duration-300 ml-2' onClick={() => navigate('/signup')}>Sign Up</button>
                                </>
                            ) : (
                                    <>
                                        <button className='block border border-solid border-white py-2 px-4 bg-red-700 text-white hover:bg-white hover:text-red-700 text-xl duration-300 ml-2' onClick={() => navigate('/browse')}>Browse <FontAwesomeIcon className="text-xs" icon={faExternalLinkAlt} /></button>
                                    </>
                            )
                        }
                        
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home