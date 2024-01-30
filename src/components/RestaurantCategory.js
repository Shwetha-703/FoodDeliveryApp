import { useState } from "react";
import CategoryList from "./CategoryList";


export const RestaurantCategory = ({data, showItems, setShowIndex}) =>{
    const handleClick = () =>{
        setShowIndex();
    }
    return (
        <div className="w-6/12 mx-auto my-4 shadow-lg p-4 bg-gray-50">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="text-sm font-bold">
                    {data?.title}({data?.itemCards?.length})
                </span>
                <span>
                    ⬇️
                </span>
            </div>
            {showItems && <CategoryList items={data.itemCards}/>}
            
        </div>
    )
}