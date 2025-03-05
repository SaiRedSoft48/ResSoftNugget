import React from "react";

import AgentCopilot from "../../components/features/AgentCopilot";
import AIAnalytics from "../../components/features/AIAnalytics";
import FeatureHeader from "../../components/features/FeatureHeader";
import FluidIntegrations from "../../components/features/FluidIntegrations";
import ImageClassification from "../../components/features/ImageClassification";
import IntelligentConversations from "../../components/features/IntelligentConversations";
import QualityAudits from "../../components/features/QualityAudits";
import VoiceAgents from "../../components/features/VoiceAgents";

const Features: React.FC = () => {
  return (
    <div className="bg-black min-h-[100vh] pt-10 md:pt-4">
      <FeatureHeader />
      <div className="md:h-[240vh] flex flex-row justify-center items-start w-[100%] pt-8">
        <div className="md:h-[230vh] flex flex-col justify-center items-center w-[90%]">
          <div className="h-[60%] w-[100%] flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="h-[100%] w-[100%] md:w-[66.6%] flex flex-col justify-center items-center">
              <div className="h-[50%] w-[100%] flex flex-col md:flex-row justify-center items-start">
                <ImageClassification />
                <QualityAudits />
              </div>
              <div className="h-[50%] w-[100%] flex flex-col md:flex-row  justify-center items-start">
                <VoiceAgents />
                <AIAnalytics />
              </div>
            </div>
            <div className="h-[110vh] md:h-[99.9%] md:w-[33.3%]">
              <IntelligentConversations />
            </div>
          </div>
          <div className="h-[41.5%] border-yellow-500 flex flex-col md:flex-row justify-center items-center w-[100%]">
            <AgentCopilot />
            <FluidIntegrations />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
