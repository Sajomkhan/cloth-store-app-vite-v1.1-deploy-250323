
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAddItemToCart } from "../../features/CartSlice";
import Counter from '../../components/Counter';

const SingleProduct = () => {

  const location = useLocation();
  const { id, img, title, desc, price } = location.state.product

  const dispatch = useDispatch()

  const handleBuyItem =() =>{
    const item = { id, img, title, desc, price } 
    dispatch(setAddItemToCart(item ))
  }

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center mobile:flex-col">
        <div className="flex-1 flex items-center justify-center mt-6">

          {/* product image */}
          <img
            src={img}
            className="product_img"
            alt="product_image"
          />
        </div>

        {/* product title and desc */}
        <div className="flex flex-col justify-center items-center md:items-start textce mt-7 mx-5 md:w-6/12">
          <div>
            <h1 className="title md:text-[40px] text-[30px] font-bold">{title}</h1>
            <p className="text-justify mt-4">{desc}</p>            
          </div>

          {/* product parameter */}
          <div className="flex flex-col place-self-start">
            <p className="mt-7 text-xl font-semibold">
              Price: <b>${price}</b>
            </p>

            <div className="colors flex mt-5 text-xl font-semibold">
              Colors
              <div className="colorSelect hover:scale-110 bg-red-600 "></div>
              <div className="colorSelect hover:scale-110 bg-blue-600 "></div>
              <div className="colorSelect hover:scale-110 bg-yellow-400 "></div>
            </div>

            <div className="mt-5 text-xl font-semibold">
              Size:
              <select className="border-[2px] text-lg border-silver rounded-md ml-5">
                <option selected>Select</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>XL</option>
              </select>
            </div>

            {/* counter component */}
            <div className="mt-5">
              <Counter />
            </div>
          </div>

          <button className="text-white bg-[#8a4af3] rounded-md shadow-md my-[50px] p-3 place-self-start"
            onClick={handleBuyItem}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
