import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

export const useRestaurantMenu = (resId) =>{
    const [resMenu, setResMenu] = useState(null);
    useEffect(()=>{
        fetchMenuData();
    },[]);

    const fetchMenuData = async() =>{
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
        setResMenu(json.data);
    }
    return resMenu;
}