import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import Body from "./componenets/Body";
import FAQ from "./componenets/Faq";
import Usercontext from "./utils/Usercontext";
import Help from "./Pages/Help";
import { Provider } from "react-redux";
import Store from "./utils/Store"
import{ Suspense,lazy } from 'react';

import Error from "./Errors/Error";

import ResturantDetail from "./componenets/ResturantDetail";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Instamart=lazy(() => import('./componenets/Instamart/Body')); 

const AppLayout = () => {

    const [user, setUser] = useState({  name: "Gurman", email: "gurma381@gmail.com"  });
    
    const [showSidebar, setshowSidebar] = useState(false)

   return (
    <Provider store={Store}>
<React.Fragment>
      <Usercontext.Provider
        value={user} 
      >
        {/*wrappimng whole wrap in context*/}
        <Header setshowSidebar={setshowSidebar} showSidebar={showSidebar} />
        <Outlet context={{ showSidebar:showSidebar }}  />
        <Footer />
      </Usercontext.Provider>
    </React.Fragment>
    </Provider>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/support", element: <Help /> },
      { path: "/Faq", element: <FAQ /> },
      { path: "/", element: <Body   /> },
      {
        path: "resturant/:id",
        element: <ResturantDetail />,
      }
      

    ],
  },

  {
    path: "/instamart",
    element:
    <Suspense>
    <Instamart />
    </Suspense>
    ,
    errorElement: <Error />,
   
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
