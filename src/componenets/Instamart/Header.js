import React from 'react'
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
   

    <div className=" flex items-center justify-between py-5  " style={{backgroundColor:"#881952"}}>
    <div className="w-2/3 md:w-1/4 mx-4">
      <a href="/"><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_150/InstamartMicrosite/InstamartlogoWhite" className="h-12 my-4 mx-12" alt="logo" /></a>
    </div>
    <div className="flex justify-center">
      <ul className="hidden lg:flex">
      <li>
      <Link to="/">
      
      <button className="text-white px-4 text-md mx-8 font-bold py-3 rounded-md" style={{backgroundColor:"#ff5422"}}>
      
      Go to Home</button>
      </Link>
      </li>
      <li>
     
      </li>
       
      </ul>
      <div className="block lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
    </div>
 </div>

    </div>
  )
}
