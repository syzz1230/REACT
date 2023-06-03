import React,{lazy , Suspense, useState} from 'react';
import ReactDOM  from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Error from './components/Error';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import Contact from './components/contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/profileclass';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import Store from './utils/store';
import Cart from './components/Cart';



const Instamart = lazy(() => import('./components/Instamart'));

const About = lazy(() => import('./components/About'));

const Applayout = () => {

  const[user,setUser]=useState({
    name:"srijan bhuwal",
    email:"syzzbhuwal@gmail.com",
  });

  return(
        <Provider
        store ={Store}>
                <UserContext.Provider 
                value = {{
                  user : user,
                  setUser : setUser,
                }}
                >
                      <Header />
                      <Outlet/>
                      <Footer />
                      
                </UserContext.Provider>
        </Provider>
      
  );
};
const appRouter = createBrowserRouter([
    
    {
      path: "/",
      element: <Applayout/>,
      errorElement: <Error />,
      children: [
      {
        path: "/",
        element: <Body 
        user= {{
              name:"srijan bhuwal",
              age:"56",
            }} />,
      },
      {
        path: "/about",
        element:  (
                  <Suspense 
                   fallback = {
                    <h1>loading....!</h1>
                  }>
                      <About/>
                  </Suspense>),
        children: [{
            path : "profile",
            element: <Profile/>,
        }],
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/restaurant/:resID",
        element: <RestaurantMenu/>,
      },
      {
        path: "/Instamart",
        element: (
              <Suspense fallback={<Shimmer/>}>
                  <Instamart />
              </Suspense>),
      },
      {
        path:"/Cart",
        element : <Cart/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}  />);
