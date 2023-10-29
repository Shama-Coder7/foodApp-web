import React from 'react'

const Grocery = () => {
  return (
    <div>Grocery Store</div>
  )
}

export default Grocery

// import React, { useState, useEffect } from 'react';
// import icon36 from '../images/icon36.png';
// import productList from './ProductList';
// import '../css/grocery.css';
// // import InputSlider from 'react-input-slider';

// const Grocery = () => {
//   const containerStyle = {
//     left: '0%',
//     width: '100%',
//   };

//   const [sortedProductList, setSortedProductList] = useState(productList);
//   const [sortOption, setSortOption] = useState('default');
//   const [searchKeyword, setSearchKeyword] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });

//   const handleSortChange = (event) => {
//     const selectedSortOption = event.target.value;

//     if (selectedSortOption === 'lowToHigh') {
//       const sortedProducts = [...productList].sort((a, b) => a.price - b.price);
//       setSortedProductList(sortedProducts);
//     } else if (selectedSortOption === 'highToLow') {
//       const sortedProducts = [...productList].sort((a, b) => b.price - a.price);
//       setSortedProductList(sortedProducts);
//     } else {
//       setSortedProductList(productList);
//     }

//     setSortOption(selectedSortOption);
//   };

//   const handleSearch = (event) => {
//     const keyword = event.target.value;
//     setSearchKeyword(keyword);

//     const filteredProducts = productList.filter((product) =>
//       product.name.toLowerCase().includes(keyword.toLowerCase())
//     );
//     setSortedProductList(filteredProducts);
//   };

//   const handleCategoryChange = (event) => {
//     const selectedCategory = event.target.value;
//     setSelectedCategory(selectedCategory);

//     const filteredProducts = productList.filter(
//       (product) =>
//         product.name.toLowerCase().includes(searchKeyword.toLowerCase()) &&
//         (selectedCategory === 'All' || product.category === selectedCategory)
//     );
//     setSortedProductList(filteredProducts);
//   };

//   // const handlePriceRangeChange = (value) => {
//   //   setPriceRange({ min: value.x, max: value.xMax });
//   //   const filteredProducts = productList.filter(
//   //     (product) => product.price >= value.x && product.price <= value.xMax
//   //   );
//   //   setSortedProductList(filteredProducts);
//   // };

//   const handleFilterClick = () => {
//     let filteredProducts = productList;

//     filteredProducts = filteredProducts.filter(
//       (product) =>
//         product.price >= priceRange.min && product.price <= priceRange.max
//     );

//     if (selectedCategory !== 'All') {
//       filteredProducts = filteredProducts.filter(
//         (product) => product.category === selectedCategory
//       );
//     }

//     setSortedProductList(filteredProducts);
//   };

//   return (
//     <div className="wrapper">
//       <div className="search_main_section">
//         {/* <div className="bread_crumb">
//               <a href="#">Home</a>
//               <span>
//                 <i className="fa fa-angle-right" aria-hidden="true"></i>
//               </span>
//               <a href="#">Vegetables</a>
//             </div> */}

//         <div className="mobile_filter">
//           <i className="fa fa-filter" aria-hidden="true"></i>
//           <p>Show Filter</p>
//         </div>

//         <div className="laft_search_panel">
//           <h3>Filter Options</h3>
//           <div className="form_group" style={{ position: 'relative' }}>
//             <input
//               type="text"
//               placeholder="Keyword"
//               className="search-input"
//               value={searchKeyword}
//               onChange={handleSearch}
//             />
//             <img src={icon36} className="search_icon" alt="Search" />
//           </div>
//           <div className="form_group">
//             <label className="search_label">Category</label>
//             <select
//               className="slectt"
//               value={selectedCategory}
//               onChange={handleCategoryChange}
//             >
//               <option value="All">All</option>
//               <option value="Vegetable">Vegetable</option>
//               <option value="Fruits">Fruits</option>
//               <option value="Dairy products">Dairy products</option>
//               <option value="Organic Products">Organic Products</option>
//               <option value="Grocery Items">Grocery Items</option>
//             </select>
//           </div>
//           {/* <div className="form_group">
//                 <label className="search_label">Sub Category</label>
//                 <ul className="c_ul">
//                   <li>
//                     <label className="contect_container_checkBox">
//                       Sub Category one
//                       <input type="checkbox" checked="checked" name="text" />
//                       <span className="contect_checkmark"></span>
//                     </label>
//                   </li>
//                   <li>
//                     <label className="contect_container_checkBox">
//                       Sub Category two
//                       <input type="checkbox" checked="checked" name="text" />
//                       <span className="contect_checkmark"></span>
//                     </label>
//                   </li>
//                   <li>
//                     <label className="contect_container_checkBox">
//                       Sub Category
//                       <input type="checkbox" checked="checked" name="text" />
//                       <span className="contect_checkmark"></span>
//                     </label>
//                   </li>
//                   <li>
//                     <label className="contect_container_checkBox">
//                       Sub Categoru name here
//                       <input type="checkbox" checked="checked" name="text" />
//                       <span className="contect_checkmark"></span>
//                     </label>
//                   </li>
//                   <li>
//                     <label className="contect_container_checkBox">
//                       Sub Category
//                       <input type="checkbox" checked="checked" name="text" />
//                       <span className="contect_checkmark"></span>
//                     </label>
//                   </li>
//                 </ul>
//               </div> */}
//           <div className="form_group">
//             <label className="search_label">Price Range</label>
//             <div className="slider_rnge">
//               {/* Use react-input-slider */}
//               {/* <InputSlider
//                     axis="x"
//                     xstep={1}
//                     xmin={0}
//                     xmax={100}
//                     x={priceRange.min}
//                     xMax={priceRange.max}
//                     onChange={(value) => handlePriceRangeChange(value)}
//                   /> */}
//               <span className="range-text">
//                 <input
//                   type="text"
//                   className="price_numb"
//                   readOnly
//                   value={`Rs. ${priceRange.min} - Rs. ${priceRange.max}`}
//                 />
//               </span>
//             </div>
//           </div>

//           <button
//             type="button"
//             className="search-submit1"
//             onClick={handleFilterClick}
//           >
//             Filter
//           </button>
//         </div>

//         {/* <!--right--> */}
//         <div className="right_search_panel">
//           <div className="evnt_shot_by_main">
//             <label className="event-sort">
//               Showing 1-20 out of 100 product for Vegetable
//             </label>
//             <div className="sort-filter">
//               <p>Sort by :</p>
//               <select
//                 className="sort-select"
//                 value={sortOption}
//                 onChange={handleSortChange}
//               >
//                 <option value="default">Select</option>
//                 <option value="lowToHigh">Price - Low to High</option>
//                 <option value="highToLow">Price - High to Low</option>
//               </select>
//             </div>
//           </div>

//           {sortedProductList.map((product, index) => (
//             <div className="search_proo" key={index}>
//               <div className="srch_pic_box">
//                 <img src={product.image} alt={product.name} />
//                 {/*  */}
//               </div>
//               <div className="srch_dtls_box">
//                 <a href="#">{product.name}</a>
//                 <p>Rs. {product.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Grocery;
