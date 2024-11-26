import { useState } from "react";
import newData from "../NewData";

const Display = () => {
  return (
    <div className="flex-grow w-full overflow-auto">
      <div
        className="bg-cover bg-center h-full w-full"
        style={{ backgroundImage: "url('src/assets/background.jpg')" }}
      >
        {newData && newData.length > 0 ? (
          newData.map((item) => (
            <div className="chat chat-end" key={item.id}>
              <div className="chat-bubble chat-bubble-info">{item.message}</div>
            </div>
          ))
        ) : (
          <span>hii there</span>
        )}
      </div>
    </div>
  );
};

export default Display;
