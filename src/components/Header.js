import { useState ,useContext } from "react";
import logo from "../assets/img/food.jpg";
import {Link} from'react-router-dom';
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Logo = () => (
    <a href='/'>
    <img className = "h-28 w-32 p-1 m-2 hover:animate-spin"
    src= {logo} 
    alt="logo" />
    </a>
  );

  // const loggedIn = () =>{
  //   return true;
  // }
  const Header = () => {
    
    const [isloggedIn,setIsLoggedIn] = useState(false);

    const {user} = useContext(UserContext);

    const cartItems = useSelector(store => store.cart.items)
    console.log(cartItems);

     return(
      
      <div className="m-4 flex justify-between border-4 border-black bg-blue-200">
        < Logo/>
        <div>
          <ul className=" p-7 flex space-x-3 justify-between font-semibold">
            <Link to = "/"><li>HOME</li></Link>
            <Link to="/about"><li>ABOUT</li></Link>
            <Link to="/contact"><li>CONTACT</li></Link>
            <Link to="/Instamart"><li>INSTAMART</li></Link>
            <Link to = "/Cart"><li>CART -- {cartItems.length} items</li></Link>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>

          </ul>
        </div >
        {isloggedIn ? (<button className="rounded-md bg-blue-400 m-2 text-white" onClick = {() => setIsLoggedIn(false)}>logout</button>
        ):(
        <button className="rounded-md bg-blue-400 m-2 text-white" onClick={() => setIsLoggedIn(true)}>login</button>)
        }
      </div>
      
    );
  };

  export default Header;