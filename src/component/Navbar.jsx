import React, { useState } from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const Navbar = () => {
    const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1240px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold pr-4">Eats</span>
        </h1>
        <div className=" hidden lg:flex  bg-gray-300 rounded-full items-center">
          <p className="bg-black text-white rounded-full p-2 px-2">Delivery</p>
          <p className="p-2 px-2">Pick Up</p>
        </div>
      </div>
      {/* search input */}
      <div className="bg-gray-300 px-2 items-center rounded-full flex w-[200px] sm:w-[400px] lg:[w-800px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent w-full p-2 focus:outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
      {/* cart Button*/}
      <button className="py-2 bg-white rounded-full text-black hidden md:flex ">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* mobile menu */}
      {/* overlay */}
      {nav ? (
        <div className="bg-black/80 w-full fixed h-screen z-10 top-0 left-0"></div>
      ) : null}
      {/* side drawe menu */}

      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' :' fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose onClick={()=> setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" />
              Favourites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" />
              Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" />
              Best One
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
