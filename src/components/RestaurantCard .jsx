import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    const{name, cuisines, avgRating, costForTwo, areaName ,cloudinaryImageId}=resData?.info;
    return (
        <div className="res-card" >
            <img className="card-img" 
            src={ CDN_URL+ cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{areaName}</h4>
        </div>
    );
};

export default RestaurantCard;