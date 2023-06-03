const Shimmer = () =>{
    return (
    
    <div className=" flex flex-wrap  m-5 p-5  justify-evenly">
        {Array(15)
        .fill("")
        .map((e, index) => (
        <div key={index} className="border-2 p-6  border-gray-400 bg-gray-300 m-4 w-64 h-96"></div>
        ))}
    </div>
    );
};


export default Shimmer;

