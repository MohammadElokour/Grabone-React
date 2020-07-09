import React from 'react'
import './MobileNavbar.css'

function MobileNavbar() {
  return (
    <div className="bg-white py-2 block sm:block md-hidden lg:hidden xl-hidden">
      <header>
      <nav>
        <div className="flex justify-evenly">
            <button>
              <svg className="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path fill="#808080" d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z"/>
              </svg>
              <div className="text-xs">Home</div>
            </button>
            <button>
            <svg className="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path fill="#808080" d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
            </svg>
              <div className="text-xs">Search</div>
            </button>
            <button>
              <svg className="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path fill="#808080" d="M0 0h9v9H0V0zm2 2v5h5V2H2zm-2 9h9v9H0v-9zm2 2v5h5v-5H2zm9-13h9v9h-9V0zm2 2v5h5V2h-5zm-2 9h9v9h-9v-9zm2 2v5h5v-5h-5z"/>
              </svg>
              <div className="text-xs">Categories</div>
            </button>
            <button> 
            <svg className="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path fill="#808080" d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
            </svg>
              <div className="text-xs">Cart</div>
            </button>
            <button>
            <svg className="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path fill="#808080" d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"/>
            </svg>
              <div className="text-xs">Account</div>
            </button>
        </div>
      </nav>
      </header>
    </div>

  )
}


export default MobileNavbar