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
        className={`focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full ${size} ${pd} dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900`}
      >
        {" "}
        Get in touch{" "}
      </button>
    </>
  );
};

export default Button;
