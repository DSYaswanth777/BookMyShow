import React from 'react'

const MovieInfo = () => {
    return (
        <>
            <div className="flex flex-col gap-3 lg:gap-8">
                <div className="flex items-center">
                    <div className="w-40 h-8 gap-3 md:px-4">
                        <img
                        src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                        alt="Premier"
                        className="w-full h-full"
                        />
                    </div>
                    <span className=" bg-bms-700 p-1 text-xs text-white rounded-md">Streaming now</span>
                </div>
                <h1 className="text-white lg:text-5xl font-bold hidden lg:block">Justice League</h1>
                <div className="flex flex-col-reverse lg:gap-5 lg:flex-col ">
                <div className="text-white font-light flex flex-col gap-2 md:px-4 ">
                    <h4>4k &bull; English &bull; Action</h4>
                    <h4>4h 45m &bull; Action,Sci-fi, Thriller &bull; 13+ </h4>
                </div>
                <div className="flex items-center gap-3 md:w-screen lg:w-full md:px-4">
                    <button className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg"> Rent ₹149 </button>
                    <button className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg"> Buy ₹599 </button>
                </div>
                </div>
            </div>
        </>
    )
}
export default MovieInfo;