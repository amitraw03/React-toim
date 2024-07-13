import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import { MENU_URL } from "../utils/constants";


const RestaurantMenu=() =>{
   const [resInfo,setResInfo]= useState(null);


   const {resId}=useParams();
   
    useEffect(()=>{
       fetchMenu();
       
    },[]);
    
     
    const fetchMenu= async ()=>{
        const data= await fetch(MENU_URL+829742);

        const response=await data.json();
      //   console.log(response);
        
        console.log(response); 
        setResInfo(response.data);
        console.log(resInfo); 
        

    };

    if(resInfo===null) return <Shimmer/>

   //  const{name , cuisines , costForTwoMessage}= resInfo?.cards[2]?.card?.card?.info;   //destructurising the object

   //  const {itemCards} =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

   // const cardInfo = resInfo?.cards[2]?.card?.card?.info || {};
   // const name = cardInfo.name || 'Default Name';
   // const cuisines = cardInfo.cuisines || [];
   // const costForTwoMessage = cardInfo.costForTwoMessage || 'N/A';
 
   // const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];

    return(
         //  <div className="menu">
         //     <h1>{name}</h1>
         //    <p>
         //       {cuisines.join(",")} -{costForTwoMessage}
         //    </p> 
         //        <h2>Menu:</h2>
         //     <ul>
         //         {itemCards.map((item) =>(
         //          <li key={item.card.info.id}>
         //             {item.card.info.name} -{"Rs."}
         //             {item.card.info.price/100 || item.card.info.defaultPrice/100 } 
         //          </li>
         //         ))}
         //     </ul>
         //  </div> 
         
        <div></div>
    );
};



export default RestaurantMenu;