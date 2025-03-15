import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,

    cloudinaryImageId,
  } = resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-xl bg-gray-100 hover:bg-gray-300">
      <img
        className="rounded-xl"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4>{cuisines.join(",")} </h4>
      <h4>{avgRating} star</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData?.info?.sla?.deliveryTime} minutes</h4>
    </div>
  );
};

// HIGH ORDER COMPONENT
//input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    // console.log(props);

    return (
      <div>
        <label className="absolute bg-black"> Open </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
