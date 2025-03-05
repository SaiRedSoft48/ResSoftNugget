import React from "react";

import { Agents } from "../../constants/constant";
const AgentCopilot: React.FC = () => {
  return (
    <div className="h-[100%] md:w-[50%] md:border-r border-b md:border-b-none lg:border-b-0 border-[#262626] p-4 flex flex-col justify-center md:justify-start items-center md:items-start gap-3">
      <h1 className="text-white text-[20px] md:text-[24px]">
        {" "}
        Agent Co-pilot{" "}
      </h1>
      <p className="text-[14px] md:text-[16px] text-[#A3A3A3] pr-4">
        Assist your team with real-time personalized customer insights and
        actions{" "}
      </p>
      <div className="flex flex-col justify-between items-center w-[100%] py-2 gap-4 md:gap-0">
        {Agents.map((each, index) => {
          return (
            <div
              key={index}
              className="w-[100%] h-[20vh] md:h-[22%] bg-[#171717] border border-[#262626] rounded-2xl p-4 flex flex-col justify-center items-start gap-1"
            >
              <img className="w-[25px]" src={each.image} alt="time" />
              <h1 className="text-white text-xl "> {each.headline} </h1>
              <p className="text-base text-[#A3A3A3] pr-4">
                {" "}
                {each.description}{" "}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgentCopilot;
