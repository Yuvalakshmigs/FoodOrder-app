import React from "react";
import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, deliveryTime } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-52 rounded-lg bg-gray-100 hover:bg-gray-300 ">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};
export default RestaurantCard;
