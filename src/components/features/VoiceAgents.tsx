import React from "react";

import { AIAgents } from "../../constants/constant";

const VoiceAgents: React.FC = () => {
  return (
    <div className="h-[100%] md:w-[50%] flex flex-col md:justify-start md:items-start justify-center items-center gap-2 pl-2 md:border-r border-b border-[#262626] pt-4 py-4 md:py-0">
      <h1 className="text-white text-[20px] md:text-[24px]  md:my-2">
        {" "}
        Voice AI Agents{" "}
      </h1>
      <p className="text-[14px] md:text-[16px] text-[#A3A3A3] pr-8 md:my-2 md:text-left text-center">
        Build and deploy low cost voice AI agents that talk and take actions
        like humans{" "}
      </p>
      <div className="md:my-4 h-[30vh] md:h-[58%] w-[90%] bg-[#171717] border-[#262626] border opacity-[0.8] rounded-2xl p-4 flex flex-col justify-around items-center">
        {AIAgents.map((each, index) => {
          return (
            <div
              key={index}
              className="bg-[#292524]  w-[100%] h-[50px] rounded-full flex flex-row justify-start items-center gap-3 pl-4"
            >
              <img
                className="w-[30px] h-[30px]"
                src={each.image}
                alt="agents"
              />
              <p className="text-[#F6F6F6] text-base"> {each.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VoiceAgents;
