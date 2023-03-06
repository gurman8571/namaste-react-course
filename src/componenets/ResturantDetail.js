import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { img_url } from "../config";
import Skeleton from "../skeletons/card";
import "../../app.css";
import Cart from "./Cart"
import Sidebar from "./Sidebar";
import {addItem} from "../utils/CartSlice"
import {useDispatch} from 'react-redux'
import {removeItem} from '../utils/CartSlice'
const Fooditem = ({item}) => {
  //const [productadded, setProductadded] = useState(false);
  const [count, setcount] = useState(0);

  const dispatch = useDispatch();
  const additem = (item,setcount)=>{
     setcount(count+1);
      dispatch(addItem(
        {...item,quantity:count ==0?1:count }));
  }

 // const incitem = (item,setcount)=>{
 //   setcount(count+1);
 //    dispatch(addItem(
 //      {...item,quantity:count}));
 //}

  const removeitem=(item,setcount)=>{

setcount(count-1);
console.log(item);
dispatch(removeItem(item));
  }
return(

  <React.Fragment>
  <div className=" m-2" key={item.id}>
    <div className="flex items-center lg:w-4/5 mx-auto border-b border-b-5 pb-10 mb-10 border-gray-400 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        {item.isVeg == 1 ? (
          <span className="vegetarianicon">⊡</span>
        ) : (
          <div>
            <span
              className="vegetarianicon"
              style={{ color: "red" }}
            >
              ⊡
            </span>
          </div>
        )}

        <h2 className="text-gray-900 text-lg title-font font-bold mb-2">
          {item.name}
          {
            item.isBestSeller?
            <span className="text-xs  font-black styles_ribbon__3tZ21 styles_itemRibbon__353Fy">
              <span class="styles_ribbonStar__1cZQq icon-star font-black"></span><i className="fa-solid fa-star"></i>
              Bestseller
            </span>:<span></span>
          }
        </h2>
        <p className="leading-relaxed text-base">
          ₹{item.price.toString().substring(0, 3)}
        </p>
        <span className="leading-relaxed text-base text-gray-600 font-medium w-3/4" style={{"font-size":"15px"}}>
         {item.description}
        </span>
      </div>
      <div className="">
        {" "}
       

        <div className="styles_itemImageContainer__3Czsd">
        <div aria-hidden={true}>
        <button className="styles_itemImage__3CsDL"  style={{background: "rgb(251, 238, 215)"}}>
        <img alt="Cheesy Fries" className="styles_itemImage__3CsDL"  width={256} 
        src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+item.cloudinaryImageId}/>

{//  src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ymyzcxwg6rdjnytw4cvr"}/>

}
        </button></div></div>
      {  count>0?
        <div className="flex items-center justify-center  _2zAXs relative mx-1  rounded-md lg:left-9 lg:bottom-9 ">
        <button className="pr-1 focus:outline-none"onClick={()=>{removeitem(item.id,setcount)}}><i className="fa fa-minus "></i></button>
        <button className="px-1 focus:outline-none">{count}</button>
        <button className="pl-1 focus:outline-none" onClick={()=>{additem(item,setcount)}}><i className="fa fa-plus"></i></button>
          </div>
          :
          <div className="flex items-center justify-center  _2zAXs relative rounded-md  lg:left-9 lg:bottom-9 ">
          <button className="font-bold focus:outline-none w-full " onClick={()=>{additem(item,setcount)}}>Add</button>
           </div>
      }
      </div>
    </div>
  </div>
</React.Fragment>
)
}

export default function ResturantDetail() {
  const { id } = useParams();
  console.log(id);

  const [resturant, setResturant] = useState(null);
  const [loading, setloading] = useState(false);
  const [reload, setreload] = useState(false);
console.log(reload);
  useEffect(() => {
    fetchdetails();
  }, [reload]);

  const fetchdetails = async () => {
    const { data } = await axios.get(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=28.6265003&lng=77.1154368&menuId=${id}`
    );

    setloading(true);
    setResturant(data);
    console.log(data.menu);
    setloading(false);
  };

  if (!resturant) {
    return (
      <div className="pt-24 px-32">
        <br />
        <div
          role="status"
          className=" bg-black space-y-8 animate-pulse md:space-y-0 md:space-x-8 px-8 md:flex md:items-center"
        >
          <div className=" bg-black flex items-center justify-center w-full h-48  rounded sm:w-96 ">
          <svg
          className="w-12 h-12 text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
          fill="currentColor"
          viewBox="0 0 640 512"
        >
          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
        </svg>
          </div>
          <div className="w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5" />
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
          </div>

          <span className="sr-only">Loading...</span>
        </div>
        <div className=" flex p-20 justify-center">
          {" "}
          <div
            role="status"
            className="w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
          >
            {Array(15)
              .fill("")
              .map((item, index) => {
                return (
                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
                      <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
                  </div>
                );
              })}
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="pt-20 ">
      <div className="bg-black    h-64 flex px-20">
        <img
          className="object-contain w-80 m-10 h-48  pl-16"
          src={`${img_url}/${resturant?.data?.cloudinaryImageId}`}
        />

        <div className="m-14">
          <h2 className="text-white text-3xl font-bold">
            {resturant.data.name}
          </h2>
          <p className="text-sm text-gray-300 pt-4">
            {resturant.data.cuisines.slice(0, 4).join()}
          </p>
          <p className="text-sm text-gray-300 ">
            {resturant.data.city}, {resturant.data.area}{" "}
          </p>
          <br />
          <div className="flex text-white space-x-16">
            <div>
              <p>
                <i className="fa fa-star "></i> {resturant.data.avgRatingString}
                
              </p>
             
              <p className="text-gray-300 text-xs">
                {" "}
                {resturant.data.totalRatingsString} 
              </p>
            </div>
            <div>
              <p> 24 mins  |</p>
              <p className="text-gray-300 text-xs"> Delivery time</p>
            </div>
            <div>
              <p> 400</p>
              <p className="text-gray-300 text-xs"> Cost for two</p>
            </div>
          </div>
        </div>

        <div className="m-10">
          <span className="h-3/4 text-white mt-1 relative top-3 bg-black  capitalize  right-4 text-2xl font-extrabold">
            offers
          </span>
          <div
            style={{ border: "1px solid rgba(255, 255, 255, 0.3)" }}
            className="   text-white py-4 px-8"
          >
            <div className="py-4 flex text-white font-bold">
              {" "}
              <svg
                className="_1GTCc m-1"
                viewBox="0 0 32 32"
                height={20}
                width={20}
                fill="currentColor"
              >
                <path d="M14.2 2.864l-1.899 1.38c-0.612 0.447-1.35 0.687-2.11 0.687h-2.352c-0.386 0-0.727 0.248-0.845 0.613l-0.728 2.238c-0.235 0.721-0.691 1.348-1.302 1.79l-1.905 1.385c-0.311 0.226-0.442 0.626-0.323 0.991l0.728 2.241c0.232 0.719 0.232 1.492-0.001 2.211l-0.727 2.237c-0.119 0.366 0.011 0.767 0.323 0.994l1.906 1.384c0.61 0.445 1.064 1.070 1.3 1.79l0.728 2.24c0.118 0.365 0.459 0.613 0.844 0.613h2.352c0.759 0 1.497 0.24 2.107 0.685l1.9 1.381c0.313 0.227 0.736 0.227 1.048 0.001l1.9-1.38c0.613-0.447 1.349-0.687 2.11-0.687h2.352c0.384 0 0.726-0.248 0.845-0.615l0.727-2.235c0.233-0.719 0.688-1.346 1.302-1.794l1.904-1.383c0.311-0.226 0.442-0.627 0.323-0.993l-0.728-2.239c-0.232-0.718-0.232-1.49 0.001-2.213l0.727-2.238c0.119-0.364-0.012-0.765-0.324-0.992l-1.901-1.383c-0.614-0.445-1.070-1.074-1.302-1.793l-0.727-2.236c-0.119-0.366-0.461-0.614-0.845-0.614h-2.352c-0.76 0-1.497-0.239-2.107-0.685l-1.903-1.382c-0.313-0.227-0.736-0.226-1.047-0.001zM16.829 0.683l1.907 1.385c0.151 0.11 0.331 0.168 0.521 0.168h2.352c1.551 0 2.927 1 3.408 2.475l0.728 2.241c0.057 0.177 0.169 0.332 0.321 0.442l1.902 1.383c1.258 0.912 1.784 2.531 1.304 4.006l-0.726 2.234c-0.058 0.182-0.058 0.375-0.001 0.552l0.727 2.237c0.48 1.477-0.046 3.096-1.303 4.007l-1.9 1.38c-0.153 0.112-0.266 0.268-0.324 0.447l-0.727 2.237c-0.48 1.477-1.856 2.477-3.408 2.477h-2.352c-0.19 0-0.37 0.058-0.523 0.17l-1.904 1.383c-1.256 0.911-2.956 0.911-4.213-0.001l-1.903-1.384c-0.15-0.11-0.332-0.168-0.521-0.168h-2.352c-1.554 0-2.931-1.001-3.408-2.477l-0.726-2.234c-0.059-0.18-0.173-0.338-0.324-0.448l-1.902-1.381c-1.258-0.912-1.784-2.53-1.304-4.008l0.727-2.235c0.058-0.179 0.058-0.373 0.001-0.551l-0.727-2.236c-0.481-1.476 0.046-3.095 1.302-4.006l1.905-1.385c0.151-0.11 0.264-0.265 0.323-0.444l0.727-2.235c0.478-1.476 1.855-2.477 3.408-2.477h2.352c0.189 0 0.371-0.059 0.523-0.17l1.902-1.383c1.256-0.911 2.956-0.911 4.212 0zM18.967 23.002c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM18.967 20.307c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM10.545 14.549c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM10.545 11.855c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM17.78 7.882l2.331 1.352-7.591 13.090-2.331-1.352 7.591-13.090z" />
              </svg>{" "}
              20% off up to ₹50 | Use code TRYNEW
            </div>
            <div className="flex">
              <svg
                className="_1GTCc m-1"
                viewBox="0 0 32 32"
                height={20}
                width={20}
                fill="currentColor"
              >
                <path d="M14.2 2.864l-1.899 1.38c-0.612 0.447-1.35 0.687-2.11 0.687h-2.352c-0.386 0-0.727 0.248-0.845 0.613l-0.728 2.238c-0.235 0.721-0.691 1.348-1.302 1.79l-1.905 1.385c-0.311 0.226-0.442 0.626-0.323 0.991l0.728 2.241c0.232 0.719 0.232 1.492-0.001 2.211l-0.727 2.237c-0.119 0.366 0.011 0.767 0.323 0.994l1.906 1.384c0.61 0.445 1.064 1.070 1.3 1.79l0.728 2.24c0.118 0.365 0.459 0.613 0.844 0.613h2.352c0.759 0 1.497 0.24 2.107 0.685l1.9 1.381c0.313 0.227 0.736 0.227 1.048 0.001l1.9-1.38c0.613-0.447 1.349-0.687 2.11-0.687h2.352c0.384 0 0.726-0.248 0.845-0.615l0.727-2.235c0.233-0.719 0.688-1.346 1.302-1.794l1.904-1.383c0.311-0.226 0.442-0.627 0.323-0.993l-0.728-2.239c-0.232-0.718-0.232-1.49 0.001-2.213l0.727-2.238c0.119-0.364-0.012-0.765-0.324-0.992l-1.901-1.383c-0.614-0.445-1.070-1.074-1.302-1.793l-0.727-2.236c-0.119-0.366-0.461-0.614-0.845-0.614h-2.352c-0.76 0-1.497-0.239-2.107-0.685l-1.903-1.382c-0.313-0.227-0.736-0.226-1.047-0.001zM16.829 0.683l1.907 1.385c0.151 0.11 0.331 0.168 0.521 0.168h2.352c1.551 0 2.927 1 3.408 2.475l0.728 2.241c0.057 0.177 0.169 0.332 0.321 0.442l1.902 1.383c1.258 0.912 1.784 2.531 1.304 4.006l-0.726 2.234c-0.058 0.182-0.058 0.375-0.001 0.552l0.727 2.237c0.48 1.477-0.046 3.096-1.303 4.007l-1.9 1.38c-0.153 0.112-0.266 0.268-0.324 0.447l-0.727 2.237c-0.48 1.477-1.856 2.477-3.408 2.477h-2.352c-0.19 0-0.37 0.058-0.523 0.17l-1.904 1.383c-1.256 0.911-2.956 0.911-4.213-0.001l-1.903-1.384c-0.15-0.11-0.332-0.168-0.521-0.168h-2.352c-1.554 0-2.931-1.001-3.408-2.477l-0.726-2.234c-0.059-0.18-0.173-0.338-0.324-0.448l-1.902-1.381c-1.258-0.912-1.784-2.53-1.304-4.008l0.727-2.235c0.058-0.179 0.058-0.373 0.001-0.551l-0.727-2.236c-0.481-1.476 0.046-3.095 1.302-4.006l1.905-1.385c0.151-0.11 0.264-0.265 0.323-0.444l0.727-2.235c0.478-1.476 1.855-2.477 3.408-2.477h2.352c0.189 0 0.371-0.059 0.523-0.17l1.902-1.383c1.256-0.911 2.956-0.911 4.212 0zM18.967 23.002c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM18.967 20.307c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM10.545 14.549c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM10.545 11.855c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM17.78 7.882l2.331 1.352-7.591 13.090-2.331-1.352 7.591-13.090z" />
              </svg>
              20% off up to ₹50 | Use code TRYNEW
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <section className="flex justify-center mt-8">
        <div className="w-1/6"><Sidebar/></div>
        <div className="mt-4  w-3/6">
          {Object.values(resturant.data.menu.items).map((item, index) => {
            return (
             <Fooditem item={item} key={item.id}/>
            );
          })}
        </div>
        <div className="w-2/6 sticky mt-8">
        <Cart setreload={setreload} rest={resturant?.data?.name} img={resturant?.data?.cloudinaryImageId} />
        </div>
      </section>
    </div>
  );
}
