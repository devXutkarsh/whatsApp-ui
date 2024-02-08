import React from "react";
const data=[
  {
    url: "https://media.istockphoto.com/id/1249727310/photo/portrait-of-a-cheering-little-boy.webp?b=1&s=170667a&w=0&k=20&c=7qzh2hwgmVW2yPz3tFVrsh8CW95eE8IcKoX6eCHD8yQ=",
    name: "utkarsh",
    time: "1 hour",
  },
  {
    url: "https://media.istockphoto.com/id/1249727310/photo/portrait-of-a-cheering-little-boy.webp?b=1&s=170667a&w=0&k=20&c=7qzh2hwgmVW2yPz3tFVrsh8CW95eE8IcKoX6eCHD8yQ=",
    name: "Priyanshu",
    time: "1 hour",
  },
  {
    url: "https://media.istockphoto.com/id/1249727310/photo/portrait-of-a-cheering-little-boy.webp?b=1&s=170667a&w=0&k=20&c=7qzh2hwgmVW2yPz3tFVrsh8CW95eE8IcKoX6eCHD8yQ=",
    name: "Prateek",
    time: "1 hour",
  },
]
function UpdatePge() {
  
  return (
    <div className="p-3">
      <h1 className="text-2xl">Status</h1>
      <div className="capitalize flex items-center gap-5 mt-5">
        <p className="p-5 rounded-full bg-blue-600 w-4 h-4"></p>
        <div>
          <h1>my status</h1>
          <p>tap to add status update</p>
        </div>
      </div>
      <p className="capitalize mt-5 text-gray-400 ">recent updates</p>

      <div className="capitalize flex flex-col gap-5 mt-5">
        {data.map(profile=>(
          <div className="flex items-center gap-5">
          <img src={profile.url} className="w-16 h-16 rounded-full p-[1px] border-[3px] border-green-600" />
          <div key={profile.time}>
          <h1>{profile.name}</h1>
          <p>{profile.time}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default UpdatePge;
