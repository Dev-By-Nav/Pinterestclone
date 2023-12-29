import React, { useState } from 'react';
import logo from './assets/logo.png';
import { AiFillMessage } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import icon from './assets/icon.png'



function Navbar(props) {
    const [input, setInput] = useState('');

    const onSearchSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(input);
   
    }

    const handleKeyDown = (e) => { //forgot e first time 
        if (e.key === 'Enter') {
            onSearchSubmit(e);
        }
    }

  return (
    <div className='flex flex-row p-5'>

      <div className=' flex flex-row cursor-pointer'>
        <div className=''>
          <div className='hover:bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center'>
            <img src={logo} alt="" className='h-8' />
          </div>
        </div>

        {/* Hidden on Mobile */}
        <ul className='flex flex-row font-medium md:hidden'>
  <li className='p-3 '>Home</li>
</ul>

<ul className='hidden md:flex flex-row font-medium'>
  <li className='p-3'>Home</li>
  <li className='p-3'>Explore</li>
  <li className='p-3'>Create</li>
</ul>

      </div>

      {/* Search Bar */}
      <div className='relative text-gray-600  w-4/6 pt-1'>
        <input
          type='search'
          placeholder='Search'
          className='bg-gray-200 h-10 px-5 pl-10 rounded-full text-sm focus:outline-none w-full'
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button type='button' className='absolute left-0 top-0 mt-3 ml-4 pt-1' onClick={onSearchSubmit}>
          <svg
            className='h-4 w-4 fill-current'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-3.58-3.64-6.46-7.29-6.93a7 7 0 0 0-7.91 7.9c.47 3.65 3.35 6.82 6.93 7.29a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
          </svg>
        </button>
      </div>

      <div className='flex flex-row text-3xl  mx-auto '>

        <div className='hover:bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center'>
            <IoNotifications className=' text-[#5f5f5f]' />
        </div>
      
      
        <div className='hover:bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center'>
      <AiFillMessage className='text-[#5f5f5f]'/>
        </div>

        <div className='hover:bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center' >
          <img src={icon} alt="" className='h-6'/>
        </div>

      </div>

    </div>
  );
}

export default Navbar;
