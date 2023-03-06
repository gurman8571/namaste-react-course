import React, { useEffect, useState } from "react";
import axios from 'axios'
import "../../app.css";

const Item =({title,desc,display,setDisplay,id})=>{

    return(
        <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingOne">
                  <div className="flex my-4 mx-2">
                    {" "}
                   {display?
                    <button
                    className="
      accordion-button
      flex
      
      items-center
      w-full
      py-4
      px-5
      text-base text-gray-800 text-left
      bg-white
      border-0
      rounded-none
      transition
      focus:outline-none
    "
    onClick={()=>{setDisplay(false)}}
    


                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <span className="font-bold ">{title}</span>

                   
                  </button>
                    
                    :
                    <button
                    className="
      accordion-button
      flex
      
      items-center
      w-full
      py-4
      px-5
      text-base text-gray-800 text-left
      bg-white
      border-0
      rounded-none
      transition
      focus:outline-none
    "
    onClick={()=>{setDisplay(id)}}
    


                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <span className="font-bold">{title}</span>

                   
                  </button> 
                  }
                  
                  </div>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                 {

                    display && <div className="accordion-body pb-4 px-5">
                    {desc?<p className="text-sm text-gray-800 italic" style={{color:"#686b78"}}>{desc}</p>:<p>not answered yet</p>}
                      </div>
                 }
                </div>
              </div>
        
        )
} 

export default function Faq() {

const [questions, setquestions] = useState([]);
const [display, setDisplay] = useState(1);

const fetchquestions=async()=>{
    const {data}=await axios.get("https://www.swiggy.com/dapi/support/issues/faq");
    //(data.issues);
    setquestions(data.data.issues.data);
}
useEffect(()=>{
    fetchquestions();
},[])

if (!questions) {
return(<div className="mt-20 h-screen">
  loading...
  </div>)    
}
  return (
    <section className="relative pt-24 pb-28 bg-blueGray-50 overflow-hidden">
      <img
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        src="flaro-assets/images/faqs/gradient.svg"
        alt=""
      />
      <div className="relative z-10 container px-4 mx-auto">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 text-sm text-indigo-600 text-center font-semibold uppercase tracking-px">
            Have any questions?
          </p>
          <h2 className="mb-16 text-6xl md:text-8xl xl:text-5xl text-center font-bold font-heading tracking-px-n leading-none">
            Frequently Asked Questions
          </h2>
          <div className="mb-11  ">
            <div className="accordion" id="accordionExample">
              
         
         {questions.map((item)=>{

            return(<Item key={item.id} id={item.id} title={item.title} desc={item.description} display={display === item.id?true:false }  setDisplay={setDisplay} />)
         })
         }
             
            </div>
          </div>
          <p className="text-gray-600 text-center font-medium">
            <span>Still have any questions?</span>
            <a
              className="font-semibold text-indigo-600 hover:text-indigo-700"
              href="#"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
