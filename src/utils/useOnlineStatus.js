import { useEffect, useState } from "react";

export const useOnlineStatus = () => {
    const [useOnlineStatus, setUseOnlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setUseOnlineStatus(false);
        });
        window.addEventListener("online", ()=>{
            setUseOnlineStatus(true);
        })
    },[]);

    return useOnlineStatus;
}