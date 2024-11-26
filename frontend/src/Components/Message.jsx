import React from "react";
import { Menu, Video, Phone } from "lucide-react";

const Message = () => {
  return (
    <div className="w-full flex justify-center items-center border-2 border-[#F4F4F2] p-2 rounded-lg">
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <img
            src="https://avatar.iran.liara.run/public"
            alt="user-profile-image"
            className="cursor-pointer w-12 h-12"
          />
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-xl font-semibold text-slate-800">Username</h2>
            <h2 className="text-sm font-semibold text-green-400">Typing...</h2>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <button className="w-8 h-8 flex justify-center items-center rounded-2xl cursor-pointer text-slate-800 active:shadow-darker duration-100">
            <Video />
          </button>
          <button className="w-6 h-6 flex justify-center items-center rounded-2xl cursor-pointer text-slate-800 active:shadow-darker duration-100">
            <Phone />
          </button>
          <button className="w-8 h-8 flex justify-center items-center rounded-2xl cursor-pointer text-slate-800 active:shadow-darker duration-100">
            <Menu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
