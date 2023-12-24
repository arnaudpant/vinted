import React from 'react';
import { headerCategories } from '../data/headerCategories.js';

const NavBarHeader = () => {
  return (
    <nav className="flex flex-row  flex-nowrap ml-64 h-10 ">
      {headerCategories.map((category) => {
        return <ItemMenu title={category} />;
      })}
    </nav>
  );
};

const ItemMenu = ({ title = 'Inconnu' }) => {
  return (
    <div className="relative flex ">
      <button className=" text-gray-500 text-sm px-2 h-full rounded hover:bg-gray-50 focus:shadow-outline">
        {title}
      </button>
      <div className="absolute hidden mt-2 bg-white border rounded shadow-md">
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-200">
          Option 1
        </a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-200">
          Option 2
        </a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-200">
          Option 3
        </a>
      </div>
    </div>
  );
};

export default NavBarHeader;
