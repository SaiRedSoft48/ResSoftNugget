import React from "react";

interface ButtonProps {
  size?: string;
  pd?: string;
}
const Button: React.FC<ButtonProps> = ({ size, pd }) => {
  return (
    <>
      
      <button
        type="button"
        className={`cursor-pointer text-white bg-[#6B46C1] font-medium rounded-full ${size} ${pd} relative `}
      >
        Get in touch
      </button>
    </>
  );
};

export default Button;
