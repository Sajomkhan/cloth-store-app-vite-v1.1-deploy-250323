import React, { useState } from 'react';
import { Close } from '@mui/icons-material';

const Annoucne = () => {

  const [announceStyle, setAnnounceStyle] = useState('bg-[#3E54AC] md:font-bold md:text-xl text-sm text-white flex items-center justify-center')

  const handleClose=() => {
    setAnnounceStyle(announceStyle + " hidden")
  }

  return <div className={announceStyle}>
    Hurry up 40% off Sale! &nbsp;
    <Close className='absolute right-3 cursor-pointer' onClick={handleClose}/>
  </div>;
};

export default Annoucne;
