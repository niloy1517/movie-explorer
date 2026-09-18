import React, { useEffect, useState } from 'react'
import { fetchMovies, searchMovies } from '../sevices/MovieService';
import MovieCard from '../components/MovieCard';
import MovieDetails from '../modal/MovieDetails';
import { Film, Search } from 'lucide-react';

// Main component to manage movie searching, listing, and detailed views
const MovieListing = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);


  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch movies from API whenever the search query changes
  useEffect(() => {
    const getSearchedMovies = async () => {
      try {
        const data = searchQuery.length > 1 ? await searchMovies(searchQuery) : await fetchMovies()

        const moviedData = data?.map(item => {
          return item.show ? item.show : item;
        });

        setMovies(moviedData?.slice(0, 20) || []);
      } catch (error) {
        console.error("Error fetching searched movies:", error);
      }
    }

    getSearchedMovies();

  }, [searchQuery]);

  // Open modal and store the selected movie data
  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  // Close modal and clear the selected movie data
  const handleCloseModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };

  return (
    <div className='w-full min-h-screen px-4 lg:px-14'>

      {/* Search Bar */}
      <div className="w-full md:max-w-3xl mx-auto pt-6 pb-4 md:pb-10">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
            <Search />
          </span>
          <input
            type="text"
            placeholder="Search for a movie or TV show..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-white placeholder-gray-500 pl-12 pr-4 py-4 rounded-2xl border border-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all shadow-xl text-base md:text-lg"
          />
        </div>

        {/* Dynamic query feedback status message */}
        <div className='h-12'>
          {searchQuery && (
            <p className="text-gray-400 pl-2 pt-2">
              Showing results for: <span className="text-amber-500 font-semibold">"{searchQuery}"</span>
            </p>
          )}
        </div>
      </div>

      {/* Responsive Responsive Grid layout for rendering Movie Cards */}

      {
        movies.length === 0 ? (
          <div className="w-full flex flex-col items-center justify-center text-center py-16 px-4 animate-fadeIn">

            {/* Icon */}
            <div className="relative mb-6 p-5 rounded-full bg-gray-800/40 border border-gray-700/50 shadow-xl">
              <Film className="size-16 md:size-20 text-gray-500 stroke-[1.5]" />
            </div>

            {/* Error heading message */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-wide">
              No Movies Found
            </h3>

            {/* Helpful context text for the user */}
            <p className="text-gray-400 text-base md:text-lg max-w-md mb-8 leading-relaxed">
              We couldn't find any results matching your search terms. Please check the spelling or try searching for another title.
            </p>
          </div>
        ) : (
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
            {
              movies?.map(movie => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onSeeDetails={handleOpenModal}
                />
              ))
            }
          </div>
        )
      }


      {/* Conditionally display the MovieDetails Modal when active */}
      {
        isModalOpen && (
          <MovieDetails
            movie={selectedMovie}
            onClose={handleCloseModal}
          />
        )
      }
    </div>
  )
}

export default MovieListing
