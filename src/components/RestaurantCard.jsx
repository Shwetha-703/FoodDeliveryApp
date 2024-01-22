import { CDN_IMAGE_URL } from "../utils/constants";

const RestaurantCard = (resData) =>{
    
    const {cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo} = resData.resData.info;
    return (
        <div className="res-card">
            <img className="res-img" 
                alt={name}
                src={CDN_IMAGE_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating}  * {costForTwo}</h5>
            <h5>{sla.deliveryTime} mins</h5>
        </div>
    )
}

export default RestaurantCard;