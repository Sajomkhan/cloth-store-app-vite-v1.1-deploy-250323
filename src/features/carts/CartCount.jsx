import React from 'react'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

const CartCount = ({ onCartToggle, totalQTY, onClearCartItems }) => {
  return (
   <>
      <div className='bg-gray-800 text-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full'>
        <div className='flex items-center gap-3'>
            <div className='grid items-center cursor-pointer' onClick={onCartToggle}>
                <KeyboardDoubleArrowLeftIcon className='w-5 h-5 hover:text-orange-500 stroke-[2]' />
            </div>
            <div className='grid items-center'>
                <h1 className='text-base font-medium'>Your Cart <span className='bg-theme-cart rounded px-1 py-0.5 font-normal text-sm'>({totalQTY} Items)</span></h1>
            </div>
        </div>
        <div className='flex items-center'>
            <h1 className='mx-3'>Delete All</h1>
            <button type='button' onClick={onClearCartItems} className='rounded bg-gray-900 active:scale-90 p-0.5'>
                <DeleteIcon className="w-5 h-5" />
            </button>
        </div>
        <div className='flex items-center'>
            <button type='button' onClick={onCartToggle} className='rounded bg-gray-900 active:scale-90 p-0.5'>
                <CloseIcon className='w-5 h-5 text-white stroke-[2]' />
            </button>
        </div>
      </div>
   </>
  )
}

export default CartCount