import React from 'react';
import { FOOD_IMG } from './utils/Constants';
import { useDispatch } from 'react-redux';
import { addItems } from './utils/cartSlice';

const CategoryItemList = ({ items }) => {
  const dispatchItems = useDispatch();

  const handleAddItems = (items) => {
    //dispatch an action
    dispatchItems(addItems(items));
  };
  return (
    <div>
      {items.map((items) => (
        <div
        data-testid="foodItems" 
          key={items.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-3">
              <span className="py-2 font-bold">{items.card.info.name}</span>
              <span className="py-2">-₹{items.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{items.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-1 mx-16 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleAddItems(items)}
              >
                Add +
              </button>
            </div>{' '}
            <img src={FOOD_IMG + items.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItemList;
