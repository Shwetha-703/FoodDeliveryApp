import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { UserContext } from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () =>{

    const [buttonText, setButtonText] = useState(["Login"]);

    const onlineStatus = useOnlineStatus();

    const {userName} = useContext(UserContext);

    const cart = useSelector((store) => store.cart.items);

    return (
        <div className= "flex justify-between">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL} />
            </div>
            <div className="flex items-center ">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status : {onlineStatus ? "✅" : "🛑"} </li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/cart">Cart - {cart.length}</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><button onClick={()=>{
                        const text = buttonText==="Login" ? "Logout" : "Login";
                        setButtonText(text);
                    }} className="loginButton">{buttonText}</button></li>
                    <li>{userName.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;