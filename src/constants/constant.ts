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
    actions
} = imageImports;

export const HeadData = [
    { id: "1", image: code, text: "No-Code" },
    { id: "2", image: effective, text: "Cost-Effective" },
    { id: "3", image: analytics, text: "Powerful Analytics" }
];

export const AIAgents = [
    { id: "1", image: agent_one, text: "Low latency audio streaming" },
    { id: "2", image: agent_two, text: "Multilingual support" },
    { id: "3", image: agent_three, text: "Function calling" }
];

export const Audits = [
    { id: "1", image: correct, text: "Greeting & Introduction" },
    { id: "2", image: wrong, text: "Customer Sentiment" },
    { id: "3", image: correct, text: "Action" },
    { id: "4", image: correct, text: "Closure" }
];

export const Agents = [
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