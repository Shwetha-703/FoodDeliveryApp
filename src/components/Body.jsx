import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () =>{ 
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState([""]);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //console.log(json);
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurantList(restaurantList);
    }
    return (
        <div className="body">
            <div className="filters">
                <div className="search">
                    <input type="text" className="text-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={()=>{
                        const filteredRestaurants = restaurantList.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurantList(filteredRestaurants);
                    }} className="search-btn">Search</button>
                </div>
                <button onClick={()=>{
                    const filteredRestaurants = restaurantList.filter((res)=>res.info.avgRating>4);
                    setFilteredRestaurantList(filteredRestaurants);
                }}>Top Rated</button>
            </div>
            <div className="restaurant-container">
                {
                    filteredRestaurantList.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}
export default Body;