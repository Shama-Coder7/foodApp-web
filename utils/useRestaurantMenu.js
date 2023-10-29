// Custom Hooks

import {useState, useEffect} from 'react';
import { MENU_API } from './Constants';

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
    // console.log('menu');
  }, []); // it will be called only once.

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    // console.log(json);
    // console.log(MENU_API);
    setResInfo(json.data);
    // console.log(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
