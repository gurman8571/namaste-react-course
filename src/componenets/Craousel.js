import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import '../assets/css/swiper.css'
// Import Swiper styles
import 'swiper/swiper.min.css'; 
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css'; 

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export default function Craousel({offers,loading}) {
   
 
   
  if(loading){
   return(
      <React.Fragment>
      <section className=" mt-20 p-10 pt-20 bg-gray-900 mb-4 h-72  ">
    <div className='flex justify-center  mb-4'>
    <img className='h-12  relative ice-cream  px-2 top-5' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/icecream_wwomsa"/>
   
    <div className="lds-ring flex justify-center"><div></div><div></div><div></div><div></div></div>
   
    </div>
    <div className='flex justify-center pt-2'>
    <p className=' text-sm  md:text-2xl capitalize' style={{color:"#FFFFFFCC",fontSize:"28px"}}>Looking for great food near you ...</p> 
   
    </div>
   </section>
      </React.Fragment>)
  }
else{
    return (
   <section className="lg:pl-64 mt-20 p-10 bg-gray-900 mb-4  flex justify-center">
   <Swiper  
   spaceBetween={10}
navigation 
   slidesPerView={4}


   >
  
   {
      offers.map((item) => {
return(

   <SwiperSlide key={item.data.bannerId}>
   <a href="#">
   <img width={260} height={260} 
   src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/${item.data.creativeId}`} /></a>
   </SwiperSlide>
   
)
})
   }
   
   {
      offers.map((item) => {
return(

   <SwiperSlide key={item.data.bannerId}>
   <a href="#">
   <img width={260} height={260} 
   src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/${item.data.creativeId}`} /></a>
   </SwiperSlide>
   
)
})
   }
   


 
 </Swiper>

  </section>
  )
}
}
