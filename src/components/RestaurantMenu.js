import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";

const RestaurantMenu = () => {
    const {resId} = useParams();

    const resMenu = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(0);

    if(resMenu===null )
        return (<div>No items</div>);
    
    const {name, cuisines, costForTwoMessage} = resMenu?.cards[0]?.card?.card?.info;

    const categories = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>(
        c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ));
    

    return (
        <div className="justify-center border rounded-md p-4 m-4 text-center" id="menu">    
            <h2 className="text-2xl font-bold">{name}</h2>
            <h3 className="text-sm">{cuisines.join(", ")}</h3>
            <h4 className="text-sm">{costForTwoMessage}</h4>
            
            {categories.map((c,index)=>(
                <RestaurantCategory key={c.card.card.title} showItems={index==showIndex && true} data={c.card?.card} setShowIndex={()=>setShowIndex(index)} />
            ))}
        </div>
    )
}

export default RestaurantMenu;