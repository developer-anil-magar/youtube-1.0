import React, { useState, useRef, useEffect } from 'react';

import { Logo, Menu, Search, Close, Mic, Video, Bell, Profile } from '../assets';

const Navbar = () => {
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef(null);

  const toggle = (e) => {
    setIsOpen(e && e.target === inputRef.current);
  };

  useEffect(() => {
    document.addEventListener('click', toggle);
    return document.removeEventListener('click', toggle);
  }, [isOpen]);

  return (
    <nav className="w-full fixed h-[75px] bg-white">
      <div className="flex justify-between   w-full max-w-[1860px] mx-6">
        {/* menu and logo container */}
        <div className="flex">
          <div className="w-9 h-6 py-5">
            <img src={Menu} alt="menu" className="" />
          </div>
          <div className="flex py-[7px] ml-4 ">
            <img src={Logo} alt="logo" className="w-16 h-16" />
            <h1 className="mt-[18px] -ml-2 font-bold text-xl tracking-tighter">YouTube</h1>
            <span className="text-gray-400 text-xs mt-4 tracking-normal ml-1">IN</span>
          </div>
        </div>

        {/* search bar container */}
        <div className="flex">
          <div className={`${isOpen ? 'block' : 'hidden'} h-[3rem] w-[5rem] border mt-3 rounded-l-3xl bg-gray-100`}>
            <img src={Search} alt="search" className="h-[1.7rem] ml-6 mt-[10px]" style={{ filter: 'invert(19%) sepia(22%) saturate(448%) hue-rotate(164deg) brightness(93%) contrast(91%)' }} />
          </div>
          <div className="flex border w-[40rem] h-[3rem] mt-3">
            <input
              ref={inputRef}
              type="text"
              name="search"
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className=" text-xl ml-2 focus:outline-0 bg-transparent h-10 my-[3px] w-[39rem]"
              onClick={toggle}
            />
            <div className={`${input ? 'block' : 'hidden'} w-6 h-6 mt-3`}>
              <img src={Close} alt="close" />
            </div>
          </div>
          <div className="h-[3rem] w-[5rem] border mt-3 rounded-r-3xl bg-gray-100">
            <img src={Search} alt="search" className="h-[1.7rem] ml-6 mt-[10px]" style={{ filter: 'invert(19%) sepia(22%) saturate(448%) hue-rotate(164deg) brightness(93%) contrast(91%)' }} />
          </div>
          <div className="w-7 ml-8 mt-[22px]">
            <img src={Mic} alt="mic" />
          </div>
        </div>

        {/* icons container */}
        <div className="flex justify-between w-[10rem] mt-5">
          <div className="w-8 h-8">
            <img src={Video} alt="video" />
          </div>
          <div className="w-8 h-8">
            <img src={Bell} alt="bell" />
          </div>
          <div className="w-12 h-12 -mt-1">
            <img src={Profile} alt="Profile" className="w-10 h-10 rounded-full" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
