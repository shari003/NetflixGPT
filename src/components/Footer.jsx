const Footer = () => {
    return (
        <>
            <main className='h-auto w-full bg-gray-900 bg-gradient-to-t text-center from-black flex flex-col text-white relative bottom-0'>
                <p className="pt-5">Made with ❤️ by <span className="bg-white text-black px-1 hover:text-white hover:bg-inherit hover:border-white cursor-pointer"><a href="https://shri-dev.vercel.app/" target="_blank" rel="noopener noreferrer">KSH</a></span></p>
                {/* <ul className="w-1/4 mx-auto flex justify-evenly text-sm py-2">
                    <li className="">hh</li>
                    <li className="">hh</li>
                    <li className="">hh</li>
                    <li className="">hh</li>
                </ul> */}
                <p className="text-xs py-3">JETFLIX &copy; {new Date().getFullYear()} </p>
            </main>
        </>
    )
}

export default Footer