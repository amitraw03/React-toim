import { useState } from "react";
import { LOGO_URL } from "../utils/constants";  //importing Named exports 
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnSate,setBtnState]=useState("Login")

    const isOnline=useOnlineStatus();

    return (
        <div className="header flex justify-between shadow-lg h-28 ">
            <div className="logo-container size-36 relative bottom-6 ">
                <img className="logo w-36 h-[136px]" src={LOGO_URL}></img>
            </div>
            <div className="nav-items ">
                <ul className="flex">
                    <li className="px-6 mt-6">{isOnline?'🟢':'🔴'}</li>
                    <li className="text-xl font-mono  px-6 mt-6"><Link  to="/"> Home</Link></li>
                    <li className="text-xl font-mono px-6 mt-6"><Link  to="/about"> About Us</Link></li>
                    <li className="text-xl font-mono px-6 mt-6"><Link  to="/contact"> Contact Us</Link></li>
                    <li className="text-xl font-mono px-6 mt-6"><Link  to="/grocery">Grocery</Link></li>
                    <li className="text-xl font-mono px-6 mt-6">🧺Cart</li>
                    <button onClick={()=>{
                        btnSate==="Login"
                        ? setBtnState("Logout")
                        : setBtnState("Login")
                    }}  className="font-serif px-6 mt-4 mr-3 bg-green-500 py-2 rounded-md"
                    >{btnSate}</button>
                </ul>
            </div>
        </div>

    );
};

export default Header;    //exporting default exports
