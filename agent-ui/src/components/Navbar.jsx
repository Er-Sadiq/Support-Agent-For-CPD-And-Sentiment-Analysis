import React from "react";

function Navbar() {
  return (
    <div className="w-full bg-[#202438] py-2 px-10 text-white flex flex-row items-center backdrop-blur-sm bg-white/5 ...">
      <h1 className="text-xl font-black mx-4 my-1 text-a">Support Agent</h1>

      <div className="flex flex-row gap-4 ml-auto mx-4">
        <button className="bg-slate-600 py-1 px-2 rounded-md">Sign In</button>
        <button className="bg-blue-500 py-1 px-2 rounded-md">Get Started </button>
      </div>
    </div>
  );
}

export default Navbar;
