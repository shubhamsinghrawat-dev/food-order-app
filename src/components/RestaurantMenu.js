import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import Loader from "./Loader"

const RestaurantMenu = () => {
  const { resid } = useParams();
  const [showindex, setShowindex] = useState(null);

  const Resinfo = useRestaurantMenu(resid);

  if (Resinfo === null) {
    return (<Loader/>);
  }

  const { name, cuisines, costForTwoMessage } = Resinfo?.cards?.[2]?.card?.card?.info || {};
  const category = Resinfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold mb-2">{name || "Loading..."}</h1>
      <h2 className="text-center text-xl font-medium mb-2">Menu</h2>
      <h3 className="text-center text-lg font-medium mb-4">
        {cuisines?.join(", ") || ""} - {costForTwoMessage || ""}
      </h3>
      <ul>
        {category?.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showitems={index === showindex}
            setShowindex={() => setShowindex(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
