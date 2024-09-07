import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleclearcart = () => {
    dispatch(clearCart());
  };
  const cartitems = useSelector((store) => store.cart.items);

  return (
    <div className="my-2 p-4">
      <div className="text-center">
        <h1 className="font-bold text-2xl sm:text-4xl">Cart</h1>
        <button
          className="my-2 p-2 rounded-md bg-black text-white hover:bg-gray-800 transition-colors"
          onClick={handleclearcart}
        >
          Clear Cart
        </button>
        {cartitems.length === 0 ? (
          <h5 className="mt-4 text-lg">Cart is empty, please add food items</h5>
        ) : null}
      </div>
      <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto mt-4 text-left">
        <ItemList items={cartitems} />
      </div>
    </div>
  );
};

export default Cart;
