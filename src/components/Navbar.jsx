import { Badge } from '@mui/material';
import Announce from './Annoucne'
import { ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalQTY, setOpenCart } from '../features/CartSlice.js';
import Carts from '../features/Carts';

const style =
  'text-[14px], cursor-pointer, ml-[25px] hover:text-blue-700 md:font-bold';

const Navbar = () => {

  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);

  const onCartToggle = () => {
    dispatch(setOpenCart({
      cartState: true
    }))
  }

  return (
      <nav className="fixed w-full top-0 left-0 z-30 flex flex-col bg-white shadow-md">
        <Announce />
        <div className="flex flex-col md:flex-row md:justify-between px-32 py-2">
          {/* Logo for destop*/}
            <Link to='/'>
              <div className="font-bold text-2xl md:text-3xl cursor-pointer hover:text-blue-700">Cloth Store</div>
            </Link>

          {/* Right div */}
          <div className="flex items-center justify-end">
            <Link to='/'>
              <div className={style}>Home</div>
            </Link>
            <Link to='/category'>
              <div className={style}>Category</div>
            </Link>
            <Link to='/login'>
              <div className={style}>Signin</div>
            </Link>
            <button type='button' onClick={onCartToggle} className={style}>
              <Badge badgeContent={totalQTY} color='primary'>
                <ShoppingCartOutlined />
              </Badge>
            </button>
          </div>
          <Carts />
        </div>
      </nav>
  );
};

export default Navbar;
