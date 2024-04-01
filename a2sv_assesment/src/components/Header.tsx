import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8">
      <img src="./assets/logo.svg" />
      <nav className="space-x-12 font-epilogue font-bold flex mx-auto">
        <a href="#" className=" hover:text-gray-300">
          Home
        </a>
        <a href="#" className=" hover:text-gray-300">
          Hospitals
        </a>
        <a href="#" className=" hover:text-gray-300">
          Doctors
        </a>
      </nav>

      <div>
        <button className="rounded-full border border-gray-500 font-bold py-2 px-4">
          Log Out
        </button>
      </div>
    </header>
  );
};

export default Header;
