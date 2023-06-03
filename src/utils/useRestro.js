import { useState,useEffect } from "react";
import {FETCH_MENU_URL} from  "../config";

const useRestro = (resID) => {


    const[restaurant,setRestaurant] = useState(null);
    const[menuID,setMenuID] = useState([]);
    console.log(menuID)
   


    useEffect(() =>{
        getRestaurantInfo();
    },[]);
    
    async function  getRestaurantInfo(){
        const data = await fetch(FETCH_MENU_URL + resID);
        const json =await data.json();
        console.log(json);
        setRestaurant(json?.data?.cards[0]?.card?.card?.info); 
        setMenuID( json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
            ?.card?.itemCards)
    };
    return {restaurant,menuID};
}

export default useRestro;