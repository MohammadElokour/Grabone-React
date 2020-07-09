import React from 'react'
import './Footer.css'
import NZMELogo from '../../resources/website_logo_3.png'


function Footer() {
  return (
    <div>
     <footer className="bg-white w-full">
       <div className='footer-info grid sm:grid md:grid lg:flex xl:flex text-center lg:text-left justify-center lg:justify-between'>
        {/* section 5 copy for mobile */}
        <div className="flex flex-col py-5 sm:flex md-hidden lg:hidden xl-hidden">
          <h4 className="text-gray-800 font-semibold pb-2">Newsletter Signup</h4>
          <p className="text-gray-700 py-1">Sign up for our daily emails and we'll send you all the best <br></br> deals, tailored for you.</p> 
          <div className="flex inline w-full">
          <div className="shadow-xl inline bg-white focus:outline-none focus:shadow-outline border border-gray-400 rounded-none w-11/12 leading-normal">
            <svg className="w-10 h-12 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#808080"><path class="heroicon-ui" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 0 1-.9 0L4 9.62V18h16V9.62z"/></svg>
              <input className="focus:outline-none px-2 w-10/12" placeholder="Enter Email Address"></input>
            </div>
            <button className="text-white bg-signature-blue w-48 p-0 rounded-r-lg">Subscribe</button>
          </div>
        </div>
        {/* section 1 */}
        <nav className="pt-6">
          <h4 className="text-gray-800 font-semibold">Follow us on</h4>
          <div className="flex flex-row pb-2 justify-center">
            <svg className="w-12 h-12 py-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="#696969" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
            </svg>
            <svg className="w-12 h-12 py-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="#696969" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
            </svg>
            <svg className="w-12 h-12 py-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="#696969" d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/>
            </svg>
            <svg className="w-12 h-12 py-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="#696969" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"/>
            </svg>
          </div>
          <h4 className="text-gray-800 font-semibold">Get app exclusive deals</h4>
          <div className="flex justify-center">
            <button className="flex inline bg-signature-blue w-48 lg:w-full py-3 mt-4 px-2 rounded-lg shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="#fff" class="heroicon-ui" d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm0 2v16h12V4H6zm6 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
              </svg>
              <p className="px-2 text-sm text-white">Download our App</p>
            </button>
          </div>
          <div className="py-2 sm:py-2 md:py-2 lg:py-8 xl:py-8"></div>
        </nav>
        {/* section 2 */}
        <div className="flex flex-col pt-6">
          <h4 className="text-gray-800 font-semibold pb-2">Grabone</h4>
          <a className="text-gray-700 py-1 just-hover-blue" href="google.com" >GrabOne Guarantee</a> 
          <a className="text-gray-700 py-1 just-hover-blue" href="google.com" >Contact Us</a> 
          <a className="text-gray-700 py-1 just-hover-blue" href="google.com" >About Us</a> 
          <a className="text-gray-700 py-1 just-hover-blue" href="google.com" >Terms &amp; Returns</a> 
          <a className="text-gray-700 py-1 just-hover-blue" href="google.com" >Blog</a> 
          <a className="text-gray-700 py-1 just-hover-blue" href="google.com" >Gift Cards</a> 
        </div>

        {/* section 3 */}
        <div className="flex flex-col pt-4">
          <h4 className="text-gray-800 font-semibold pb-2">My Account</h4>
          <a className="text-gray-700 py-1 just-hover-blue" href="google.com" >My Account</a> 
          <a className="text-gray-700 py-1 just-hover-blue" href="google.com" >My Card</a> 
          <a className="text-gray-700 py-1 just-hover-blue" href="google.com" >My Coupons</a> 
          <a className="text-gray-700 py-1 just-hover-blue" href="google.com" >FAQ</a> 
          <div className="mt-2 lg:py-6 xl:py-6"></div>
        </div>

        {/* section 4 */}
        <div className="flex flex-col pt-6">
          <h4 className="text-gray-800 font-semibold pb-2">Merchants</h4>
          <a className="text-gray-700 py-1 just-hover-blue" href="google.com" >Run a Deal</a> 
          <a className="text-gray-700 py-1 just-hover-blue" href="google.com" >Merchant Centre</a> 
          <div className="py-2 sm:py-2 md:py-2 lg:py-16 xl:py-16"></div>
        </div>
        {/* section 5 */}
        <div className="hidden pt-4 sm:hidden md:hidden lg:flex-col lg:flex xl-flex">
          <h4 className="text-gray-800 font-semibold pb-2">Newsletter Signup</h4>
          <p className="text-gray-700 py-1">Sign up for our daily emails and we'll send you all the best <br></br> deals, tailored for you.</p> 
          <div className="flex inline w-full">
          <div className="shadow-xl inline bg-white focus:outline-none focus:shadow-outline border border-gray-400 rounded-none w-11/12 leading-normal">
            <svg className="w-10 h-12 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#808080"><path class="heroicon-ui" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 0 1-.9 0L4 9.62V18h16V9.62z"/></svg>
              <input className="focus:outline-none px-2 w-10/12" placeholder="Enter Email Address"></input>
            </div>
            <button className="text-white bg-signature-blue w-48 p-0 rounded-r-lg">Subscribe</button>
          </div>
          <div className="py-10"></div>
        </div>
          {/*end of sections  */}
      </div>

       <div className="footer-floor border-t border-solid border-1 border-gray-400 mt-4 p-4">
          <div className="flex justify-center">
            <a className="signature-blue px-2" href="google.com" >Privacy Policy</a>
            <p className="text-gray-800">&copy;2020 GrabOne Limited</p>
            <img className="px-3" src={NZMELogo} alt="NZME logo" />
          </div>
       </div>
     </footer>
    </div>

  )
}


export default Footer