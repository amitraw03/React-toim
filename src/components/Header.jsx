import { useState } from "react";
import { LOGO_URL } from "../utils/constants";  //importing Named exports 
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnSate,setBtnState]=useState("Login")

    const isOnline=useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>{isOnline?'🟢':'🔴'}</li>
                    <li><Link className="not-anchor" to="/"> Home</Link></li>
                    <li><Link className="not-anchor" to="/about"> about Us</Link></li>
                    <li><Link className="not-anchor" to="/contact">Contact Us</Link></li>
                    <li><Link className="not-anchor" to="/grocery">Grocery</Link></li>
                    <li>🧺Cart</li>
                    <button onClick={()=>{
                        btnSate==="Login"
                        ? setBtnState("Logout")
                        : setBtnState("Login")
                    }}
                    >{btnSate}</button>
                </ul>
            </div>
        </div>

    );
};

export default Header;    //exporting default exports