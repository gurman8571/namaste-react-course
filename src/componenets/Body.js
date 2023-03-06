import React from "react";
import { useState, useEffect } from "react";
import ResturantCard from "./ResturantCard";
import Skeleton from "../skeletons/card";
import Search from "./Search";
import SideDrawer from "./SideDrawer";
import axios from "axios";
import Craousel from "./Craousel";
export default function Body() {
  const [resturant, setresturant] = useState([]);
  const [offers, setoffers] = useState([]);
  const [loading, setloading] = useState(true);

  const [cloading, setcloading] = useState(true);
  const [filtered, setfiltered] = useState([]);
  const [search, setsearch] = useState("");

console.log('hlo');

   //console.log(search);
   
  const fetchdata = async () => {

    const data = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.626123604964185&lng=77.11691737937623&page_type=DESKTOP_WEB_LISTING"
    );

    setresturant(data?.data?.data?.cards[2]?.data?.data?.cards);
    setoffers(data?.data?.data?.cards[0].data?.data?.cards);
 
    setloading(false);
    setcloading(false);
    
  };

 
   
  useEffect(() => {
    fetchdata();
  }, []);

  const onsearch = () => {
    const filter= resturant?.filter((item)=>
    item?.data?.name?.toLowerCase().includes(search.toLowerCase())
   
   );
   setfiltered(filter);
   console.log(filtered);
   //setresturant(filtered)
     };

  return (
    
    <section className="text-gray-600 body-font">
      
      <Craousel offers={offers} loading={cloading} setloading={setcloading} />
      <div className="relative text-gray-600  flex justify-center">
      <input
        onChange={(e)=>{search=e.target.value}}
        value={search}
        type="search"
        name="serch"
        placeholder="Search for restaurants and food"
        className="bg-white h-12 w-1/2 px-5 pr-10 border border-gray-400  text-sm focus:outline-none"
      />
      <button onClick={onsearch} type="submit" className="lg:absolute lg:right-96 top-1 mt-3 mr-4">
        <svg
          className="h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          style={{ enableBackground: "new 0 0 56.966 56.966" }}
          xmlSpace="preserve"
          width="512px"
          height="512px"
        >
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
    </div>
      <div className="container px-5 pb-16 pt-4 mx-auto">
        {loading ? (
          <div className="lg:flex md:flex flex-wrap">
            <div className="lg:flex md:flex flex-wrap  ">
              {Array(15)
                .fill("")
                .map((item, index) => {
                  return <Skeleton key={index} />;
                })}
            </div>
          </div>
        ) : (
          <div className="lg:flex md:flex flex-wrap lg:px-12">
            {resturant.map((item, i) => {
              return <ResturantCard item={item} key={i} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
}
