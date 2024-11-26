import React, { useState } from "react";
import { Search } from "lucide-react";
import Data from "../Data";
import MessageList from "../Components/MessageList";
import Message from "../Components/Message";
import Typing from "../Components/Typing";
import Display from "../Components/Display";

const Home = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-screen h-screen overflow-hidden p-4">
      <div className="w-full h-full flex justify-between items-center gap-4">
        <div className="w-1/3 h-full border border-[#EFEFF1] rounded-2xl p-4 bg-white shadow-xl">
          <div className="flex flex-col justify-center items-start p-3 gap-4">
            {/* user info*/}

            <div className="flex justify-center items-center gap-4">
              <div>
                <img
                  src="https://avatar.iran.liara.run/public"
                  alt="user-profile-image"
                  className="w-14 h-14 cursor-pointer"
                />
              </div>
              <div className="flex flex-col justify-center items-start">
                <span className="text-xl font-semibold text-slate-800">
                  User Name
                </span>
                <span className="text-sm text-slate-600 font-semibold">
                  Account Info
                </span>
              </div>
            </div>

            {/*user search ke liye*/}

            <div className="w-full bg-slate-200  boder border-white-2 rounded-lg px-4 py-3 ">
              <form
                className="flex justify-between items-center"
                onSubmit={(e) => handleSubmit}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="font-semibold bg-slate-200  focus:outline-none overflow-hidden"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                />
                <button type="submit" className="text-slate-800">
                  <Search />
                </button>
              </form>
            </div>
          </div>
          <div className="w-full p-3">
            <ul className="flex flex-col justify-between items-start">
              {Data && Data.length > 0 ? (
                Data.map((item) => (
                  <MessageList
                    key={item.id}
                    lastMessage={item.lastMessage}
                    userName={item.userName}
                    time={item.time}
                  />
                ))
              ) : (
                <div className="flex justify-center items-center text-xl text-slate-800 font-semibold p-3">
                  Say Hello to friend...
                </div>
              )}
            </ul>
          </div>
        </div>

        <div className="w-2/3 h-full border flex flex-col justify-between items-center border-[#EFEFF1] rounded-2xl p-4 bg-white shadow-xl">
          <div className="w-full">
            <Message />
          </div>
          <div className="w-full flex-grow overflow-auto">
            <Display />
          </div>
          <div className="w-full">
            <Typing />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
