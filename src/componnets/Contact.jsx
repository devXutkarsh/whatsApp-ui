import React from "react";

function Contact(props) {
  return (
    <div className="w-full h-10 mx-5 my-8 flex  items-center">
      <div className="w-16 h-16 border-2 border-green-500 rounded-full overflow-hidden object-cover ">
        <img src= {props.url} alt="" />
      </div>

      <div className="flex items-center justify-between ">
        <div className=" pl-10">
          <h1 className="capitalize">{props.name}</h1>
          <p className="text-gray-600">{props.disc}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
