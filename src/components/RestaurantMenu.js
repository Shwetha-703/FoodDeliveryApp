import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resMenu, setResMenu] = useState(null);

    useEffect(()=>{
        fetchMenuData();
    },[]);

    const {resId} = useParams();

    const fetchMenuData = async()=>{
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
        setResMenu(json.data);
    }

    if(resMenu==null || resMenu.length===0)
        return (<div>No items</div>);
    
    const {name, cuisines, costForTwoMessage} = resMenu?.cards[0]?.card?.card?.info;

    const {itemCards} = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="menu" id="menu">    
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{costForTwoMessage}</h4>
            <ul>
                {itemCards.map(item=>(
                    <li key={item.card.info.id} className="menuItem">
                        <h5>{item?.card?.info?.name}</h5>
                        <h5>Rs. {item?.card?.info?.price/100}</h5>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;