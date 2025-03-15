import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleCartDelete = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-6 p-6">
      <h1 className="text-2xl font-bold">Cart </h1>
      <div className="w-6/12 m-auto">
        <button
          onClick={handleCartDelete}
          className="p-2 m-2 bg-black text-white rounded-xl"
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>Cart is empty.Add items for snacks</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
