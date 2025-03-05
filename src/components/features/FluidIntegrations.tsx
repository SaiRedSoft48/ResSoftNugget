import React from "react";

import { imageImports } from "../../utils/importImages";
const FluidIntegrations: React.FC = () => {
  const { fluid_img } = imageImports;
  return (
    <div className=" h-[100%] md:w-[50%] p-4 flex flex-col justify-center items-center md:justify-start md:items-start gap-3">
      <h1 className="text-white text-[20px] md:text-[24px]">
        {" "}
        Fluid Integrations{" "}
      </h1>
      <p className="text-[14px] md:text-[14px] text-center md:text-left text-[#A3A3A3] pr-4">
        Integrate seamlessly with tools like Freshdesk, Zoho, and more{" "}
      </p>
      <div className=" items-center w-[100%] py-2">
        <img src={fluid_img} alt="fluid" />
      </div>
    </div>
  );
};

export default FluidIntegrations;
