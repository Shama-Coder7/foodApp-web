import React, { useContext, useState } from 'react';
import { LOGO_IMG } from './utils/Constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from './utils/useOnlineStatus';
import UserContext from './utils/UserContext';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {
  // let btnName= "Login";
  const [btnName, setBtnName] = useState('Login');
  // console.log('header render');
  const onlineStatus = useOnlineStatus();

  //contextApi

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  //subscribing to the store using selector

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div>
        <Link to="/">
          <img src={LOGO_IMG} className="logo w-20 h-30 mx-12 py-5" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="text-20 flex list-none flex p-4 m-4">
          <li className="px-4">{onlineStatus ? 'Online-🟢' : 'Offline-🔴'}</li>
          <Link to="/">
            <li className="px-4">Home</li>
          </Link>

          <li className="px-4">
            <Link to="/about">About Us </Link>
          </li>

          <Link to="/grocery">
            <li className="px-4">Groceries</li>
          </Link>

          <Link to="/contact">
            <li className="px-4">Contact Us</li>
          </Link>

          <li className="px-4 font-bold text-xl">
            <Link to="/cartpage">
              <div className="flex">
                <AiOutlineShoppingCart />{' '}
                <p className="text-xs text-inherit">{cartItems.length}</p>
              </div>
            </Link>
          </li>

          {/* <button className='login' onClick={() => setBtnName("Logout")}>{btnName}</button> */}
          <button
            className="px-4"
            onClick={() => {
              btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
            }}
          >
            {btnName}
          </button>

          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

// on the initial time the state variable is login but as soon as we do set function it will header function once again, it will create a new instance. it will created with updated values.
