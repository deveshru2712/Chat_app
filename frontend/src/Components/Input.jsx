import React from "react";

const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="flex justify-between items-center gap-2 bg-white rounded-lg px-2 py-2">
      <Icon />
      <input {...props} />
    </div>
  );
};

export default Input;
