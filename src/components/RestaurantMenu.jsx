
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu=() =>{

   const {resId}=useParams();

   const resInfo=useRestaurantMenu(resId);  //this is custom hook by which we just updating the restaurant menu details on page just using resId

    if(resInfo===null) return <Shimmer/>
    const{name , cuisines , costForTwoMessage}= resInfo?.cards[2]?.card?.card?.info;   //destructurising the object

    const {itemCards} =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

   // const cardInfo = resInfo?.cards[2]?.card?.card?.info || {};
   // const name = cardInfo.name || 'Default Name';
   // const cuisines = cardInfo.cuisines || [];
   // const costForTwoMessage = cardInfo.costForTwoMessage || 'N/A';
 
   // const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];

    return(
          <div className="menu">
             <h1>{name}</h1>
            <p>
               {cuisines.join(",")} -{costForTwoMessage}
            </p> 
                <h2>Menu:</h2>
             <ul>
                 {itemCards.map((item) =>(
                  <li key={item.card.info.id}>
                     {item.card.info.name} -{"Rs."}
                     {item.card.info.price/100 || item.card.info.defaultPrice/100 } 
                  </li>
                 ))}
             </ul>
          </div> 
    );
};



export default RestaurantMenu;