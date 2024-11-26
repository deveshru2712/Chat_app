import React, { Suspense, lazy, useEffect, useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import { io } from "socket.io-client";

const Signup = lazy(() => import("./Pages/Signup"));
const Login = lazy(() => import("./Pages/Login"));
const PageNotFound = lazy(() => import("./Components/PageNotFound"));
const Home = lazy(() => import("./Pages/Home"));

// bg-[url('src/assets/background.jpg')]

const App = () => {
  const socket = useMemo(() => io("http://localhost:3000"), []);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("you are connected");
    });

    socket.on("welcome", (message) => {
      console.log(message);
    });

    return () => {
      socket.disconnect();
    };
  });

  return (
    <div className="w-screen h-screen  bg-cover bg-center">
      <Suspense
        fallback={
          <div className="w-full h-full flex justify-center items-center text-4xl font-semibold">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
