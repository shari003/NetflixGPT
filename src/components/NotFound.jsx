import Header from "./Header"

const NotFound = () => {
    return (
        <>
            <Header />
            <main className="bg-gray-900 w-screen h-screen pt-[25%]">
                <h1 className="text-center font-bold text-4xl text-white">404 Page Not Found</h1>
            </main>
        </>
    )
}

export default NotFound