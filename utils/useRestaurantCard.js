import { useState, useEffect } from 'react';

const RestaurantCard = () => {
  const [restList, setRestList] = useState(); // direct call
  //Normal Variable
  // let restaurantList;

  //Whenever state variable updates or changes react will re-renders the components.
  //React quickly updates whenever state variable updates (Re-renders)
  //React hooks is a simple js functions with utility or superpowers.
  //It gives some utilities.

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.357944039664872&lng=85.27807597070932&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();

    console.log(json);
    // setRestList(json.data.cards[2].data.data.cards);
    setRestList(json?.data?.cards[2]?.data?.data?.cards); //optional Chaining

    //optionalChaining

    // The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  return restList;
};

export default RestaurantCard();
