import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    const{name, cuisines, avgRating, costForTwo, areaName ,cloudinaryImageId}=resData?.info;   //destructurising the object
    return (
        <div className=" w-72 h-[520px] text-center hover:bg-slate-100 px-6 ml-9 mr-3 mb-8 mt-5 rounded-md shadow-inner transform transition-transform duration-300 hover:scale-105  " >
            <img className="card-img size-56 rounded-md ml-2" 
            src={ CDN_URL+ cloudinaryImageId}/>
            <h3 className="font-bold font-serif mb-3">{name}</h3>
            <h4 className="font-mono my-2 ">{cuisines.join(",")}</h4>
            <h4 className="font-semibold">{avgRating} ⭐</h4>
            <h4 className="font-semibold">{costForTwo}</h4>
            <h4 className="font-mono">-{areaName}</h4>  
        </div>
    );
};

export default RestaurantCard;