import { Badge } from "@mui/material";
import Announce from "./Annoucne";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQTY, setOpenCart } from "../features/CartSlice.js";
import Carts from "../features/Carts";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [manubar, setManubar] = useState(false);

  const handleManubarToggle = () => setManubar(!manubar);

  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-30 flex flex-col bg-white shadow-md">
      <Announce />
      <div className="flex justify-between px-3 md:px-32 md:py-2 relative">
        
        {/* ---------------Carts--------------*/}
        <Carts />

        {/* ---------------Logo for destop--------------*/}
        <Link to="/">
          <div className="w-40 font-bold text-2xl md:text-3xl cursor-pointer hover:text-blue-700">
            Cloth Store
          </div>
        </Link>

        {/* -------------For Destop Moode---------- */}
        <div className="hidden md:flex gap-4 items-center md:justify-end">
          <Link to="/" className="nav_link">
            Home
          </Link>
          <Link to="/category" className="nav_link">
            Category
          </Link>
          <div
            onClick={onCartToggle}
            className="nav_link"
          >
            Shop
          </div>
          <Link to="/login" className="nav_link">
            Signin
          </Link>
          <button type="button" onClick={onCartToggle}>
            <Badge badgeContent={totalQTY} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </button>
        </div>

        {/* -------------For Mobile Moode---------- */}
        {manubar && (
          <div
            onClick={handleManubarToggle}
            className="md:hidden absolute z-30 top-8 left-0 w-full h-screen bg-transparent"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-4/6 flex flex-col items-center bg-white shadow-md rounded-md text-xl font-semibold"
            >
              <div
                className="w-full flex justify-end text-lg bg-blue-600 text-white py-1 px-3"
                onClick={handleManubarToggle}
              >
                <CloseIcon />
              </div>
              <Link
                to="/"
                className="w-full text-center nav_link border-y-2 border-gray-400/20 py-8"
              >
                Home
              </Link>
              <Link
                to="/category"
                className="w-full text-center nav_link border-y-2 border-gray-400/20 py-8"
              >
                Category
              </Link>
              <div
                onClick={onCartToggle}
                className="w-full text-center nav_link border-y-2 border-gray-400/20 py-8"
              >
                Buy-Now
              </div>
              <Link
                to="/login"
                className="w-full text-center nav_link border-y-2 border-gray-400/20 py-8"
              >
                Signin
              </Link>
            </div>
          </div>
        )}
        <div className="md:hidden flex gap-3">
          {/* --------------Badge for mobile--------------- */}
          <button type="button" onClick={onCartToggle} className=" self-end">
            <Badge badgeContent={totalQTY} color="primary" className="nav_link">
              <ShoppingCartOutlined />
            </Badge>
          </button>
          {/* --------------Vartical Bar for mobile--------------- */}
          <div className="text-lg px-3" onClick={handleManubarToggle}>
            <MoreVertIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
