import React, { useContext } from 'react';
import { FOOD_IMG } from './utils/Constants';
import UserContext from './utils/UserContext';

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    area,
    avgRating,
    costForTwo,
    deliveryTime,

    cloudinaryImageId,
  } = resData;

  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="m-2 p-3 h-auto w-[300px] rounded-lg bg-green-50 hover:bg-green-100">
      <div>
        {' '}
        <img
          className="biryani"
          alt="food"
          src={FOOD_IMG + cloudinaryImageId}
        />
      </div>

      <div className='mt-4'>
        <h3 className="font-bold">{name}</h3>
        <p>{cuisines.join(', ')}</p>
        <h4>{area}</h4>
        <span>
          <h4>
            <i className="fa-solid fa-star"></i>
            {avgRating}
          </h4>
          <h4>{deliveryTime}</h4>
          <h4>{costForTwo}</h4>
          <h3 className="font-bold">UserName:- {loggedInUser}</h3>
        </span>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
