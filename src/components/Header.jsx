import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () =>{

    const [buttonText, setButtonText] = useState(["Login"]);

    const changeText = () =>{

    }
    
    return (
        <div className= "header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
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