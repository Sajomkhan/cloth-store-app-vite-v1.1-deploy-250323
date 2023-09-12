import Footer from "../../components/Footer";
import NewsLetter from "../../components/NewsLetter";
import Products from "../product/Products";

const CategoryPage = () => {
  return (
    <>
      <div className=" w-10/12 mx-auto px-2">
        <div className="flex flex-col p-5">
          <h1 className="text-[30px] place-self-center lg:place-self-start font-bold">
            Men's & Women
          </h1>
          <div className="flex  flex-col lg:flex-row  gap-5 lg:items-center justify-between mt-3">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-16">
              <div className="flex">
                <p className="font-semibold">Choose Your Size: </p>
                <select className="ml-3 border-2 px-2">
                  <option>Small</option>
                  <option selected>Medium</option>
                  <option>Large</option>
                  <option>Extra Large</option>
                </select>
              </div>
              <div className="flex">
                <p className="font-semibold">Choose Your Color: </p>
                <select className="ml-3 border-2 px-2">
                  <option>Yellow</option>
                  <option selected>Blue</option>
                  <option>Red</option>
                  <option>Green</option>
                </select>
              </div>
            </div>
            <div className="flex">
              <p className="font-semibold">Sort by: </p>
              <select className="ml-3 border-2 px-2">
                <option selected>Newest (first)</option>
                <option>Oldest (first)</option>
                <option>Price (asc)</option>
                <option>Price (desc)</option>
              </select>
            </div>
          </div>
        </div>
        <Products />
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default CategoryPage;
