import React from 'react'
import './Header.css'
import websiteLogo from '../../resources/website_logo.png'

function Header() {
  return (
    <div>
    <header className="py-2 bg-color">
    <nav>
      <div className="nav-bar px-2">
        <img className="cursor-pointer h-12" src={websiteLogo} alt="logo" />
      </div>
    </nav>
    </header>
    </div>
  )
}
               

export default Header