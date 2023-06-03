import { useDispatch, useSelector } from "react-redux"
import FoodItems from "./foodItems";    
import { clearcart } from "../utils/cartslice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const clearIt = () =>{
        dispatch(clearcart());
    }

    return (
        <div className="m-6 font-bold text-lg flex  flex-wrap ">
            <div className="space-y-6">
                <button className="rounded-full bg-purple-400 text-white" 
                onClick={() =>clearIt()}>Clear Cart</button>
                <h1 >cart items - {cartItems.length}</h1>
            </div>
            {cartItems.map((item) => <FoodItems Key={item.id} {...item?.card?.info}/>)}
        </div>
    )
};
export default Cart;