import { Clapperboard, Film } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className='w-full h-24 sticky top-0 left-0 z-30 flex items-center justify-between px-4 md:px-8 lg:px-14 bg-black text-white'>

            {/* Logo and brand name */}
            <div className='flex items-center gap-1'>
                <Clapperboard className='size-6 md:size-10' />
                <p className='text-lg md:text-3xl font-bold italic'>Cine<span className='text-amber-500'>Max</span></p>
            </div>

            <div className='flex items-center gap-10'>
                {/* Navigation links */}
                <nav>
                    <ul>
                        <Link to={'/'}>Home</Link>
                    </ul>
                </nav>

                {/* Button to navigate to the movies listing page */}
                <button
                    onClick={() => navigate('/movies')}
                    className='flex items-center gap-1 text-base md:text-lg cursor-pointer bg-amber-500 px-2 py-1.5 rounded-md'
                >
                    <Film className='size-5' />
                    Movies
                </button>
            </div>
        </div>
    )
}

export default Navbar
