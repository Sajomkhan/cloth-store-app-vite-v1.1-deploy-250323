import React from 'react';
import { Send } from '@mui/icons-material';


const NewsLetter = () => {

  return <div className='flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#3E54AC]'>
    <h1 className='text-[30px] text-white md:text-[50px] font-bold'>NEWSLETTER</h1>
    <h2 className='text-[14px] text-white md:text-[20px] mt-2'>Always in touch with us, for your favourite Products.</h2>
    <div className='flex mt-[3rem] item-center justify-between w-[20rem] md:w-[30rem] min-h-[2rem] bg-white border-[#cccccc] rounded-[5px] overflow-hidden '>
      <input className='p-2 border-none pl-[20px] flex-[8] outline-none' type='email' placeholder='Email' />
      <button className='bg-[#865DFF] flex-1 hover:bg-[#5a3aba]'>
        <Send className='text-white hover:text-yellow-400' />
      </button>
    </div>
  </div>;
};

export default NewsLetter;
