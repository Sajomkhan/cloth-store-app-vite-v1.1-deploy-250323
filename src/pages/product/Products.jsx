import ProductCard from "./ProductCard";
import { ApiTopPropduct } from './../../componentApi/TopProductsApi';

const Products = () => {
  return (
    <div name="product" className="py-12">
      <h1 className="text-2xl lg:text-4xl text-center font-bold underline">Products Item</h1>
      <div className="flex flex-wrap gap-10 py-16 items-center justify-center">
        {ApiTopPropduct.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Products;
