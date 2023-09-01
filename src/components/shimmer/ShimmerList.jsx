import ShimmerCards from "./ShimmerCards"

const ShimmerList = () => {
    return (
        <>
            <main className="py-4 px-6 m-4 mt-6 bg-black text-white bg-opacity-80 h-[100vh] content flex">
                <div className="">
                    <ShimmerCards />
                    <ShimmerCards />
                </div>
            </main> 
        </>
    )
}

export default ShimmerList