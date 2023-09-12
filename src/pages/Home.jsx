import Categories from "./category/Categories";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Products from "./product/Products";
import Slider from "../components/slider/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <div className="mx-5 xl:mx-40">
        <Products />
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
