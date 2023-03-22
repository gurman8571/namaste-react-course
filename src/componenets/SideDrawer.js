import React, { useState } from 'react'
import {login} from "../utils/UserSlice"
import {useDispatch} from 'react-redux'

export default function SideDrawer({setshowSidebar}) {
  //onst [showSidebar, setShowSidebar] = useState(true);
const dispatch=useDispatch();
const [name, setname] = useState("");
const [email, setemail] = useState("")

const Handlesubmit=(e)=>{ e.preventDefault();
  dispatch(login({name:name,email:email}))
  setshowSidebar(false)}
  return (
    <div className="flex space-x-2" >
    
    <div >
      
      <div
     
        className="fixed top-0 right-0     fixed min-h-screen z-40   p-12 flex w-1/3 max-w-full -translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        data-te-offcanvas-init=""
      >
          <button
            type="button"
             onClick={()=>{setshowSidebar(false)}}
            className="box-content px-2 rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-offcanvas-dismiss=""
          >
            <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>
        <div className="flex items-center justify-between p-4">
          <h5
            className="mb-0  text-3xl font-extrabold leading-normal "
           
            id="offcanvasExampleLabel"
          >
           Login
          </h5>

          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" className='w-16 rounded-full'/>
        
        </div>
        <div className="flex-grow overflow-y-auto p-4">
          <form onSubmit={Handlesubmit}>
          <input type="text"  onChange={(e)=>{setname(e.target.value)}} className='w-80 px-4 py-4 border border-gray-200 my-4' placeholder='Username'/>
           
            <input type="text"  onChange={(e)=>{setemail(e.target.value)}} className='w-80 px-4 py-4 border border-gray-200' placeholder='Email'/>
 
               <button className='w-80 py-4 border font-bold border-white bg-yellow-400 my-4 text-white' 
               type="submit"
               style={{backgroundColor:'#fc8019'}} >Login</button>
               <p className='text-xs'>By clicking on Login, I accept the Terms & Conditions</p>
          </form>
          
        </div>
      </div>
    </div>
  </div>
  
  )
}
