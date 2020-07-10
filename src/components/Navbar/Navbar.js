import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className="hidden sm:hidden md-inline lg:inline xl-inline">
      <header className="px-2 py-2 bg-white">
      <nav>
        <div className="nav-bar">
          <div>
            <button className="text-gray-700 btn-color">Browse Categories
            <svg className="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path fill="#01B2EE" d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
            </button>
          </div>
            <button className="text-gray-700 btn-color">What's New</button>
            <button className="text-gray-700 btn-color">Trending</button>
            <button className="text-gray-700 btn-color">For You</button>
          <div className=" bg-white focus:outline-none focus:shadow-outline border border-gray-400 rounded-none py-2 px-2 w-4/12 appearance-none leading-normal">
            <svg className="inline w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#808080" d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
            <input className="focus:outline-none px-2 w-11/12" placeholder="Search GrabOne"></input>
          </div>
        </div>
      </nav>
      </header>
    </div>

  )
}


export default Navbar