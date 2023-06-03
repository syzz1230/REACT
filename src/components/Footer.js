import logo1 from "../assets/img/insta.png";
import logo2 from "../assets/img/snapchat.png";
import logo3 from "../assets/img/twitter.png";
import logo4 from "../assets/img/facebook.jpg";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Footer = () =>{

  const {user} = useContext(UserContext);

    return (
      <div className="p-2 m-4 flex border-4 border-black bg-blue-200 justify-between">
          <div className="flex  justify-items font-bold h-20 space-x-1 ">
              <h1>my social handles :-</h1>
              <img src={logo1} alt="insta" />
              <img src={logo2} alt="snapchat" />
              <img src={logo3} alt="twitter" />
              <img src={logo4} alt="facebook" />
          </div>
                <div className="font-bold">
                  <h1>support panel: reach us through our contact no. </h1>
                  <h1>help </h1>
                  <h1>Copyright@food villa...all rights reserved </h1>
                  <h2>ADDRESS-LIG-242 shivaji nagar.korab,chhattisgarh,495677</h2>
                  <h2>this is my name :{user.name} and this my e-mail:{user.email}</h2>
                </div>
      </div>
    );
  };

  export default Footer;