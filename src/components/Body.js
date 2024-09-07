import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { UpdatedReastaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Loader from "./Loader";
import useRestaurantCard from "../utils/useRestaurantCard";
import useOnlinestatus from "../utils/useOnlinestatus";
import Usercontext from "../utils/Usercontext";
import { useSelector } from "react-redux";

const Body = () => {
  const [searchtext, setsearchtext] = useState("");
  const listofrestraunts = useRestaurantCard();
  const [targetrestaurant, settargetrestaurant] = useState([]);
  const user = useSelector((store) => store.user);


  const Promotedcard = UpdatedReastaurantCard(RestaurantCard);

  useEffect(() => {
    settargetrestaurant(listofrestraunts);
  }, [listofrestraunts]);

  const Onlinestatus = useOnlinestatus();
  if (Onlinestatus === false) {
    return <h1 className="text-center text-3xl text-red-500 mt-10">Oops! It seems like you're offline!!</h1>;
  }

  const handleSearch = () => {
    const filteredrestaurant = listofrestraunts.filter((res) =>
      res.info.name.toLowerCase().includes(searchtext.toLowerCase())
    );
    settargetrestaurant(filteredrestaurant);
  };

  const handleTopRated = () => {
    const filteredlist = listofrestraunts.filter((res) => res.info.avgRating > 4);
    settargetrestaurant(filteredlist);
  };

  const { loggedinuser, setUsername } = useContext(Usercontext);

  return (
    <div className="px-4 sm:px-10 py-8 bg-[#ffffff]">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-10 mb-8">
        <input
          type="text"
          placeholder="Enter a Restaurant Name"
          className="rounded-md bg-gray-100 px-5 border border-gray-100 outline-none py-2 w-full sm:w-auto"
          value={searchtext}
          onChange={(e) => setsearchtext(e.target.value)}
        />
        <button
          className="px-5 py-2 bg-orange-500 rounded-md text-white text-xl w-full sm:w-auto"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="px-5 py-2 bg-orange-500 rounded-md text-white text-xl w-full sm:w-auto"
          onClick={handleTopRated}
        >
          Top Restaurants
        </button>
        {/* <input
          type="text"
          className="rounded-md bg-gray-100 px-4 py-2 w-full md:w-auto"
          value={loggedinuser}
          onChange={(e) => setUsername(e.target.value)}
        /> */}
      </div>
      {listofrestraunts?.length === 0 ? (
        <Loader/>
        // <h1 className="font=bold text-3xl text-center">Loading...</h1>
        // <Shimmer />
      ) : (
        <div className="flex flex-wrap justify-center">
          {targetrestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`/restaurants/${restaurant.info.id}`}
              className="m-2 w-full xxs:w-1/2  md:w-1/3 lg:w-1/4 xl:w-1/5"

            >
              {restaurant?.info?.promoted ? (
                <Promotedcard resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
