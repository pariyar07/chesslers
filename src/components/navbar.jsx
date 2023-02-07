import React from "react";
import { BiSearch } from "react-icons/bi";
import { SiLichess } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="flex justify-around w-full pt-12 pb-4">
      <a
        href="/"
        className="text-xl lg:text-3xl font-bold bg-gradient-to-r from-golden to-white bg-clip-text text-transparent text-center m-auto cursor-pointer"
      >
        Chesslers
      </a>
      <div className="flex items-center gap-5 mr-20">
        <div className="flex items-center gap-2 bg-gray-800 text-gray-500 px-2 py-1 rounded-xl mr-20">
          <BiSearch />
          <input type="text" placeholder="Search" className="bg-transparent" />
        </div>
        <a
          href="/leaderboard"
          className="lg:text-xl font-semibold hover:text-golden hover:underline underline-offset-4 duration-500 ease-in text-white cursor-pointer"
        >
          Leaderboard
        </a>
        <a
          href="/"
          className="flex items-center gap-2 bg-golden lg:text-lg font-semibold px-5 py-1 rounded-lg cursor-pointer"
        >
          Login with <SiLichess />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
