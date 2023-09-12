import { ApiCategories } from './../../componentApi/CategoryApi';
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <div className="mt-14 mx-7 md:mx-14 2xl:mx-24 ">
      <h1 className="text-2xl lg:text-4xl font-bold underline text-center mb-8">Seclect Your Categorys</h1>
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center ">
        {ApiCategories.map((category, index) => (
          <CategoryCard item={category} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
