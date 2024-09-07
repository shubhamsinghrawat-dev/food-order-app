
import { useState,useEffect } from "react";
import { FOODWALLAH_RESTAURANT_API_URL } from "./constants";

const useRestauarntCard = () =>
{
    const proxyUrl = 'https://foodwallah-2.onrender.com/api/restaurants';
    const [listofrestraunts, setlistofrestraunts] = useState([]);
     useEffect(() => {
        fetchData();
    }, []); 
    const fetchData = async () => {
        try {
            const response = await fetch(proxyUrl);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const json = await response.json();
             function checkJsonData(jsonData) {
             for (let i = 0; i < jsonData?.data?.cards.length; i++) {
                let checkData =json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle ?.restaurants;            
                if (checkData !== undefined) {
                    return checkData;
                }
                }
                  } 
            const restaurants = checkJsonData(json);
            setlistofrestraunts(restaurants);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    return listofrestraunts;
}

export default useRestauarntCard;