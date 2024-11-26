import React, { useState } from "react";
import { Send } from "lucide-react";

const Typing = () => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full h-fit p-6 border-2 border-[#F4F4F2] rounded-lg">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex justify-center items-center gap-3"
      >
        <input
          type="text"
          className="w-full bg-slate-200 px-4 py-2 rounded-lg focus:outline-none text-slate-800"
          onChange={(e) => setInput(e.target.value)}
          placeholder="write a message..."
        />
        <button
          type="submit"
          className="text-white bg-[#79b1f6] w-10 h-10 flex justify-center items-center rounded-full cursor-pointer active:scale-110 duration-150"
        >
          <Send />
        </button>
      </form>
    </div>
  );
};

export default Typing;
