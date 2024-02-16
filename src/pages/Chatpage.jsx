import { FaArrowLeft } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";
import { IoIosAttach } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";

import React from "react";
import Header from "../componnets/Header";
import { Link } from "react-router-dom";

function Chatpage() {
  return (
    <>
    <div className="w-full h-screen bg-gray-300 flex flex-col">
      <div className="w-full p-1 bg-green-600 flex items-center gap-4">
        <Link to="/"><FaArrowLeft className="text-white text-2xl" /></Link>
        <img
          src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXxlbnwwfHwwfHx8MA%3D%3D"
          className="rounded-full w-16 h-16 object-cover object-center"
        />

        <div className="text-white ">
          <h2 className="text-2xl">Elon musk</h2>
          <p>online </p>
        </div>
        <div className="flex gap-5 text-white text-2xl ml-auto">
          <IoIosVideocam />
          <FaPhoneAlt className="text-xl" />
          <BsThreeDotsVertical />
        </div>
      </div>
      <div className="bg-yellow-300 m-5 p-3 rounded-md flex items-center">
        <p className=" text-center ">
       
        <span><FaLock className="text-xl p"/> </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto totam
          obcaecati dignissimos magni inventore. Laudantium voluptatibus
       
        </p>
      </div>
      <div className="bg-green-200 p-2 w-80 rounded-lg ml-auto mr-3" >
<h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cum.</h3>
      </div>
      <div className="bg-white p-2 w-80 rounded-lg  ml-3 mt-5" >
<h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cum.</h3>
      </div>
      <div className="bg-green-200 p-2 w-80 rounded-lg mt-5 ml-auto mr-3" >
<h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cum.</h3>
      </div>
      <div className="bg-white p-2 w-80 rounded-lg  ml-3 mt-5" >
<h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cum.</h3>
      </div>
      <div className="w-100 flex items-center bg-white rounded-3xl pl-2 pr-2 mt-24">
      <CiFaceSmile className="text-2xl"/>
        <input type="text" placeholder="type a message" className="p-2  rounded-3xl border-none outline-none" />
        <IoIosAttach  className="ml-auto mr-2 text-2xl"/>
        <FaCamera className="mr-2 bg-gray-00" />
        
        <FaMicrophone className=" text-2xl"/>
      </div>
      
    </div>
    </>
  );
}

export default Chatpage;
