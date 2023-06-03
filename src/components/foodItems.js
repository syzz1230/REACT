import { IMG_CDN } from "../config";

const FoodItems = ({
    name,
    description,
    imageId,
    price,
  }) => {
    return(
        <div className= " h-max w-64 border-2 border-gray-800 p-4 m-2 bg-blue-200 hover:hover:bg-blue-300 hover drop-shadow-2xl  text-lg transform  transition duration-200 hover:scale-125 hover:bg-blue-400  ">
             
              <img  src={IMG_CDN + imageId} /> 
              <h2 className="font-extrabold">{name}</h2>
              <h3 className="font-medium">{description}</h3>
              <h4 className="font-medium">Rupees : {price/100}</h4>
               
        </div>
    );
  };

  
export default FoodItems;