import React from "react";

const Button = ({ className, children, onClick }) => {
  return (
    <button
      className={`bg-[#FF3D71] w-full h-[50px] rounded-md mt-10 flex items-center justify-center gap-x-3 shadow-red-500 ${className} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
