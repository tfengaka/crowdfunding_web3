import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { logo, sun } from '../assets';
import { navlinks } from '../constants';

const Icon = ({ type, to, stlyes, disable, src, onClick }) => {
  const baseClassName = 'w-[48px] h-[48px] rounded-[10px] flex items-center justify-center';

  if (type === 'link') {
    return (
      <Link to={to} className={`${baseClassName} ${!disable && 'cursor-pointer'} ${stlyes}`}>
        <img src={src} alt="fund_logo" className="w-1/2 h-1/2" />
      </Link>
    );
  }

  if (type === 'navlink') {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${baseClassName} ${!disable && 'cursor-pointer'} ${
            isActive ? 'bg-[#2c2f32] grayscale-0' : 'grayscale'
          } ${stlyes}`
        }
      >
        <img src={src} alt="fund_logo" className="w-1/2 h-1/2" />
      </NavLink>
    );
  }

  return (
    <div
      className={`w-[48px] h-[48px] rounded-[10px] flex items-center justify-center  ${
        !disable && 'cursor-pointer'
      } ${stlyes}`}
      onClick={onClick}
    >
      <img src={src} alt="fund_logo" className="w-1/2 h-1/2" />
    </div>
  );
};

function Sidebar() {
  return (
    <div className="flex flex-col justify-between items-center sticky top-5 h-[93vh]">
      <Icon src={logo} stlyes="w-[52px] h-[52px] bg-[#2c2f32]" type="link" to="/" />
      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col items-center justify-center gap-3">
          {navlinks.map((link) => (
            <Icon key={link.name} type="navlink" to={link.link} disable={link.disabled} src={link.imgUrl} />
          ))}
        </div>
        <Icon stlyes="bg-[#1c1c24]" src={sun} onClick={() => console.log('Switch Dark Mode')} />
      </div>
    </div>
  );
}

export default Sidebar;
