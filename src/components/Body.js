import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import React, { useContext, useEffect, useState } from 'react';
// import restaurantList from './utils/mockData';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from './utils/useOnlineStatus';
import UserContext from './utils/UserContext';

function Body() {
  //State Variable
  // const [restList, setRestList] = useState(restaurantList); // it will all the restaurants.
  const [restList, setRestList] = useState([]); // direct call
  //Normal Variable
  // let restaurantList;

  //Whenever state variable updates or changes react will re-renders the components.
  //React quickly updates whenever state variable updates (Re-renders)
  //React hooks is a simple js functions with utility or superpowers.
  //It gives some utilities.

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  console.log('testuse', useState());

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();

    console.log('all-data', json);
    // setRestList(json.data.cards[2].data.data.cards);
    // setRestList(json?.data?.cards[2]?.data?.data?.cards); //optional Chaining

    setRestList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    //optionalChaining

    // The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // const searchResult() {
  //    restList.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()))
  //   setFilteredRestaurant(filteredRestaurant);

  // }

  // Conditional REndering
  // if(restList.length===0){
  //   return <Shimmer/>
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h2>You're offline, Please check your internet connection</h2>;

  console.log('body-rendered');

  const { loggedInUser, setUserName } = useContext(UserContext);

  return restList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className=" border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-5 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // filter the restaurant cards and update the UI
              const filteredRestaurant = restList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className=" m-12 p-2 px-2 py-1 bg-green-300 rounded"
          onClick={() => {
            console.log('ButtonClicked');
            //filter logic will be here

            const filteredList = restList.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
            console.log('filteredList');
          }}
          // onMouseOver={() => {
          //   console.log("Mouse-hover");
          // }}
        >
          Top Rated Restaurants
        </button>

      <div className="search m-2 p-2 flex items-center">
        <label>UserName:</label>
        <input
          className="border border-black px-3 m-2"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      </div>

      <div className="flex justify-center flex-wrap">
        {filteredRestaurant?.map((restaurant) => {
          return (
            <Link
              key={restaurant?.info.id}
              to={'/restaurants/' + restaurant?.info.id}
            >
              {restaurant?.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant?.info} />
              ) : (
                <RestaurantCard resData={restaurant?.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
