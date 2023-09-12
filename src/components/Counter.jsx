import { useState } from "react";
import { useDispatch } from "react-redux";

function Counter({handleCount}) {
  
  const [count, setCount] = useState(1);

  const dispatch =  useDispatch()

  const increment = () => {
    setCount(count + 1)
    handleCount(count)
  }

  const deccrement = () => {
    if (count > 0)
      setCount(count - 1)
      handleCount(count)
  }

  return (
    <div>
      <div className="counter flex items-center text-xl font-semibold justify-start">
        Quantity
        <div className="ml-5 shadow-md flex">
          <div className="bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-l-lg cursor-pointer"
            onClick={deccrement}
          >
            -
          </div>
          <div className="w-8 flex items-center justify-center border-[1px] border-[#8a4af3]">
            {count}
          </div>
          <div className="bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer"
            onClick={increment}
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
