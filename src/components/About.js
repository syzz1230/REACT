import { Outlet } from "react-router-dom";
import Classbased from "./profileclass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("parent constructor")
    
    };

    componentDidMount(){
        //API call
        console.log("parent componentDidMount");
    }


    render() {
            console.log("parent render");
            return (
                <div className="m-6 font-bold space-y-3 hover:uppercase "> 
            <h1>this is a online food delivery app funded by srijan bhuwal</h1>

            <UserContext.Consumer>
                {({user})=>(
                    <h4>this is something different {user.name} - {user.email}</h4>
                )}
            </UserContext.Consumer>
            <h2>its Headqurater is located in korba chhattisagrh</h2>
            <Outlet/>
            <Classbased />

            </div>
        )
    }
}

export default About;
