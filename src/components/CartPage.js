import CategoryItemList from './CategoryItemList';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from './utils/cartSlice';
const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  
  return (
    <div className="text-center m-4 p-4">
      <h2 className="text-center p-4 m-4 font-bold">Your Order</h2>
      <div className="w-6/12 m-auto">
        <button
          className=" p-2 m-2 bg-black text-white"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>

        {cartItems.length === 0 && <h2>Your Cart is Empty. Order Now </h2>}
        <CategoryItemList items={cartItems} />
      </div>
    </div>
  );
};

export default CartPage;
