import React, { useState } from "react";
import Input from "../Components/Input";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4 border-2 rounded-2xl px-8 py-4 backdrop-filter backdrop-blur-sm bg-opacity-10 ">
        <h1 className="text-4xl font-semibold text-white">Welcome Back</h1>
        <form
          className="flex flex-col justify-center items-center gap-8"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Input
            icon={Mail}
            type="email"
            className="focus:outline-none"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            icon={Lock}
            type="password"
            className="focus:outline-none"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="text-xl text-white bg-[#07a2ad] px-3 py-2 rounded-lg active:scale-110 active:opacity-55 duration-150"
          >
            Login
          </button>
        </form>
        <div className="flex justify-center items-center gap-1 text-white">
          <span>Already have an account ?</span>
          <Link
            to={"/signup"}
            className="text-[#07a2ad] font-semibold hover:underline"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;