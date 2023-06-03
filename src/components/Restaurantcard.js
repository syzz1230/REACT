import { IMG_CDN } from "../config";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
  }) => {

    const {user} = useContext(UserContext);

    return(
        <div className= " h-max w-64 border-2 border-gray-800 p-4 m-2 bg-blue-200 hover:hover:bg-blue-300 hover drop-shadow-2xl  text-lg transform  transition duration-200 hover:scale-125 hover:bg-blue-400  ">
             
              <img  src={IMG_CDN + cloudinaryImageId} /> 
              <h2 className="font-extrabold">{name}</h2>
              <h3 className="font-medium">{cuisines.join(", ")}</h3>
              <h4 className="font-medium">{lastMileTravelString}</h4>
              <h3>{user.name}</h3>
              <h3>{user.email}</h3>
        
        </div>
    );
  };

export default RestaurantCard;
