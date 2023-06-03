import { useRouteError } from "react-router-dom";
const Error = () => {
    
    const err= useRouteError();
    const{statusText,status} = err;
    console.log(err);

    return(
        <>
        <div className=" font-extrabold m-5">
            <img alt="img" src = "https://www.shutterstock.com/image-vector/warning-caution-sign-danger-symbol-260nw-1298117836.jpg" />   
            <h1>OOPS.....!</h1>
            <h2>something went wrong...mera baccha</h2>
            <h2>{statusText} : {status}</h2>
        </div>
        </>
    );
};

export default Error;