
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {

   const { resId } = useParams();

   const resInfo = useRestaurantMenu(resId);  //this is custom hook by which we just updating the restaurant menu details on page just using resId

   if (resInfo === null) return <Shimmer />
   const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;   //destructurising the object

   const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

   //  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards); 
   const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
   );
   // console.log(categories);


   return (
      <div className="text-center">
         <h1 className="font-bold my-6 mx-auto py-2 text-2xl font-serif bg-yellow-200 w-7/12 rounded-sm">"{name}"</h1>
         <p className="font-mono text-lg ">
            {cuisines.join(",")} -{costForTwoMessage}
         </p>
         {categories.map(
            (category) => 
            <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} />
         )}

      </div>
   );
};



export default RestaurantMenu;