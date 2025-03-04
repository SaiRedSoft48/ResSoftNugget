import { imageImports } from '../utils/importImages';
const {
    code,
    analytics,
    effective,
    agent_one,
    agent_two,
    agent_three,
    correct,
    wrong,
    chat,
    suggestions,
    time,
    actions,
    compliance,
    queries,
    resolution
} = imageImports;

interface Data {
    id: string,
    image: string,
    text: string
}


interface HeadlineData {
    id: string,
    image: string,
    headline: string,
    description: string
}

export interface ImpactProps {
    card: {
        id: string;
        image: string;
        headline: string;
        description: string;
    };
}


export const HeadData: Data[] = [
    { id: "1", image: code, text: "No-Code" },
    { id: "2", image: effective, text: "Cost-Effective" },
    { id: "3", image: analytics, text: "Powerful Analytics" }
];

export const AIAgents: Data[] = [
    { id: "1", image: agent_one, text: "Low latency audio streaming" },
    { id: "2", image: agent_two, text: "Multilingual support" },
    { id: "3", image: agent_three, text: "Function calling" }
];

export const Audits: Data[] = [
    { id: "1", image: correct, text: "Greeting & Introduction" },
    { id: "2", image: wrong, text: "Customer Sentiment" },
    { id: "3", image: correct, text: "Action" },
    { id: "4", image: correct, text: "Closure" }
];

export const Agents: HeadlineData[] = [
    {
        id: "1",
        image: chat,
        headline: "Chat Summarization",
        description: "Summarizes conversations to keep agents focused"
    },
    {
        id: "2",
        image: suggestions,
        headline: "Smart Suggestions",
        description: "Accurate and policy driven response suggestions"
    },
    {
        id: "3",
        image: actions,
        headline: "Contextual Actions",
        description: "Recommends optimal actions for quicker resolution"
    },
    {
        id: "4",
        image: time,
        headline: "Real-Time Assistance",
        description: "Smartly engages with data sources to provide updated information"
    }
];

export const ImpactData: HeadlineData[] = [{
    id: "1",
    image: queries,
    headline: "80% Queries resolved by AI agents",
    description: "Increase bot resolution rates, minimizing customer frustration and repeat interactions"
}, {
    id: "2",
    image: compliance,
    headline: "25% Increase in compliance",
    description: "Improve compliance with agent co-pilot, ensuring agents follow best practices"
}, {
    id: "3",
    image: resolution,
    headline: "20% Reduction in resolution time",
    description: "Enhance team efficiency allowing for greater focus on high-value or complex queries"
},]