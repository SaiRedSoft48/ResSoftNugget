import React from "react";

import logo from "../../assets/LOGO.png";
const Footer: React.FC = () => {
  return (
    <div className="bg-black h-[20vh] border-t border-t-[#262626] flex flex-col justify-center items-center">
      <div className="flex flex-row justify-between items-center w-[87%]">
        <img
          className="w-[110px] h-[25px] md:w-[160px] md:h-[40px]"
          src={logo}
          alt="logo"
        />
        <p className="text-white"> Contact </p>
      </div>
    </div>
  );
};

export default Footer;
