import React from 'react'
import './EmailBanner.css'

function EmailBanner() {
  return (
    <div className="w-full block lg:flex justify-between rounded-none shadow-lg bg-white px-6 py-8 my-4">
      <div className="block py-3 lg:py-0">
        <p className="signature-blue pt-2 font-semibold text-2xl">Get the best deals delivered direct to your inbox each day</p>
      </div>
      <div className="flex inline">
        <div className="flex w-full">
          <div className="shadow-xl bg-white focus:outline-none focus:shadow-outline border border-gray-400 rounded-none w-full">
          <svg className="w-10 h-12 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#808080"><path class="heroicon-ui" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 0 1-.9 0L4 9.62V18h16V9.62z"/></svg>
            <input className="focus:outline-none px-2 w-10/12" placeholder="Enter Email Address"></input>
          </div>
          <button className="text-white bg-signature-blue w-48 p-0 rounded-r-lg">Subscribe</button>
        </div>
      </div>
    </div>
  )
}


export default EmailBanner