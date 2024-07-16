import RestaurantCard from "./RestaurantCard ";   //importing default exports
import { useEffect, useState } from "react";  //importing usestate hook is similr importing named exports
import Shimmer from "./shimmer";   //import fake UI for the 1st rendering
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    //Local State Variable
    const [ListOfRestaurants, setListOfRestaurants] = useState([]);        //2nd argument use to update/modifies state var(ListOfRestaurants)
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);   //so that Original restaurants list never affected on time to time searching

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();    //API call functn
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const response = await data.json();
        console.log(response); 

        //optional chaining use of ? while accessing
        // console.log(response.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(response.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(response.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);   //for re-rendering
        console.log(setListOfRestaurants);
    }

    //Condn of Internet Connectivity Of User
     const isOnline= useOnlineStatus();
     if(isOnline===false) return(
        <h1>Looks like you're Offline !! Please Check Your Interent Connection</h1>
     );

    //conditional Rendering
    return ListOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="features flex justify-between">

                <div className="top-res bg-indigo-600  mx-24 rounded-md my-4 text-slate-200  p-2">
                    <button className="res-btn"
                        onClick={() => {
                            //filter the res card and update the UI (what are top rated Restaurants)
                            const filteredList = ListOfRestaurants.filter(
                                (res) => res.info.avgRating > 4
                            );
                            setFilteredRestaurants(filteredList);
                        }}>⭐Top Rated Restaurants</button>
                </div>

                <div className="search  w-[420px] h-auto my-4 gap-4">
                    <input className="h-[40px] w-[290px] outline-indigo-400 text-center"type="search" placeholder="Search Your Food" value={searchText} onChange={(e) => { //we use onchange which works dynamically
                        setSearchText(e.target.value);
                    }}>
                    </input>
                    <button className="px-5 py-2 rounded-lg bg-indigo-600 font-serif text-slate-50" onClick={() => {
                        //filter the res card and update the UI (what u want o eat)
                        const searchRes = ListOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurants(searchRes);
                    }}>Search
                    </button>
                </div>
            </div>
            <div className="res-container flex flex-wrap mx-14">
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