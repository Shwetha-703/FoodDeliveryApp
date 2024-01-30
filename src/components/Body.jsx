import RestaurantCard, {withOpenAdded} from "./RestaurantCard";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const Body = () =>{ 
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState([""]);
    useEffect(()=>{
        fetchData();
    },[]);

    const RestaurantCardWithOpen = withOpenAdded(RestaurantCard);

    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return filteredRestaurantList.length===0 ? 
        (<div>Loading...</div>) :
        (
        <div className="justify-center border rounded-md p-4 m-4">
            <div className="flex filters p-4">
                <div className="mx-4">
                    <input type="text" className="text-box px-3 mx-2 border border-solid border-black rounded-md" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={()=>{
                        const filteredRestaurants = restaurantList.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurantList(filteredRestaurants);
                    }} className="search-btn px-2 py-1 bg-orange-600 rounded-md">Search</button>
                </div>
                <div>
                    <button onClick={()=>{
                        const filteredRestaurants = restaurantList.filter((res)=>res.info.avgRating>4);
                        setFilteredRestaurantList(filteredRestaurants);
                    }} className="search-btn px-2 py-1 bg-orange-600 rounded-md">Top Rated</button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurantList.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} >
                            {typeof restaurant.info.aggregatedDiscountInfoV3 !== 'undefined' ? <RestaurantCardWithOpen resData={restaurant}/> : <RestaurantCard  resData={restaurant} />}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Body;