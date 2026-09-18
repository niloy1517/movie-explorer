import { Calendar, Star } from 'lucide-react'


const MovieCard = ({ movie, onSeeDetails }) => {
    const rating = movie?.rating?.average ? movie.rating.average.toFixed(1) : "N/A";
    const releaseYear = movie?.premiered ? movie.premiered.split('-')[0] : "N/A";
    const posterImg = movie?.image?.medium || "./default-movie.png";

    return (
        <div className='w-full h-[450px] md:h-[400px] border-2 border-transparent hover:border-white/50 rounded-md overflow-hidden shadow-2xl'>
            
            {/* Movie poster image */}
            <img src={posterImg} alt="poster" className='w-full h-[70%] md:h-[66%] object-center' />
            
            {/* Movie info and action area */}
            <div className='flex flex-col gap-2 px-3 py-2 text-white'>
                {/* Movie title */}
                <p className='text-lg font-medium line-clamp-1'>{movie?.name}</p>
                
                <div className='flex items-center justify-between'>
                    {/* Star Rating display */}
                    <div className='flex items-center gap-2'>
                        <Star className='size-5 fill-amber-500 text-amber-500' />
                        <span className='font-semibold text-gray-200'>{rating}</span>
                    </div>
                    {/* Release Year display */}
                    <div className='flex items-center gap-2 text-gray-200'>
                        <Calendar className='size-5 text-gray-300' />
                        <span className='font-semibold'>{releaseYear}</span>
                    </div>
                </div>

                {/* Button to open details modal */}
                <button
                    onClick={() => onSeeDetails(movie)}
                    className='mt-2 w-full h-10 rounded-md bg-amber-500 hover:bg-amber-600 text-white cursor-pointer transition-colors font-medium active:scale-95 duration-200 ease-in'
                >
                    See Details
                </button>
            </div>
        </div>
    )
}

export default MovieCard
