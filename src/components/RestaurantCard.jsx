import { CDN_IMAGE_URL } from "../utils/constants";

const RestaurantCard = (resData) =>{
    
    const {cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo} = resData.resData.info;
    return (
        <div className="justify-center border rounded-md p-4 m-4 w-48 h-[300px] hover:bg-gray-300">
            <img className="w-44 h-24 rounded-md" 
                alt={name}
                src={CDN_IMAGE_URL+cloudinaryImageId}/>
            <h3 className="text-md m-1 font-bold">{name}</h3>
            <h5 className="text-sm m-1">{cuisines.join(", ")}</h5>
            <h5 className="text-sm m-1">{avgRating}  * {costForTwo}</h5>
            <h5 className="text-sm m-1">{sla.deliveryTime} mins</h5>
        </div>
    )
}

export default RestaurantCard;