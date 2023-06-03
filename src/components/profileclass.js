import { Component } from "react";

class Profile extends Component {

constructor(props) {
    super(props);
    console.log("contructor");    this.state = {
        userinfo : {
            login : "dummy data",
            id : "dummy data",
            public_repos : "dummy data",
        },
    };
};

componentDidMount() {
    
    // console.log("componentDidMount");
    
};
  

componentDidUpdate(prevProps,prevState) {
    if(this.state.count!= prevState.count){

    }
    if(this.state.count2!= prevState.count2){
        
    }
    console.log("componentDidUpdate");
};

componentWillUnmount(){
    clearInterval("grassy satyam");
}; 







render(){
    // const {count} = this.state;
    // const {count1} = this.state;
        console.log("render");
        return(
            <div className="space-y-3">
            <h1>this is my class based profile</h1>
            <h2>login:{this.state.userinfo.login}</h2>
            <h2>id : {this.state.userinfo.id}</h2>
            <h2>totalcount : {this.state.userinfo.public_repos}</h2>
            {/* <h2>count : {count}:{count1}</h2>*/}

            </div>
        )
    };
};


export default Profile;