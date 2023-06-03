import { useState } from "react";
const Section = ({title,description,isvisible,setIsVisible}) =>{
         
        
        return(
                <div className="border-2 border-black p-2,m-2">
                        <h3 className="text-3xl">{title}</h3>
                        {isvisible ? (
                        <div>
                        <button 
                                onClick={()=>setIsVisible(false)} 
                                classname="underline-offset-1 cursor-pointer" >hide</button>
                                <p>{description}</p>
                        </div>
                        ) : (
                        <button 
                                onClick={()=>setIsVisible(true )} 
                                classname="underline-offset-1 cursor-pointer" >show</button>)
                        }
                        
                        {/* {isvisible && <p>{description}</p>} */}
                </div>
        );
};

const Instamart = () => {

     const[visiblesection,setVisibleSection] = useState(); 

     return (
        <div className="m-5 font-bold hover:uppercase space-y-4 p-2">
                <h1 className="font-extrabold text-5xl ">this is instamart...!</h1>
                <Section 
                title={"about instamart"}
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                
                isvisible={visiblesection == "about"}
                setIsVisible={ () =>setVisibleSection("about")}
                />

                <Section 
                title={"Team instamart"}
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                
                isvisible={visiblesection == "team"}
                setIsVisible={ () =>setVisibleSection("team")}
                />
                <Section 
                title={"carrers"}
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                
                isvisible={visiblesection == "careers"}
                setIsVisible={ () =>setVisibleSection("careers")}
                />
        </div>
     )
};

export default Instamart;
