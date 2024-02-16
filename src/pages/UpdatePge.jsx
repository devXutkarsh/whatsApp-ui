import { IoAddSharp } from "react-icons/io5";
import React from "react";
import Header from "../componnets/Header";
const data=[
  {
    url: "https://images.unsplash.com/photo-1606386666595-d135abc1e3b2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"virat",
    time: "2 hour",
  },
  {
    name:"soni" ,
    url: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    time: "1 hour",
  },
  {
    name: " rock" ,
    url: "https://plus.unsplash.com/premium_photo-1669688174106-05f7334f1e64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    time: "4 hour",
  },
]
function UpdatePge() {
  
  return (
    <>
    <Header/>
    <div className="p-3">
      <h1 className="text-2xl">Status</h1>
      <div className="capitalize flex items-center gap-5 mt-5">
       <img src="https://images.pexels.com/photos/20086516/pexels-photo-20086516/free-photo-of-man.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="w-16 h-16 object-cover object-top rounded-full"/>
        <div>
          <h1>my status</h1>
          <p>tap to add status update</p>
        </div>
      </div>
      <p className="capitalize mt-5 text-gray-400 ">recent updates</p>

      <div className="capitalize flex flex-col gap-5 mt-5">
        {data.map(profile=>(
          <div className="flex items-center gap-5">
          <img src={profile.url} className="w-16 h-16 rounded-full p-[1px] border-[3px] border-green-600 object-cover object-top" />
          <div key={profile.time}>
          <h1>{profile.name}</h1>
          <p>{profile.time}</p>
          </div>
        </div>
        ))}
      </div>
      <div className="border-t-[1px] border-gray-700 mt-32 w-full">
<div className="flex justify-between w-full px-2 py-2 items-center">
  <h1 className="font-bold text-xl">Channels</h1>
  <IoAddSharp  className=" font-bold text-2xl"/>
</div>
<div>
<p className="w-full">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam illum voluptate labore accusamus pariatur est!</p>
<button className="py-2 px-5 mt-3 bg-green-600 text-white font-bold rounded-3xl">Explore More</button>
</div>
      </div>
    </div>
    </>
  );
}

export default UpdatePge;