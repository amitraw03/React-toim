import RestaurantCard from "./RestaurantCard ";   //importing default exports
import reslist from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input type="search" placeholder="Search Your Food"></input>
                <button>search</button>
            </div>
            <div className="res-container">
                {
                    reslist.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;