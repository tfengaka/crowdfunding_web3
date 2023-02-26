import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { sun, logo } from '../assets';
import { navlinks } from '../constants';

const Icon = ({ isActive, name, stlyes, disable, src, handleClick }) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] flex items-center justify-center ${
      isActive && isActive === name && 'bg-[#2c2f32] grayscale-0'
    }  ${!disable && 'cursor-pointer'} ${stlyes}`}
    onClick={handleClick}
  >
    <img src={src} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive && isActive !== name && 'grayscale'}`} />
  </div>
);

function Sidebar() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  return (
    <div className="flex flex-col justify-between items-center sticky top-5 h-[93vh]">
      <Link to="/">
        <Icon src={logo} stlyes="w-[52px] h-[52px] bg-[#2c2f32]" />
      </Link>
      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col items-center justify-center gap-3">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              name={link.name}
              isActive={isActive}
              disable={link.disabled}
              src={link.imgUrl}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>
        <Icon stlyes="bg-[#1c1c24]" src={sun} />
      </div>
    </div>
  );
}

export default Sidebar;
