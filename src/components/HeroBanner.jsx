import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {
    const navigate = useNavigate();
    return (
        <div className='relative w-full h-[60vh] md:h-[40vh] lg:h-[70vh]'>
            <img src="./banner.jpg" alt="hero-banner" className='w-full h-full object-center' />
            <div className='absolute inset-0 bg-black/70 md:bg-transparent md:bg-gradient-to-r md:from-black md:via-black/60 to-transparent flex flex-col justify-center text-white px-4 md:px-10 xl:px-20'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>DISCOVER MOVIES</h1>
                <p className='text-lg md:text-xl w-full md:w-[65%] xl:w-[50%] mt-5 md:mt-6 leading-7 md:leading-10 text-white/90'>Explore and discover your favorite movies from around the world. Track ratings, read summaries, and dive into entertainment.</p>
                <button
                    onClick={() => navigate('/movies')}
                    className='mt-8 w-34 md:w-44 h-12 md:mt-12 bg-amber-500 rounded-2xl md:rounded-3xl md:text-lg font-semibold cursor-pointer active:scale-95'
                >
                    Explore Now
                </button>
            </div>
        </div>
    )
}

export default HeroBanner