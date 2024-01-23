import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () =>{
    const [restaurantList, setRestaurantList] = useState(resList);
    return (
        <div className="body">
            <div className="search-container">
                Search
            </div>
            <div className="filters">
                <button onClick={()=>{
                    const filteredRestaurants = restaurantList.filter((res)=>res.info.avgRating>4);
                    setRestaurantList(filteredRestaurants);
                }}>Top Rated</button>
            </div>
            <div className="restaurant-container">
                {
                    restaurantList.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}
export default Body;