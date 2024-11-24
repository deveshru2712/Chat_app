import { CheckCheck } from "lucide-react";
import React from "react";

const MessageList = ({ userName, time, lastMessage }) => {
  return (
    <div className="w-full p-3 flex justify-between items-center">
      <div className="flex justify-between items-center gap-2 p-2">
        <img
          src="https://avatar.iran.liara.run/public"
          alt="user-profile-image"
          className="w-12 h-12 cursor-pointer"
        />
        <div className="flex flex-col justify-center items-start ">
          <h1 className="text-xl font-semibold">{userName}</h1>
          <span className="text-sm font-semibold">{lastMessage}</span>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end p-2">
        <span className="text-sm font-semibold">{time}</span>
        <span className="text-[#07a2ad]">
          <CheckCheck />
        </span>
      </div>
    </div>
  );
};

export default MessageList;
