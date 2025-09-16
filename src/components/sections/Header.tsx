import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative w-full px-20 max-md:px-5 pt-6">
      <nav className="bg-[rgba(255,255,255,0.15)] flex w-full items-center gap-[40px_100px] text-xl justify-between flex-wrap px-8 py-4 rounded-[30px] max-md:max-w-full max-md:px-5">
        <div className="flex items-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/a0d7ae3d5919fc0bdac4bea8de350a83e737593e?placeholderIfAbsent=true"
            alt="VonTech Group Logo"
            className="aspect-[4.55] object-contain w-[100px] self-stretch shrink-0 my-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex self-stretch min-w-60 items-center gap-9 text-white font-medium flex-wrap my-auto max-md:max-w-full">
          <a href="#home" className="self-stretch my-auto hover:text-[#FFE21B] transition-colors">
            Home
          </a>
          <a href="#about" className="self-stretch my-auto hover:text-[#FFE21B] transition-colors">
            About
          </a>
          <a href="#services" className="self-stretch my-auto hover:text-[#FFE21B] transition-colors">
            Services
          </a>
          <a href="#resources" className="self-stretch my-auto hover:text-[#FFE21B] transition-colors">
            Resources
          </a>
          <div className="self-stretch flex items-center gap-[5px] whitespace-nowrap my-auto">
            <a href="#career" className="self-stretch my-auto hover:text-[#FFE21B] transition-colors">
              Career
            </a>
            <img
              src="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/3e48862d0ba3c0bdb624754c351ca24b83021bcb?placeholderIfAbsent=true"
              alt="Dropdown arrow"
              className="aspect-[2] object-contain w-6 self-stretch shrink-0 my-auto"
            />
          </div>
          <a href="#events" className="self-stretch my-auto hover:text-[#FFE21B] transition-colors">
            Events
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Login Button */}
        <button className="hidden md:flex justify-center items-center bg-[#FFE21B] self-stretch gap-2 text-[#262727] font-bold whitespace-nowrap my-auto px-6 py-3 rounded-[20px] hover:bg-[#FFD700] transition-colors max-md:px-5">
          Login
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[rgba(255,255,255,0.95)] backdrop-blur-sm rounded-b-[20px] p-6 mt-2 mx-8">
            <div className="flex flex-col gap-4 text-[#262727] font-medium">
              <a href="#home" className="py-2 hover:text-[#097484] transition-colors" onClick={toggleMenu}>
                Home
              </a>
              <a href="#about" className="py-2 hover:text-[#097484] transition-colors" onClick={toggleMenu}>
                About
              </a>
              <a href="#services" className="py-2 hover:text-[#097484] transition-colors" onClick={toggleMenu}>
                Services
              </a>
              <a href="#resources" className="py-2 hover:text-[#097484] transition-colors" onClick={toggleMenu}>
                Resources
              </a>
              <a href="#career" className="py-2 hover:text-[#097484] transition-colors" onClick={toggleMenu}>
                Career
              </a>
              <a href="#events" className="py-2 hover:text-[#097484] transition-colors" onClick={toggleMenu}>
                Events
              </a>
              <button className="justify-center items-center bg-[#FFE21B] flex gap-2 text-[#262727] font-bold mt-4 px-6 py-3 rounded-[20px] hover:bg-[#FFD700] transition-colors">
                Login
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
