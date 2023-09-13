import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAddItemToCart } from "../../features/CartSlice";

const ProductCard = ({ product }) => {
  const { id, img, title, desc, price } = product;

  const dispatch = useDispatch();

  const handleBuyItem = () => {
    dispatch(setAddItemToCart(product));
  };

  return (
    <Link
      to="/product"
      state={{ product }}
      className="flex flex-col w-64 bg-gray-100 shadow-md items-center hover:scale-105 ease-in duration-300"
    >
      {/* image */}
      <img className="m-1 w-[200px]" src={img} alt="product" />

      {/* product details */}
      <div className="bottom-0 w-full ease-in duration-100 rounded-b-md border-2 bg-[#ECF2FF]">
        <div className="flex flex-col p-2 items-center justify-center ">
          <h1 className="text-center font-bold text-gray-700">{title}</h1>
          <p className="my-1 text-sm">{desc.substring(0, 100)}...</p>
          <div className="flex w-full mx-11 justify-around items-center">
            <div className="font-bold">
              Price: <span>$</span>
              <span>{price}</span>
            </div>
            <div onClick={(e) => e.stopPropagation()}>
              <Link onClick={handleBuyItem}>
                <button className="btn m-2">Select for Shop</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
