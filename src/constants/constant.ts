import { imageImports } from "../utils/importImages";
const {
  code_img,
  analytics_img,
  effective_img,
  agent_one_img,
  agent_two_img,
  agent_three_img,
  correct_img,
  wrong_img,
  chat_img,
  suggestions_img,
  time_img,
  actions_img,
  compliance_img,
  queries_img,
  resolution_img,
} = imageImports;

interface Data {
  id: string;
  image: string;
  text: string;
}

interface HeadlineData {
  id: string;
  image: string;
  headline: string;
  description: string;
}

export interface ImpactProps {
  card: {
    id: string;
    image: string;
    headline: string;
    description: string;
  };
}

export const FeatureHeadData: Data[] = [
  { id: "1", image: code_img, text: "No-Code" },
  { id: "2", image: effective_img, text: "Cost-Effective" },
  { id: "3", image: analytics_img, text: "Powerful Analytics" },
];

export const AIAgents: Data[] = [
  { id: "1", image: agent_one_img, text: "Low latency audio streaming" },
  { id: "2", image: agent_two_img, text: "Multilingual support" },
  { id: "3", image: agent_three_img, text: "Function calling" },
];

export const Audits: Data[] = [
  { id: "1", image: correct_img, text: "Greeting & Introduction" },
  { id: "2", image: wrong_img, text: "Customer Sentiment" },
  { id: "3", image: correct_img, text: "Action" },
  { id: "4", image: correct_img, text: "Closure" },
];

export const Agents: HeadlineData[] = [
  {
    id: "1",
    image: chat_img,
    headline: "Chat Summarization",
    description: "Summarizes conversations to keep agents focused",
  },
  {
    id: "2",
    image: suggestions_img,
    headline: "Smart Suggestions",
    description: "Accurate and policy driven response suggestions",
  },
  {
    id: "3",
    image: actions_img,
    headline: "Contextual Actions",
    description: "Recommends optimal actions for quicker resolution",
  },
  {
    id: "4",
    image: time_img,
    headline: "Real-Time Assistance",
    description:
      "Smartly engages with data sources to provide updated information",
  },
];

export const ImpactData: HeadlineData[] = [
  {
    id: "1",
    image: queries_img,
    headline: "80% Queries resolved by AI agents",
    description:
      "Increase bot resolution rates, minimizing customer frustration and repeat interactions",
  },
  {
    id: "2",
    image: compliance_img,
    headline: "25% Increase in compliance",
    description:
      "Improve compliance with agent co-pilot, ensuring agents follow best practices",
  },
  {
    id: "3",
    image: resolution_img,
    headline: "20% Reduction in resolution time",
    description:
      "Enhance team efficiency allowing for greater focus on high-value or complex queries",
  },
];
