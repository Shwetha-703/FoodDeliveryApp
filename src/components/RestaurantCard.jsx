import { CDN_IMAGE_URL } from "../utils/constants";

const RestaurantCard = (resData) =>{
    
    const {cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo} = resData.resData.info;
    return (
        <div className="justify-center border rounded-md p-2 m-2  w-48 h-[300px]">
            <img className="h-24 rounded-md w-44" 
                alt={name}
                src={CDN_IMAGE_URL+cloudinaryImageId}/>
            <h3 className="text-md m-1 font-bold">{name}</h3>
            <h5 className="text-sm m-1">{cuisines.join(", ")}</h5>
            <h5 className="text-sm m-1">{avgRating}  * {costForTwo}</h5>
            <h5 className="text-sm m-1">{sla.deliveryTime} mins</h5>
        </div>
    )
}

export const withOpenAdded = (RestaurantCard) =>{
    return (resData)=>{
        const {header, subHeader} = resData.resData.info.aggregatedDiscountInfoV3;
        return (
            <div>
                <label className="absolute bg-black text-slate-100/100">{header} {subHeader}</label>
                <RestaurantCard {...resData} />
            </div>
        )
    }
}

export default RestaurantCard;