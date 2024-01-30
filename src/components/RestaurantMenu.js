import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();

    const resMenu = useRestaurantMenu(resId);

    if(resMenu===null )
        return (<div>No items</div>);
    
    const {name, cuisines, costForTwoMessage} = resMenu?.cards[0]?.card?.card?.info;
    const {itemCards} = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="justify-center border rounded-md p-4 m-4 " id="menu">    
            <h2 className="text-2xl">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{costForTwoMessage}</h4>
            <ul>
                {itemCards.map(item=>(
                    <li key={item.card.info.id} className="justify-between text-sm py-1 ">
                        <h5>{item?.card?.info?.name}</h5>
                        <h5>Rs. {item?.card?.info?.price/100}</h5>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;