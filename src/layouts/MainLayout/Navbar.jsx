import { Clapperboard, Film } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className='w-full h-20 sticky top-0 left-0 z-30 flex items-center justify-between px-4 md:px-8 lg:px-14 bg-black text-white'>

            {/* Logo and brand name */}
            <div className='flex items-center gap-1'>
                <Clapperboard className='size-8' />
                <p className='text-lg md:text-2xl font-bold italic'>Cine<span className='text-amber-500'>Max</span></p>
            </div>

            <div className='flex items-center gap-6 md:gap-10 text-sm xl:text-base'>
                {/* Navigation links */}
                <nav>
                    <ul>
                        <Link to={'/'}>Home</Link>
                    </ul>
                </nav>

                {/* Button to navigate to the movies listing page */}
                <button
                    onClick={() => navigate('/movies')}
                    className='flex items-center gap-1 text-sm xl:text-base cursor-pointer bg-amber-500 px-2 md:px-2.5 py-1 rounded-md'
                >
                    <Film className='size-5' />
                    Movies
                </button>
            </div>
        </div>
    )
}

export default Navbar
