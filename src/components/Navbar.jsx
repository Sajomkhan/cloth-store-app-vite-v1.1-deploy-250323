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
import { Close } from "@mui/icons-material";

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
      <div className="flex md:justify-between px-6 md:px-32 md:py-2 relative">
        {/* ---------------Logo for destop--------------*/}
        <Link to="/">
          <div className="w-40 font-bold text-2xl md:text-3xl cursor-pointer hover:text-blue-700">
            Cloth Store
          </div>
        </Link>

        <div className="md:hidden self-end">
        <Badge
          badgeContent={totalQTY}
          color="primary"
          onClick={onCartToggle}
          className="nav_link"
        >
          <ShoppingCartOutlined/>
        </Badge>
        </div>



        <div
          className="md:hidden text-lg absolute z-10 right-2 px-3"
          onClick={handleManubarToggle}
        >
          <MoreVertIcon />
        </div>

        {/* -------------For Destop Moode---------- */}
        <div className="hidden md:flex gap-4 items-center md:justify-end">
          <Link to="/" className="nav_link">
            Home
          </Link>
          <Link to="/category" className="nav_link">
            Category
          </Link>
          <Link to="/login" className="nav_link">
            Signin
          </Link>
          <Badge
            badgeContent={totalQTY}
            color="primary"
            onClick={onCartToggle}
            className="nav_link"
          >
            <ShoppingCartOutlined />
          </Badge>
        </div>

        {/* -------------For Mobile Moode---------- */}
        {manubar && (
          <div className="md:hidden w-full">
            <div className="w-4/6 absolute z-30 top-8 left-0 flex flex-col items-center bg-white shadow-md rounded-md text-xl font-semibold">
              <div
                className="w-full flex justify-end text-lg bg-blue-600 text-white py-1 px-3"
                onClick={handleManubarToggle}
              >
                <Close />
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
              <Link
                to="/login"
                className="w-full text-center nav_link border-y-2 border-gray-400/20 py-8"
              >
                Signin
              </Link>
            </div>
            <Carts />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
