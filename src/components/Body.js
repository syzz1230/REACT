import RestaurantCard from './Restaurantcard';
import {  useEffect,useState,useContext} from "react";
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { filterData } from '../utils/helper';
import useStatus from '../utils/useStatus';
import {FETCH_RES_URL} from  "../config";
import UserContext from '../utils/UserContext';


const Body = () => {
const [allrestaurants , setAllRestaurants] = useState([]);
const [filteredrestaurants , setFilteredRestaurants] = useState([]);
const [searchtext , setSearchText] = useState("");
const { user, setUser } = useContext(UserContext);


// const {allrestaurants,filteredrestaurants} = usedetails();
useEffect(() => {
  //apI CALL
  getRestaurant();
},[]);

async function getRestaurant(){
try{ const data = await fetch(FETCH_RES_URL);
      const json = await data.json();
      // optional chaining
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards); 
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards); 
}
catch (error) {
  console.error('Error fetching restaurants:', error);
  // You can show an error message to the user or do something else as needed
}
}
const isonline = useStatus();

if (!isonline) {
  return <h1>i am offline please check your internet connection</h1>;
 }



//this is called early  return
if(!allrestaurants) return null;

// if(filteredrestaurants?.length == 0) return <h1>SORRY,restaurant not found!!!!</h1>

return allrestaurants?.length == 0 ? (
  <Shimmer />
) : (
  <>
          <div className='p-10 m-4 border-4 border-black bg-blue-100  '>
            <div className="  space-x-8"  >
                        <input 
                        type='text' 
                        className='ml-8 focus:outline-none focus:ring focus:ring-violet-300' 
                        placeholder='search' 
                        value={searchtext}
                        onChange = {(e) => {setSearchText(e.target.value)}}
                        />
                {/* <h1>{searchtext}</h1>this is two way binding */}
                <button 
                      className="rounded-lg bg-blue-400"
                      onClick = {() => {
                      // filtering the Data
                        const data = filterData(searchtext, allrestaurants);
                      // updating my state variable - restaurants
                        setFilteredRestaurants(data);
                      }}
                      >
                      search
                </button>  
                <input
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        ></input>
        <input
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        ></input>
            </div>
            <div className="flex m-5 p-5 flex-wrap justify-evenly">
                          {filteredrestaurants.map((restaurant) =>{
                          return (
                                <Link 
                                  to ={"/restaurant/"+ restaurant.data.id}
                                  key={restaurant.data.id}>
                                  <RestaurantCard {...restaurant.data} />
                                </Link>
                            );
                          })} {/*unique key is best practice and index key is better than no key*/}
            </div>
          </div>
  </>
    );
  };
  export default Body;


