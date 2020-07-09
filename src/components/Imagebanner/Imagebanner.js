import React from 'react'
import './Imagebanner.css'

function Imagebanner({imgSrc, altText}) {
  return (
    // <div>
    //   <img src={imgSrc} alt={altText}></img>
    // </div>
    <div className="cursor-pointer pt-2 sm:pt-2 md:pt-6 lg:pt-10 xl-10 w-screen">
      <img className="hidden sm:block md-block lg:block xl-block" src="https://mediacdn.grabone.co.nz/asset/Jo6NUFYyfK" alt="School's Out"></img>
      <img className="block sm:hidden md-hidden lg:hidden xl-hidden" src="https://mediacdn.grabone.co.nz/asset/HC8dvjoyfi" alt="School's Out"></img>
    </div>
  )
}


export default Imagebanner