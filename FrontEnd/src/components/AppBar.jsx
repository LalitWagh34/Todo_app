export function AppBar({title , firstName ,onClick ,label }){
    return <div className="flex justify-between p-6 items-center cursor-pointer">
    <div className=" font-bold text-red-500 ml-[100px]">
        <span className="text-6xl">t</span>
        <span className="text-[#C38EB4] text-6xl">O</span>
        <span className="text-violet-900 text-6xl">D</span>
        <span className="text-blue-700 text-6xl">O</span>
        
    </div>
    <div className="flex items-center ">
    <div className="mr-8  ">
        <img src="./images/Add.png" onClick={onClick} 
            className="w-8 h-8 bg-[#2596be] rounded-full"
        ></img>
    </div>
    <div className="bg-amber-500 mr-12 h-12 w-24  flex items-center justify-center rounded-md">
        <button onClick1={onClick}>{label}</button>
    </div>  
    </div>
      
    </div>
}