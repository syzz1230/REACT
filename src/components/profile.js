import { useState } from "react";

const Profile = (props) =>{

    const[count,setCount] = useState(0);
    const[count1,setCount1] = useState(0);

    return(
        <div>
            <h1>this is my functional based profile</h1>
            <h2>Name:{props.Name}</h2>
            <h2>{count}</h2>
            <h2>{count1}</h2>
            <button onClick= {()=> {
                setCount(1);
                setCount1(2);
            }}
            >
                setcount</button>
        </div>
    )
}
export default Profile;