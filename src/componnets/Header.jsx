import { CiCamera } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full h-24 bg-green-600 text-white p-5 ">
    <nav className="w-full   flex justify-between items-center">
      <div className="text-2xl flex items-center gap-32 ">
        <div>
          <h1 className="font-bold ">WhatsApp</h1>
        </div>
        <div className="flex gap-3">
          <CiCamera />
          <CiSearch />
          <HiOutlineDotsVertical />
        </div>
      </div>
    </nav>
    <div className="flex px-1 justify-between pt-3 capitalize">
    <IoIosPeople className="text-2xl"/>
    <Link to="/">Chats</Link>
    <Link to="/update">update</Link>
    <Link to="/calls"> call</Link>
  </div>
  </div>
  );
}

export default Header;
