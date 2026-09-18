import React, { useEffect } from 'react';
import { X, Star, Calendar } from 'lucide-react';

const MovieDetails = ({ movie, onClose }) => {
  const backdropImg = movie?.image?.original || movie?.image?.medium || "./default-movie.png";
  const rating = movie?.rating?.average ? movie.rating.average.toFixed(1) : "N/A";
  const releaseYear = movie?.premiered ? movie.premiered.split('-')[0] : "N/A";
  const genres = movie?.genres && movie.genres.length > 0 ? movie.genres.join(', ') : "N/A";

 
  const cleanSummary = movie?.summary
    ? movie.summary.replace(/<\/?[^>]+(>|$)/g, "")
    : "No summary available for this show.";


  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    // Clicking the dark background overlay closes the modal
    <div onClick={onClose} className='w-full min-h-screen fixed inset-0 bg-black/60 flex flex-col items-center justify-end md:justify-center'>
      
      {/* e.stopPropagation stops the modal from closing when clicking inside the content box */}
      <div onClick={(e) => e.stopPropagation()} className='w-full md:w-[85%] lg:w-[80%] xl:w-[70%] h-[80%] md:h-[70%] md:rounded-2xl overflow-hidden bg-[#161616] overflow-y-auto pb-4'>

        {/* Movie banner image section */}
        <div className="relative w-full h-70 md:h-96 flex-shrink-0">
          <img
            src={backdropImg}
            alt={movie?.name}
            className="w-full h-full object-cover"
          />

          {/* Close button */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/50 border border-gray-700/50 text-gray-400 hover:text-amber-500 hover:bg-black transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Dark gradient shadow overlay at the bottom of the image for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </div>

        {/* Movie details info section */}
        <div className='w-full px-4 py-4 flex flex-col gap-4'>
          <div className=''>
            <p className="text-3xl md:text-4xl font-semibold text-white">
              {movie?.name}
            </p>
          </div>

          {/* Metadata section (Rating, Language, and Release Year) */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:text-lg text-gray-200">
            <div className="flex items-center gap-1 text-gray-200 ">
              <Star className="md:size-6 fill-amber-500 text-amber-500" />
              <span>Rating: {rating}/10</span>
            </div>
            <div className='size-2 rounded-full bg-gray-200 mt-1' />
            <p className="text-lg">
              Language: {movie?.language}
            </p>
            <div className='size-2 rounded-full bg-gray-200 mt-1' />
            <div className="flex items-center gap-1">
              <Calendar className="md:size-6 text-gray-400" />
              <span>Release: {releaseYear}</span>
            </div>
          </div>

          {/* Genres section */}
          <div className="flex flex-col gap-1.5 text-gray-200 text-lg">
            <span className='text-xl font-medium'>Genres</span>
            <span>{genres}</span>
          </div>

          {/* Summary paragraph section */}
          <div className="space-y-2 pt-4">
            <h4 className="text-white font-semibold text-xl tracking-wider">
              Summary
            </h4>
            <p className="text-gray-300 md:text-lg leading-relaxed font-light">
              {cleanSummary}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails;
