import React from "react";
// import { RemoveIcon, AddIcon, DeleteIcon } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { setDecreaseItemQTY, setIncreaseItemQTY, setRemoveItemFromCart } from "../../features/CartSlice.js";



const CartItem = ({ item }) => {
  const { id, img, title, desc, price, cartQuantity } = item

  const dispatch = useDispatch();

  const onRemoveItem = () => {
    dispatch(setRemoveItemFromCart(item))
  }

  const onIncreaseItemQTY = () => {
    dispatch(setIncreaseItemQTY(item))
  }
  const onDecreaseItemQTY = () => {
    dispatch(setDecreaseItemQTY(item))
  }

  return (
    <>
      <div className="flex items-center justify-between w-full px-5 ">
        <div className="flex items-center gap-5">
          <div className={`bg-gradient-to-b relative shadow-md bg-white/50 rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}>
            <img src={img} alt={`img/cart-item/${id}`} className="w-56 h-auto object-fill lg:w-28" />
            <div className='absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded'>${price}</div>
        </div>
          <div className="grid items-center gap-4">
            <div className="grid items-center leading-none">
              <h1 className="font-medium text-lg lg:text-sm">{title}</h1>
              <p className="text-sm lg:text-xs">{desc.substring(0, 50)}...</p>
            </div>
            <div className="flex items-center justify-around w-full">
              <button type="button" onClick={onDecreaseItemQTY} className="  bg-[#6a39b8] text-white rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90">
                <RemoveIcon className="w-5 h-5 lg:w-4 lg:h-4 stroke-[2]" />
              </button>
              <div className="  bg-[#6a39b8] text-white rounded font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center">{cartQuantity}</div>
              <button type="button" onClick={onIncreaseItemQTY} className=" bg-[#6a39b8] text-white rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90">
                <AddIcon className="w-5 h-5 lg:w-4 lg:h-4 stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-5">
          <div className="grid items-center justify-center">
            <h1 className="text-lg lg:text-base text-slate-900 font-medium">${price * cartQuantity}</h1>
          </div>
          <div className="grid items-center justify-center">
            <button type="button" className="  bg-[#6a39b8] text-white rounded p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer" onClick={onRemoveItem}>
              <DeleteIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;