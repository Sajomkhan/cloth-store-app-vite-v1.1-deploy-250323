import { Link } from 'react-router-dom';

const CategoryCard = ({ item }) => {

  return (
    <div className='max-w-[360px] relative shadow-lg rounded-md hover:scale-105 ease-in duration-300 border-2 border-gray-200'>
      <img src={item.src} className="max-w-[360px] sm:px-0" alt='Image' />
      <div className='absolute left-0 top-0 flex flex-col z-10 w-full h-full items-center justify-center'>
        <h2 className='text-purple-600 text-2xl font-semibold'>{item.title}</h2>
        <h2 className='text-sky-600 font-medium text-[18px] mb-2'>Unique Style</h2>
        <Link to="/category">
          <buttton className='btn my-2'>See more</buttton>
        </Link>
      </div>
    </div>)
};

export default CategoryCard;
