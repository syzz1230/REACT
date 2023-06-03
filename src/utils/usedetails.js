// import { useState,useEffect } from "react";
// import { FETCH_RES_URL } from "../config";

// const usedetails = () => {

//     const [allrestaurants , setAllRestaurants] = useState([]);
//     const [filteredrestaurants , setFilteredRestaurants] = useState([]);


//     useEffect(() => {
//         //apI CALL
//         getRestaurant();
//       },[]);
      
//       async function getRestaurant(){
//       try{ const data = await fetch(FETCH_RES_URL);
//             const json = await data.json();
//             //optional chaining
//             setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards); 
//             setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards); 
//       }
//       catch (error) {
//         console.error('Error fetching restaurants:', error);
//         // You can show an error message to the user or do something else as needed
//       }

//       };

      
//     return {allrestaurants,filteredrestaurants};
// }

// export default usedetails;