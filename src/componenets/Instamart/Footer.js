import React from 'react'

export default function Footer() {
  return (
    <footer className="relative  text-white pt-8 pb-6" style={{backgroundColor: "#881952"}}>



  

    <div className="flex justify-between lg:mx-12 md:mx-8 ">
      <div className="">
        {" "}
       
          <img
            className=" mx-4 w-24 lg:w-48 md:w-48"
           
            alt=""
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
          />
       
      </div>
      <div className="  lg:text-xl md:text-xl font-bold">© 2023 Swiggy</div>

      <div className="   flex  flex-row ">
        <a
          className="px-2"
          href="https://www.facebook.com/swiggy.in"
          rel="nofollow noopener"
          alt="facebook"
          target="_blank"
        >
          <img
            className
            width={24}
            height={24}
            alt=""
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc"
          />
        </a>
        <a
        className="px-2"
          href="https://pinterest.com/swiggyindia"
          rel="nofollow noopener"
          alt="pintrest"
          target="_blank"
        >
          <img
            className
            width={24}
            height={24}
            alt=""
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd"
          />
        </a>
        <a
        className="px-2"
          href="https://instagram.com/swiggyindia/"
          rel="nofollow noopener"
          alt="instagram"
          target="_blank"
        >
          <img
            className
            width={24}
            height={24}
            alt=""
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"
          />
        </a>
        <a
          className="_1Az3W"
          href="https://twitter.com/swiggy"
          rel="nofollow noopener"
          alt="twitter"
          target="_blank"
        >
          <img
            className
            width={24}
            height={24}
            alt=""
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"
          />
        </a>
      </div>
    </div>
  </footer>
  )
}
