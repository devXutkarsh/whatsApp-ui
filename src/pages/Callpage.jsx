import { IoMdLink } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { BsTelephonePlusFill } from "react-icons/bs";
import React from "react";
import Header from "../componnets/Header";

function CallPage() {
  return (
    <>
    <Header />
      <div className="flex items-center w-full py-10 px-7  ">
        <div className="w-15 h-15 p-3 bg-green-700 rounded-full flex items-center justify-center">
          <IoMdLink className="  text-white text-2xl" />
        </div>
        <div className="pl-7">
          <h2 className="font-medium text-[23px] ">Create call link</h2>
          <p className="text-gray-600 capitalize">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className=" ">
        <div className=" flex items-center justify-center pl-7 my-2">
          <img
            src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXxlbnwwfHwwfHx8MA%3D%3D"
            className=" p-[2px] rounded-full  w-16 h-16 border-[2px] border-green-600 object-cover"
          />
          <div className="w-full py-2 flex justify-between items-center  ">
            <div className="pl-5">
              <h1>Elon musk</h1>
              <p>11:45 AM</p>
            </div>
            <div className="pl-16 text-green-600 text-[23px]">
              <IoIosVideocam />
            </div>
            <div></div>
          </div>
        </div>
        <div className=" flex items-center justify-center pl-7 my-2">
        <img
            src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXxlbnwwfHwwfHx8MA%3D%3D"
            className=" p-[2px] rounded-full  w-16 h-16 border-[2px] border-green-600 object-cover"
          />
          <div className="w-full py-2 flex justify-between items-center  ">
            <div className="pl-5">
              <h1>Elon musk</h1>
              <p>11:45 AM</p>
            </div>
            <div className="pl-16 text-green-600 text-[23px]">
              <FaPhoneAlt />
            </div>
            <div></div>
          </div>
        </div>
        <div className=" flex items-center justify-center pl-7 my-2">
        <img
            src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXxlbnwwfHwwfHx8MA%3D%3D"
            className=" p-[2px] rounded-full  w-16 h-16 border-[2px] border-green-600 object-cover"
          />
          <div className="w-full py-2 flex justify-between items-center  ">
            <div className="pl-5">
              <h1>Elon musk</h1>
              <p>11:45 AM</p>
            </div>
            <div className="pl-16 text-green-600 text-[23px]">
              <FaPhoneAlt />
            </div>
            <div></div>
          </div>
        </div>
        <div className=" flex items-center justify-center pl-7 my-2">
        <img
            src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXxlbnwwfHwwfHx8MA%3D%3D"
            className=" p-[2px] rounded-full  w-16 h-16 border-[2px] border-green-600 object-cover"
          />
          <div className="w-full py-2 flex justify-between items-center  ">
            <div className="pl-5">
              <h1>Elon musk</h1>
              <p>11:45 AM</p>
            </div>
            <div className="pl-16 text-green-600 text-[23px]">
              <FaPhoneAlt />
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className=" bg-green-600 w-10 h-10 flex items-center justify-center rounded-lg ml-auto mr-10 mt-32">
        <BsTelephonePlusFill className="text-white text-2xl " />
      </div>
    </>
  );
}
export default CallPage;
