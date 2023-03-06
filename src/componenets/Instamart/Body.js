import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Body() {
  return (
    <React.Fragment>
      <Header />

      <div
        className=" flex flex-col md:flex-row bg-cover bg-no-repeat"
        style={{ backgroundColor: "#881952" }}
      >
        <div className=" md:w-3/5 mx-8 font-bold">
          <h1 className=" mx-8 text-xl font-semibold text-center my-2 text-white font-body md:text-xl lg:text-xl xl:text-5xl lg:leading-tight xl:leading-tight 2xl:leading-tight md:text-left mt-8">
            Emergency supplies 
          </h1>

          <h1 className=" mx-8 text-xl font-semibold text-center my-2 text-white font-body md:text-xl lg:text-xl xl:text-5xl lg:leading-tight xl:leading-tight 2xl:leading-tight md:text-left ">
          delivered in
          minutes, 
          
         
        </h1>
          <h1 className=" mx-8 text-xl font-semibold text-center text-white font-body md:text-xl lg:text-xl xl:text-5xl lg:leading-tight xl:leading-tight 2xl:leading-tight md:text-left ">
            from the house of Swiggy.
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-8 md:w-8 -mt-1 inline-block text-orange"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </h1>
          <p className="text-gray-400 text-2xl mx-8 my-4">Open 6 AM to late night everyday</p>
        <button className="text-white  px-8 mx-8 mt-2 text-2xl font-bold py-6 rounded-md" style={{backgroundColor:"#ff5422"}}>Try Instamart on Swiggy app</button>
          </div>
        <div className="relative w-5/6 mx-auto sm:w-3/4 md:w-5/11 lg:w-2/5 lg:mx-0">
          <div className="w-full flex flex-col items-end">
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1000/InstamartMicrosite/FooterVisual"
              className="w-full "
              alt="status bar"
            />
            <div
              className="templates-slider w-full md:w-80 xl:w-120 glide--ltr glide--carousel glide--swipeable"
              x-data
              x-init="new Glide('.templates-slider', { type: 'carousel', autoplay: 2000, gap: 0, perView: 1, peek: { before: 0, after: 0 } }).mount()"
            >
              <div className="glide__track" data-glide-el="track"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-cover bg-no-repeat bg-red-100 " style={{backgroundImage: 'url("https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_400/InstamartMicrosite/BGBottom")'}}>
      <div className="container mx-auto py-10 md:py-24 lg:py-32 text-center ">
        <h2 className="font-body font-bold  text-3xl text-gray-600 md:text-4xl lg:text-5xl lg:leading-snug">Download Swiggy &<br /> order now on Instamart!</h2>
        <p className="font-body  font-bold  text-md mt-4 md:text-sm text-gray-600">
        Trusted by millions of shoppers in Bangalore, Delhi-NCR, Hyderabad, Mumbai, Chennai, Pune & other cities.</p>
      </div>
    </div>
      <Footer />
    </React.Fragment>
  );
}
