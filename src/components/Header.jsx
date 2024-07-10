import { LOGO_URL } from "../utils/constants";  //importing Named exports 

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>about Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>

    );
};

export default Header;    //exporting default exports