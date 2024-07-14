import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

//Here we doing the abstract work of custom hooks
const useRestaurantMenu= (resId) =>{
   const[resInfo,setResInfo]=useState(null);

    //fetch Data
    useEffect(()=>{
        fetchMenu();
        
     },[resId]);
   
     const fetchMenu= async ()=>{
         const data= await fetch(MENU_URL+resId);
 
         const response=await data.json();
         console.log(response);
        
         setResInfo(response.data);
         console.log(resInfo); 
     };
    return resInfo;
}

export default useRestaurantMenu;