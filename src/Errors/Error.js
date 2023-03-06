import React from "react";
import Header from '../componenets/Header';
import Footer from '../componenets/Footer';
import { useRouteError } from "react-router-dom";
import'./App.css'

export default function notfoundpage() {
  const err = useRouteError();
   
  return (
 <React.Fragment>
 <Header/>
 <div className="nDVxx">
 <div className="_3vspF">
  <div className="hFjjz">
    <div className="_1lyfX _1Of0Y" />
    <div className="_3Ognu">{err.status}</div>
    <div className="_1CN4Y">
      Uh-oh! {err.statusText}
    </div>
    <a href="/" className="_35xiX">
      GO HOME
    </a>
  </div>
</div>
</div>
<Footer/>
  </React.Fragment>
  
  );
}
