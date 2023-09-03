/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

const Loading = () => {
    return (
        <>  
            <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-[80] overflow-hidden bg-gray-900 flex flex-col items-center justify-center">
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
                <p className="md:w-1/3 text-sm text-center text-white">This may take a few seconds.</p>
            </div>
        </>
    )
}

export default Loading