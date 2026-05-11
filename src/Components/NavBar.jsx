import React, { useState } from 'react';
import { navMenus, assets } from '../assets/asstes';
import { FaArrowRight, FaBars, FaX } from 'react-icons/fa6';
import Button from './Button';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed w-full py-4 z-50 bg-black/50 backdrop-blur-2xl">
      <div className="page-width">
        <div className="flex justify-between items-center">
          {/*LOGO*/}
          <div className="text-2xl font-orbitron font-bold text-white">
            <span>ALI</span>
            <span className="text-red-600 font-orbitron"> ASGHAR</span>
          </div>

          {/* Desktop MENU */}
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-red-600 transition-colors duration-300"
            >
              {isMenuOpen ? <FaX size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button text={'Resume'} href={assets.CV} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              {navMenus.map((item, index) => (
                <a
                  key={index}
                  href={`#${item}`}
                  className="text-white hover:text-red-600 font-bold transition-all duration-300 text-center py-2 px-4 rounded-lg hover:bg-red-600/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-800">
                <Button text={'Resume'} href={assets.CV} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
