import React from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar, Navbar } from '../components';

function MainLayout() {
  return (
    <div className="relative sm:p-8 p-4 bg-[#13131a] min-h-screen flex">
      <div className="relative hidden mr-10 sm:flex">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
