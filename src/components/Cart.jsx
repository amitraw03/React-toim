import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CategoryItemlist from "./CategoryItemlist";


const Cart =()=>{
    const cartItems=useSelector((store) =>store.cart.items);
    // console.log(cartItems);

   const dispatch=useDispatch();

   const handleClearCart=()=>{
       dispatch(clearCart()); //calling action clearCart
   };

    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-serif bg-yellow-200 w-3/12 mx-auto rounded-full">Selected Cart Items</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-4 bg-black text-white rounded-lg"
                onClick={handleClearCart}>Clear Cart</button>

                {cartItems.length===0 && (<h1>Cart is empty , Please add items to the Cart!!</h1>)}
                <CategoryItemlist items={cartItems}/>
            </div>
        </div>
    );
};

export default Cart;