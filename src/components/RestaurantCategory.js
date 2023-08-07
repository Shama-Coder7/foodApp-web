import React, { useState } from 'react';
import CategoryItemList from './CategoryItemList';

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  console.log('rc', data);
  //all the restaurantcategory have its own showItems.
  const [showData, setShowData] = useState(false);

  const handleClick = () => {
    setShowData((prevShowData) => !prevShowData);
    setShowIndex();
  };

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showData ? '🔽' : '🔼'}</span>
        </div>
        {showItems && <CategoryItemList items={data.itemCards} />}
      </div>

      {/* accordionbody */}
    </div>
  );
};

export default RestaurantCategory;
