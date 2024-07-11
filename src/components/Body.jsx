import RestaurantCard from "./RestaurantCard ";   //importing default exports
import reslist from "../utils/mockData";
import { useState } from "react";  //importing usestate hook is similr importing named exports
import reslist from "../utils/mockData";


const Body = () => {
    //Local State Variable
    const [ListOfRestaurants, setListOfRestaurants]=useState(reslist);  //setListOfRestaurants para use to update/modifies state var(ListOfRestaurants)

    return (
        <div className="body">
            <div className="features">

                <div className="top-res">
                    <button className="res-btn" 
                        onClick={() => {
                        const filteredList=ListOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setListOfRestaurants(filteredList);
                    }}>Top Rated Restaurants</button>
                </div>

                <div className="search">
                    <input type="search" placeholder="Search Your Food"></input>
                    <button>search</button>
                </div>
            </div>
            <div className="res-container">
                {
                    ListOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    );
};

export default Body;