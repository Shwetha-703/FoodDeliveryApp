import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Header = () =>{

    const [buttonText, setButtonText] = useState(["Login"]);

    const onlineStatus = useOnlineStatus();

    return (
        <div className= "header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status : {onlineStatus ? "✅" : "🛑"} </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><button onClick={()=>{
                        const text = buttonText==="Login" ? "Logout" : "Login";
                        setButtonText(text);
                    }} className="loginButton">{buttonText}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;