import { Clapperboard } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-[#121212] border-t border-gray-800 text-gray-400 pt-12 pb-6">
      <div className="w-full px-4 md:px-8 lg:px-14 grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
        
        {/* Left Section: Logo and Description */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-white">
            <Clapperboard className="size-6 text-amber-500" />
            <span className="text-2xl font-bold italic tracking-wider">
              Cine<span className="text-amber-500">Max</span>
            </span>
          </div>
          <p className="leading-relaxed max-w-sm">
            Discover and explore your favorite movies and TV shows from around the world. Your ultimate entertainment companion.
          </p>
        </div>

        {/* Middle Section: Quick Links */}
        <div className="flex flex-col gap-3 md:items-center">
          <div>
            <h4 className="text-white font-semibold text-lg mb-2">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/movies" className="hover:text-amber-500 transition-colors">Browse Movies</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section: Social Media Connect */}
        <div className="flex flex-col gap-3 md:items-end">
          <div>
            <h4 className="text-white font-semibold text-lg mb-3">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src={'./facebook.png'} alt="" className='size-8' />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Section: Copyright Info */}
      <div className="w-full pt-6 border-t border-gray-800/60 flex items-center justify-center ">
        <p>© 2026 CineMax. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
