import { Link } from "react-router-dom";
import React from "react";
const Header = () => {
    const [isopen, setIsopen] = React.useState(false)
    return (
        <div className="text-gray-400 bg-[#192e2f] h-[7%]">
            <div className="select-none h-[100%] text-opacity-95 font-serif flex items-center place-content-between">
                <nav className="hidden md:flex">
                    
                    <Link to="" className="pl-[20px]  hover:text-white hover:text-opacity-75">
                        BOOK
                    </Link>
                    <Link to="login" className="pl-[40px]  hover:text-white hover:text-opacity-75">
                        MANAGE ORDERS
                    </Link>
                    <Link to="login" className=" pl-[40px] hover:text-white hover:text-opacity-75 ">
                    🛒(1)
                    </Link>
                </nav>
                <div className="md:flex">
                    <Link to="registration" className="hidden md:flex  pr-[40px] cursor-pointer hover:text-white hover:text-opacity-75 ">REGISTER</Link>
                    <Link to="login" className="hidden md:flex  pr-[40px] cursor-pointer hover:text-white hover:text-opacity-75 ">LOGIN</Link>
                    <button className=" border-2 px-2 border-gray-400  border-opacity-40 m-10 md:hidden place-content-end" onClick={() => setIsopen(!isopen)}>
                    ☰
                    </button>
                </div>
            </div>
            <div className={` bg-[#192e2f]  overflow-hidden flex flex-col md:hidden  transition-all duration-300 ${
    isopen ? 'h-[250px]' : 'h-0'
  }`}>
                <Link to="/" onClick={()=> setIsopen(false)} className="p-3 bg-[#192e2f] z-10 hover:text-white hover:text-opacity-75">Home </Link>
                <Link to="/login" onClick={()=> setIsopen(false)} className="p-3  bg-[#192e2f] z-10 hover:text-white hover:text-opacity-75">Manage orders</Link>
                <Link to="/login" onClick={()=> setIsopen(false)} className="p-3 bg-[#192e2f] z-10 hover:text-white hover:text-opacity-75">🛒(1)</Link>
                <Link to="/registration" onClick={()=> setIsopen(false)} className="p-3 bg-[#192e2f] z-10 hover:text-white hover:text-opacity-75">Register</Link>
                <Link to="/login" onClick={()=> setIsopen(false)} className="p-3 bg-[#192e2f] z-10 hover:text-white hover:text-opacity-75">Login</Link>
            </div>
        </div>
        
    )

};
export default Header;