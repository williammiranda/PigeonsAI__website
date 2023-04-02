import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';

function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 homepage--mod">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
             
              <svg width="80" height="90" viewBox="0 0 289 289" fill="#000" xmlns="http://www.w3.org/2000/svg">
              
              <path d="M288.466 144.233C288.466 203.547 252.662 254.498 201.488 276.654L205.133 170.967C205.133 149.881 222.226 132.788 243.312 132.787L256.029 132.787C256.029 129.703 255.712 126.687 255.109 123.773C251.221 104.989 235.419 90.3973 215.621 88.6449L205.133 87.7165L204.528 86.4216C185.574 45.8057 145.231 19.4482 100.422 18.4058C88.7631 18.1346 77.4672 19.5947 66.7684 22.5463C89.1452 8.2718 115.723 0 144.233 0C223.89 0 288.466 64.5752 288.466 144.233Z" fill="#87CEFA"/>
              <path d="M79.9968 163.138C76.7116 165.691 72.7421 166.967 68.0882 166.967C64.6205 166.967 61.4267 166.101 58.5066 164.369C55.5864 162.546 53.2595 160.13 51.5257 157.121C49.7919 154.113 48.9249 150.785 48.9249 147.138C48.9249 143.4 49.7462 140.073 51.3888 137.155C53.1226 134.147 55.4039 131.822 58.2328 130.181C61.1529 128.54 64.3012 127.719 67.6775 127.719C72.149 127.719 76.1185 128.996 79.5861 131.548C83.0538 134.01 85.3351 137.246 86.4302 141.258V152.472C85.5176 156.939 83.3732 160.494 79.9968 163.138Z" fill="#fff"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M196.118 170.803L192.345 280.246C177.297 285.569 161.103 288.466 144.233 288.466C64.5752 288.466 0 223.89 0 144.233C0 105.136 15.5558 69.6727 40.8156 43.6942C58.0661 32.9458 78.4659 26.9121 100.213 27.4179C141.596 28.3806 178.855 52.723 196.36 90.2338L196.964 91.5287C191.481 91.5287 178.72 99.0759 180.635 98.8519L181.637 98.7345C191.348 97.5976 194.764 97.1975 204.338 96.696L214.826 97.6243C229.947 98.9627 242.141 109.703 245.85 123.773L243.311 123.773C217.302 123.773 196.207 144.814 196.118 170.803ZM99.16 132.26C99.16 125.119 93.5617 119.233 86.4302 118.874V128.54C84.2401 125.167 81.3656 122.431 77.8067 120.335C74.2478 118.238 70.0501 117.189 65.2137 117.189C59.8297 117.189 54.902 118.466 50.4306 121.018C46.0505 123.48 42.5372 127.035 39.8908 131.685C37.3357 136.244 36.0582 141.622 36.0582 147.822C36.0582 154.021 37.2901 159.355 39.754 163.822C42.3091 168.289 45.7311 171.708 50.02 174.079C54.4002 176.358 59.2822 177.497 64.6662 177.497C69.5026 177.497 73.8372 176.403 77.6698 174.215C81.5025 171.936 84.4226 169.475 86.4302 166.831V176.13C93.4607 176.13 99.16 170.431 99.16 163.4V132.26ZM119.898 121.388C120.454 121.388 120.904 121.839 120.904 122.395V165.274C120.904 172.305 115.205 178.004 108.175 178.004V121.388H119.898ZM115.369 108.175C122.837 108.175 128.891 102.121 128.891 94.6529C128.891 87.185 122.837 81.131 115.369 81.131C107.901 81.131 101.847 87.185 101.847 94.6529C101.847 102.121 107.901 108.175 115.369 108.175Z" fill="#fff"/>
              
              </svg>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              {/* <li>
                <Link to="/signin" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
              </li> */}
              <li>
                <Link to="/signup" className="btn-sm text-black bg-blue-mod hover:bg-purple-700 ml-3">Contact Us</Link>
              </li>
            </ul>

          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">

            {/* Hamburger button */}
            <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 } }>
              <ul className="bg-gray-800 px-4 py-2">
                {/* <li>
                  <Link to="/signin" className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">Sign in</Link>
                </li> */}
                <li>
                  <Link to="/signup" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-black bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">Request Demo</Link>
                </li>
              </ul>
            </nav>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
