import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link to="/" className="inline-block" aria-label="Cruip">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 289 289" fill="#87CEFA" xmlns="http://www.w3.org/2000/svg">
              
                  <path d="M288.466 144.233C288.466 203.547 252.662 254.498 201.488 276.654L205.133 170.967C205.133 149.881 222.226 132.788 243.312 132.787L256.029 132.787C256.029 129.703 255.712 126.687 255.109 123.773C251.221 104.989 235.419 90.3973 215.621 88.6449L205.133 87.7165L204.528 86.4216C185.574 45.8057 145.231 19.4482 100.422 18.4058C88.7631 18.1346 77.4672 19.5947 66.7684 22.5463C89.1452 8.2718 115.723 0 144.233 0C223.89 0 288.466 64.5752 288.466 144.233Z" fill="#87CEFA"/>
                  <path d="M79.9968 163.138C76.7116 165.691 72.7421 166.967 68.0882 166.967C64.6205 166.967 61.4267 166.101 58.5066 164.369C55.5864 162.546 53.2595 160.13 51.5257 157.121C49.7919 154.113 48.9249 150.785 48.9249 147.138C48.9249 143.4 49.7462 140.073 51.3888 137.155C53.1226 134.147 55.4039 131.822 58.2328 130.181C61.1529 128.54 64.3012 127.719 67.6775 127.719C72.149 127.719 76.1185 128.996 79.5861 131.548C83.0538 134.01 85.3351 137.246 86.4302 141.258V152.472C85.5176 156.939 83.3732 160.494 79.9968 163.138Z" fill="#fff"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M196.118 170.803L192.345 280.246C177.297 285.569 161.103 288.466 144.233 288.466C64.5752 288.466 0 223.89 0 144.233C0 105.136 15.5558 69.6727 40.8156 43.6942C58.0661 32.9458 78.4659 26.9121 100.213 27.4179C141.596 28.3806 178.855 52.723 196.36 90.2338L196.964 91.5287C191.481 91.5287 178.72 99.0759 180.635 98.8519L181.637 98.7345C191.348 97.5976 194.764 97.1975 204.338 96.696L214.826 97.6243C229.947 98.9627 242.141 109.703 245.85 123.773L243.311 123.773C217.302 123.773 196.207 144.814 196.118 170.803ZM99.16 132.26C99.16 125.119 93.5617 119.233 86.4302 118.874V128.54C84.2401 125.167 81.3656 122.431 77.8067 120.335C74.2478 118.238 70.0501 117.189 65.2137 117.189C59.8297 117.189 54.902 118.466 50.4306 121.018C46.0505 123.48 42.5372 127.035 39.8908 131.685C37.3357 136.244 36.0582 141.622 36.0582 147.822C36.0582 154.021 37.2901 159.355 39.754 163.822C42.3091 168.289 45.7311 171.708 50.02 174.079C54.4002 176.358 59.2822 177.497 64.6662 177.497C69.5026 177.497 73.8372 176.403 77.6698 174.215C81.5025 171.936 84.4226 169.475 86.4302 166.831V176.13C93.4607 176.13 99.16 170.431 99.16 163.4V132.26ZM119.898 121.388C120.454 121.388 120.904 121.839 120.904 122.395V165.274C120.904 172.305 115.205 178.004 108.175 178.004V121.388H119.898ZM115.369 108.175C122.837 108.175 128.891 102.121 128.891 94.6529C128.891 87.185 122.837 81.131 115.369 81.131C107.901 81.131 101.847 87.185 101.847 94.6529C101.847 102.121 107.901 108.175 115.369 108.175Z" fill="#fff"/>
                  
                  </svg>
                </Link>
              </div>
              <div className="text-gray-400">Ready to supercharge your sales team with AI-driven sales engineering? Get in touch with us to discuss your specific needs and learn how PigeonsAI can revolutionize your sales process.</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
              {/* <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Products</h6>
                <ul>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Web Studio</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">DynamicBox Flex</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Programming Forms</Link>
                  </li>
                </ul>
              </div> */}

              {/* 3rd block */}
              {/* <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Visual mockups</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Visual mockups</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li>
                </ul>
              </div> */}

              {/* 4th block */}
              {/* <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Company</h6>
                <ul>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Labore et dolore</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Labore et dolore</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                </ul>
              </div> */}

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link to="https://twitter.com/PigeonsAIcom" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-800 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </Link>
              </li>
              {/* <li className="ml-4">
                <Link to="#" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Github">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li> */}
              {/* <li className="ml-4">
                <Link to="#" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li> */}
              {/* <li className="ml-4">
                <Link to="#" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-800 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li> */}
              <li className="ml-4">
                <Link to="https://www.linkedin.com/company/pigeonsai" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-800 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; PigeonsAI. All right reserved</div>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
