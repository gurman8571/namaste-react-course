import React, { useState } from "react";
import { useSelector } from "react-redux";
import { img_url } from "../config";
import {clearCart} from "../utils/CartSlice"
import {useDispatch} from 'react-redux'
export default function Cart({rest,img,setreload}) {
const [total, settotal] = useState(0)
  const cartitems=useSelector((store)=>store.cart.items);
  const dispatch = useDispatch();
  const emptycart = ()=>{
   dispatch(clearCart());
    setreload(true);
  }

var sum=0;
  //onsole.log(cartitems);
//const addtotal=()=>{
//  
//  cartitems.map((item)=>{
//   
//   sum+=item.price;
//
//  })
//  settotal(sum);
//} 
//addtotal();
  return (
  <>
    {
    cartitems.length>0?
  <div className="mx-4 border
   border-gray-400  rounded-md shadow-md h-auto
   "> 
<div className="flex m-2
p-4
">
<hr/>
  <img src={`${img_url}/${img}`}  className=" px-4 w-28 h-12 rounded-lg
  "/>
  <b className="text-gray-600 text-xlß">{rest}</b>
</div>

{cartitems.map((item,i)=>{
  //let sum=0;
  sum+=(item.price?item.price:item.defaultPrice?.toString().substring(0, 3))*item.quantity;
  return(
  <div key={i} className="flex m-2
p-4 mx-2
">

  <div className="w-3/4 mx-2" >
  {item.isVeg == 1 ? (
          <span className="vegetarianicon">⊡</span>
        ) : (
          
            <span
              className="vegetarianicon"
              style={{ color: "red" }}
            >
              ⊡
            </span>
          
        )}
     <span className="px-2 text-gray-500 text-sm">{item?.name}x{item.quantity}</span>
  </div>
  
  <div className="w-1/4 flex px-4" >
<div className="w-1/2">
  </div>
<div className=" text-sm w-1/4 px-8 py-1 text-gray-500">₹
{(item.price? item?.price/100:item.defaultPrice?.toString().substring(0, 3))*item.quantity}
</div>
  </div>
  
</div>
  )
})}
<div className="border border-dashed  text-center  mt-2 mx-4 border-gray-400 p-4">
<p className="text-gray-400">Apply coupun</p>
  </div>
  <p className=" mx-5 text-gray-600 text-sm font-bold my-4
  ">Bill details</p>
 

 <div className="flex mx-4 mt-2 justify-between"> 
 <p className=" mx-4 mt-2 text-gray-600 text-sm font-bold">Item total</p>
 <p className="my-2 text-sm">₹{sum/100}</p>
 </div>

 <div className="flex mx-4 my-2 justify-between"> 
 <p className=" mx-4 mt-2 text-gray-600 text-sm font-bold">Govt Tax</p>
 <p className="my-2 text-sm">₹45</p>
 </div>
 <hr/>
 <div className="flex mx-2 my-2 justify-between"> 
 <p className=" mx-4 mt-2 text-gray-600 text-sm font-bold">To Pay</p>
 <p className="my-2  mx-1 text-md font-bold">₹{  45+sum/100   }</p>


 </div> 
 <button onClick={()=>{emptycart()}} className=" my-2 mx-12 bg-green-500 text-white rounded-md shadow-sm px-2 py-2 w-3/4">

Empty cart
</button>
  </div>:<div><div className="ml-6">
      
  <div className="text-3xl font-bold text-gray-800">Cart Empty</div>
  <img
    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"
    className="rounded-md w-56 pt-6 h-56"
  />
  <div className="pt-6 text-md text-gray-300 w-3/4 ">
    Good food is always cooking! Go ahead, order some yummy items from
    the menu.
  </div>
</div>

</div>
}
    
  
  </>
  );
}
