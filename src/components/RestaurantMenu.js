import React, { useState } from 'react';
// import { useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from './utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
// import { MENU_API } from './utils/Constants';

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);
  // useEffect(() => {
  //   fetchMenu();
  //   console.log('menu');
  // }, []); // it will be called only once.

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);

  //   const json = await data.json();

  //   console.log(json);
  //   console.log(MENU_API);
  //   setResInfo(json.data);
  //   console.log(json.data);
  // };

  // We have a useEffect hook here which has two arguments first one is callback function or we can say arrow function and the second one is the optional argument.
  // we can keep this optional empty and it it is empty and haven't any value or don't have any dependency array then useEffect will render everytime.

  if (resInfo === null) return <Shimmer />;

  //destructing the values

  const { name, cuisines, area, avgRating, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  console.log('itemCards', itemCards);
  console.log(
    'card-detail',
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {}
  );

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.['card']?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );
  // console.log(categories);
  //for each category i want accordion.

  return (
    <div className="text-center">
      {/* <img className="biryani" alt="food" src={FOOD_IMG + cloudinaryImageId} /> */}
      <div className="border-b-2">
        <h1 className="font-bold my-8 text-3xl text-amber-600">{name}</h1>
        <p>{area}</p>

        <div className="flex justify-evenly">
          <p className="font-bold text-sm">
            {cuisines.join(',')} - {costForTwoMessage}
          </p>
          <p className="box-border h-10 w-30 p-1 m-1 border-4">Rate:- {avgRating}</p>
        </div>
      </div>

      {/* categories accordion */}
      {categories?.map((category, index) => (
        //controlled components
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
      {/* <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {'Rs.'}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
