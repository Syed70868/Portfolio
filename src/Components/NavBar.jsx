import React from 'react';
import { navMenus } from '../assets/asstes';
import { FaArrowRight } from 'react-icons/fa6';
import Button from './Button';

const NavBar = () => {
  return (
    <div className="fixed w-full py-4 z-50 bg-black/50 backdrop-blur-2xl">
      <div className="page-width">
        <div className="flex justify-between items-center">
          {/*LOGO*/}
          <div className="text-2xl font-orbitron font-bold text-white">
            <span>ALI</span>
            <span className="text-red-600 font-orbitron"> ASGHAR</span>
          </div>
          {/* MENU */}
          <div className="hidden md:flex space-x-8 my-underline-[0.5px] text-amber-50 my-underline-gray-600/50 transform: scaleY(0.5);  rounded-[5px] px-10 py-2">
            {navMenus.map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                className="hover:text-red-600 font-bold transition-all duration-500 my-underline"
              >
                {item}
              </a>
            ))}
          </div>
          {/* Button */}
          <div>
            <Button text={'Resume'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
