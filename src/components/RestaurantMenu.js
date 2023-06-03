import { useParams } from "react-router-dom";
import { IMG_CDN } from "../config";
import Shimmer from "./Shimmer";
import useRestro from "../utils/useRestro";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartslice";


const RestaurantMenu = () =>{

    const {resID} = useParams();

    const { restaurant , menuID} = useRestro(resID);

    const dispatch = useDispatch();
    const handleItems =(item) => {
        dispatch (addItem(item));
    };
    
        return (!restaurant) ? (<Shimmer/> 
        ):(
                <div className="flex  justify-evenly">
                        <div className="space-y-9 ">
                                <div className="text-purple-700">
                                    <h1>Restaurant id:{resID} </h1>
                                    <img 
                                    src={IMG_CDN + restaurant.cloudinaryImageId}
                                    alt={restaurant?.name}
                                    />
                                </div>
                                <div className="text-purple-700 font-extrabold">
                                    <h1 className="text-5xl ">{restaurant.name} </h1>
                                    <h2>{restaurant.areaName}</h2>
                                    <h2>{restaurant.city}</h2>
                                    <h2>{restaurant.avgRating} stars</h2>
                                    <h2>{restaurant.costForTwo}</h2>
                                
                                </div>
                        </div>

                        <div className="font-bold text-purple-700 space-y-5 ">
                                <h2 className="  font-extrabold text-3xl ">Menu</h2>
                                <ul className="space-y-3">{
                                    (Object.values(menuID).map(
                                    (item=>
                                    <li key={item.card.info.id}>{item.card.info.name}--<button 
                                    className="bg-purple-400 text-white font-semibold rounded  " 
                                    onClick={()=>handleItems(item)}>Add</button></li>)
                                    ))}
                                </ul>
                        </div>
            </div>
        );
};
export default RestaurantMenu;


    {/* Assignment 07 - Finding the Path - https://github.com/sam-0905/Namaste-React--1/tree/main/session-7    yei launde ke wjh se hua hai er vrna khant nhi  hota */}
