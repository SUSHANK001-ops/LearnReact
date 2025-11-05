import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-16 py-6">
      <h4 className="bg-black uppercase text-white px-5 py-2 rounded-full">
        Target Audience
      </h4>
      <button className="bg-gray-200 px-6 py-2 text-sm uppercase rounded-full tracking-wider">Digital Banking Platform</button>
    </div>
  );
};

export default Navbar;
