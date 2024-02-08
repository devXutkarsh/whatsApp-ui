import { CiCamera } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import React from "react";

function Header() {
  return (
    <div className="w-full h-20 bg-green-600 text-white p-2">
    <nav className="w-full  flex justify-between">
      <h1 className="text-white font-bold ">WhatsApp</h1>
      <div className=" text-white text-2xl flex justify-between">
        <CiCamera className="mr-4" />
        <CiSearch className="mr-4" />
        <HiOutlineDotsVertical className="mr-4" />
      </div>
    </nav>
    <div className="flex px-1 justify-between pt-3">
    <IoIosPeople className="text-2xl"/>
    <h1>chats</h1>
    <h1>update</h1>
    <h1>calls</h1>
  </div>
  </div>
  );
}

export default Header;
