import { useState } from "react";
import CategoryItemlist from "./CategoryItemlist";

const RestaurantCategory = ({ data }) => {
    // console.log(data);  
     const[showItems,setShowItems]= useState(false);

    const handleClick =() =>{
    //    console.log("clicked"); 
       setShowItems(!showItems);
    };

    return (
        <div>
            {/* Accordian Header */}
            <div className="w-7/12 h-auto mx-auto my-4 shadow-lg bg-gray-50  cursor-pointer ">
                <div className="flex justify-between bg-slate-200 rounded-md py-3 " onClick={handleClick}>
                    <span className="font-bold text-lg mt-2 ml-1">{data.title} ({data.itemCards.length})</span>
                    <span className="mt-2 mr-2">∨</span>
                </div>
                {/* Accordian Body */}
                 {showItems && <CategoryItemlist  items={data?.itemCards}/>}
            </div>
        </div>
    );
};

export default RestaurantCategory;