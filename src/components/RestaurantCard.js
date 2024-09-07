import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (Props) => {
  const { resData } = Props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } = resData.info;

  return (
    <div className="w-[90%] md:w-60 bg-white shadow-md rounded-lg overflow-hidden m-4 p-4 cursor-pointer transform transition-transform hover:scale-95">
      <img src={CDN_URL + cloudinaryImageId} alt={name} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-lg font-bold text-gray-800 mt-4 truncate">{name}</h3>
      <div className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
          <i className="fa fa-star mr-1"></i>
          {avgRating}
        </div>
        <span className="text-sm font-semibold text-gray-800">{costForTwo}</span>
      </div>
      <div className="text-sm text-gray-600 mt-1">{sla.deliveryTime} minutes</div>
    </div>
  );
};

export default RestaurantCard;
export const UpdatedReastaurantCard = (RestaurantCard) => {
  return (props) => (
    <div className="relative">
      <span className="absolute top-2 left-2 bg-orange-500 z-50 text-white text-xs px-2 py-1 rounded">Promoted</span>
      <RestaurantCard {...props} />
    </div>
  );
};
