import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () =>{ 
    const [restaurantList, setRestaurantList] = useState(resList);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //console.log(json);
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
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