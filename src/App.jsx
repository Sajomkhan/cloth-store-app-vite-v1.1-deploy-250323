import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import CategoryPage from "./pages/category/CategoryPage";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SingleProduct from "./pages/product/SingleProduct";
import Register from "./pages/Register";


const Layout = () => {
  return (
    <div>
      <nav className="h-20">
        <Navbar />
      </nav>
      <div className="">
        <Outlet/>
      </div>
    </div>
  )
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/product" element={<SingleProduct />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;