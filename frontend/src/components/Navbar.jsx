import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { CustomButton } from './';
import { Searching } from '../modules';
import { menu, thirdweb } from '../assets';
import { navlinks } from '../constants';

const address = '0x3f5CE5FBFe....';

function Navbar() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <Searching />
      <div className="justify-end hidden gap-4 sm:flex">
        <CustomButton
          btnType="button"
          title={address ? 'Create a Campaign' : 'Connect wallet'}
          styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
          onClick={() => {
            if (address) navigate('campaign/create');
            else {
              console.log('Connect wallet');
            }
          }}
        />
        <Link to="/profile">
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>
        </Link>
      </div>

      {/* Mobile screen navigation */}
      <div className="relative flex items-center justify-between sm:hidden">
        <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain" />
        </div>

        <img
          src={menu}
          alt="menu"
          className="w-[34px] h-[34px] object-contain cursor-pointer"
          onClick={() => setToggleDrawer(!toggleDrawer)}
        />
        <div
          className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 rounded-md ${
            !toggleDrawer ? 'translate-x-[100vh]' : 'translate-x-0'
          } duration-500`}
        >
          <ul className="mb-4">
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`${isActive === link.name && 'bg-[#3a3a43]'} flex p-4 rounded-sm`}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                }}
              >
                <img
                  src={link.imgUrl}
                  alt={link.name}
                  className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? 'grayscale-0' : 'grayscale'}`}
                />
                <p
                  className={`ml-[20px] font-epilogue font-semibold text-sm capitalize ${
                    isActive === link.name ? 'text-[#1dc071]' : 'text-[#808191]'
                  }`}
                >
                  {link.name}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex mx-4">
            <CustomButton
              btnType="button"
              title={address ? 'Create a Campaign' : 'Connect wallet'}
              styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
              onClick={() => {
                if (address) navigate('campaign/create');
                else {
                  console.log('Connect wallet');
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
