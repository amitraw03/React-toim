import RestaurantCard from "./RestaurantCard ";   //importing default exports
import { useEffect, useState } from "react";  //importing usestate hook is similr importing named exports
import Shimmer from "./shimmer";   //import fake UI for the 1st rendering
import { Link } from "react-router-dom";


const Body = () => {
    //Local State Variable
    const [ListOfRestaurants, setListOfRestaurants] = useState([]);  //second argument use to update/modifies state var(ListOfRestaurants)
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);   //so that Original restaurants list never affected on time to time searching

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();    //API call functn
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.508975&lng=77.3155706&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const response = await data.json();
        // console.log(response); 

        //optional chaining use of ? while accessing
        setListOfRestaurants(response.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(response.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);   //for re-rendering
    }

    //conditional Rendering
    return ListOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="features">

                <div className="top-res">
                    <button className="res-btn"
                        onClick={() => {
                            //filter the res card and update the UI (what are top rated Restaurants)
                            const filteredList = ListOfRestaurants.filter(
                                (res) => res.info.avgRating > 4
                            );
                            setFilteredRestaurants(filteredList);
                        }}>Top Rated Restaurants</button>
                </div>

                <div className="search">
                    <input type="search" placeholder="Search Your Food" value={searchText} onChange={(e) => { //we use onchange which works dynamically
                        setSearchText(e.target.value);
                    }}>
                    </input>
                    <button onClick={() => {
                        //filter the res card and update the UI (what u want o eat)
                        const searchRes = ListOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurants(searchRes);
                    }}>search
                    </button>
                </div>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants.map((restaurant) => (
                        <Link key={restaurant.info.id}
                            to={"/restaurants/" + restaurant.info.id}>
                            <RestaurantCard resData={restaurant} /></Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;