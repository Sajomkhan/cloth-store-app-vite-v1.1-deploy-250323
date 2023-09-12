import React, { useEffect, useState } from 'react'
import { footerAPI } from '../componentApi/footerAPI';

const Footer = () => {

  const { titles, links } = footerAPI

  const [Year, setYear] = useState();

  useEffect(() => {
    const getYear = () => setYear(new Date().getFullYear());
    getYear();
  }, []);

  return (
      <footer className='bg-gray-800 py-7 '>
        <div className='w-10/12 md:w-8/12 m-auto text-slate-200'>
          <div className='grid grid-cols-4 gap-2 items-start m-auto max-w-auto md:max-w-4xl'>
            {titles.map((val, i) => (
              <div key={i} className="items-center">
                <h1 className='text-xs md:text-base uppercase font-semibold'>{val.title}</h1>
              </div>
            ))}
            {links.map((list, i) => (
              <ul key={i} className="items-center">
                {list.map((link, i) => (
                  <li key={i} className="text-xs md:text-base">{link.link}</li>
                ))}
              </ul>
            ))}
          </div>
          <div className='mt-5 text-center'>
            <p className='text-sm md:text-center'>Copyright<sup className='text-base font-bold'>&copy;</sup> All Reserved Rights <span className='font-semibold'>SAIFUL AJOM KHAN {Year}</span></p>
          </div>
        </div>
      </footer>
  )
}

export default Footer

