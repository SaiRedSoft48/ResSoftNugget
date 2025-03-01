import React from 'react'
import code from "../assets/features/head/code.png"
import analytics from "../assets/features/head/analytics.png"
import effective from "../assets/features/head/effective.png"
import one_img from "../assets/features/content/one.png"
import two_img from "../assets/features/content/two.png"
import agent_one from "../assets/features/voice_agents/latency.png"
import agent_two from "../assets/features/voice_agents/language.png"
import agent_three from "../assets/features/voice_agents/function.png"
import coverage from "../assets/features/audits/coverage.png"
import opinion from "../assets/features/audits/opinion.png"
import correct from "../assets/features/audits/correct.png"
import wrong from "../assets/features/audits/wrong.png"
import search from "../assets/features/audits/search.png"
import chat from "../assets/features/agents/comments.png"
import suggestions from "../assets/features/agents/suggestion.png"
import time from "../assets/features/agents/time.png"
import actions from "../assets/features/agents/actions.png"
import fluid from "../assets/features/fluid.png"

const HeadData = [{ id: "1", image: code, text: "No-Code" }, { id: "2", image: effective, text: "Cost-Effective" }, { id: "3", image: analytics, text: "Powerful Analytics" }]
const AIAgents = [{ id: "1", image: agent_one, text: "Low latency audio streaming" }, { id: "2", image: agent_two, text: "Multilingual support" }, { id: "3", image: agent_three, text: "Function calling" }]
const Audits = [{
    id: "1", image: correct, text: "Greeting & Introduction"
}, {
    id: "2", image: wrong, text: "Customer Sentiment"
}, {
    id: "3", image: correct, text: "Action"
}, {
    id: "4", image: correct, text: "Closure"
}]
const Agents = [{
    id: "1", image: chat,
    headline: "Chat Summarization",
    description: "Summarizes conversations to keep agents focused"
}, {
    id: "2", image: suggestions,
    headline: "Smart Suggestions",
    description: "Accurate and policy driven response suggestions"
}, {
    id: "3", image: actions,
    headline: "Contextual Actions",
    description: "Recommends optimal actions for quicker resolution"
}, {
    id: "3", image: time,
    headline: "Real-Time Assistance",
    description: "Smartly engages with data sources to provide updated information"
},]
const Features: React.FC = () => {
    return (
        <div className='bg-black min-h-[100vh] pt-4'>
            <div className='text-center'>
                <h1 className='text-white text-2xl md:text-[48px] md:leading-[60px] font-semibold'>The only AI toolbox you'll ever need </h1>
                <p className='text-[#A3A3A3] text-md md:text-lg max-w-2xl mx-auto mt-2'>
                    From conversational AI agents to co-pilots, unlock endless possibilities to transform your business                </p>
                <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-4 py-4'>
                    {HeadData.map((each) =>
                        <div key={each.id} className='bg-[#292524] h-[40px] w-[220px] rounded-full p-2 flex flex-row justify-center items-center gap-2'>
                            <img className='w-[28px] h-[22px]' src={each.image} alt={each.text} />
                            <h1 className='text-white'>{each.text}</h1>
                        </div>)
                    }
                </div>
            </div>
            <div className='md:h-[240vh] flex flex-row justify-center items-start w-[100%] pt-8'>
                <div className='md:h-[230vh] flex flex-col justify-center items-center w-[90%]'>
                    <div className='md:h-[60%] w-[100%] flex flex-col-reverse md:flex-row justify-center items-center'>
                        <div className='md:h-[100%] md:w-[33.3%] sm:-order-4 md:order-none'>
                            <div className='h-[60vh] md:h-[50%] flex flex-col justify-start items-start gap-2 pl-3 md:border-r border-b border-[#262626]'>
                                <h1 className='text-white text-2xl'> Accurate Image Classification </h1>
                                <p className='text-base text-[#A3A3A3] pr-2'>Enhance support by precisely categorizing images for faster resolutions </p>
                                <div className='h-[68%] w-[90%] bg-[#171717] opacity-[0.8] rounded-2xl p-4 border-[#262626] border'>
                                    <div className='rounded-2xl h-[100%] w-[100%] bg-cover bg-center' style={{ backgroundImage: `url(${one_img})` }}>
                                    </div>
                                </div>
                            </div>
                            <div className='md:hidden sm:block h-[70vh] md:h-[50%] flex flex-col justify-start items-start gap-2 pl-4 md:border-r border-b border-[#262626]'>
                                <h1 className='text-white text-2xl'> Automated Quality Audits </h1>
                                <p className='text-base text-[#A3A3A3] pr-4'>Ensure complete oversight by automating quality checks across all interactions</p>
                                <div className='h-[58%] w-[90%] bg-[#171717] border-[#262626] border opacity-[0.8] rounded-2xl p-4 flex flex-col justify-around items-center'>
                                    <div className='flex flex-row justify-start items-center self-start gap-2'>
                                        <img className='w-[25px] h-[25px]' src={coverage} alt='coverage' />
                                        <p className='text-[#F6F6F6]'>SOP coverage </p>
                                    </div>
                                    {Audits.map((each, index) => {
                                        return (
                                            <div key={index} className='bg-[#292524]  w-[100%] h-[35px] rounded-full flex flex-row justify-start items-center gap-3 pl-4'>
                                                <img className='w-[25px] h-[25px]' src={each.image} alt='agents' />
                                                <p className='text-[#F6F6F6] text-base'> {each.text}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='bg-[#171717] w-[90%] h-[15%] rounded-2xl  border-[#262626] border p-2 gap-3 flex flex-row justify-center items-center'>
                                    <img src={opinion} alt='opinion' className='h-[35px] w-[40px]' />
                                    <p className='text-white text-[15px]'> As a loyal customer, I find this experience very <span className='bg-[#6B46C1]'>&nbsp;disappointing&nbsp;</span></p>
                                </div>
                            </div>
                            <div className='hidden md:block md:h-[50%] flex flex-col justify-start items-start gap-2 pl-3 border-r border-b border-[#262626] pt-4'>
                                <h1 className='text-white text-2xl md:my-2'> Voice AI Agents </h1>
                                <p className='text-base text-[#A3A3A3] pr-8 md:my-2'>Build and deploy low cost voice AI agents that talk and take actions like humans </p>
                                <div className='md:my-4 h-[58%] w-[90%] bg-[#171717] border-[#262626] border opacity-[0.8] rounded-2xl p-4 flex flex-col justify-around items-center'>
                                    {AIAgents.map((each, index) => {
                                        return (
                                            <div key={index} className='bg-[#292524]  w-[100%] h-[50px] rounded-full flex flex-row justify-start items-center gap-3 pl-4'>
                                                <img className='w-[30px] h-[30px]' src={each.image} alt='agents' />
                                                <p className='text-[#F6F6F6] text-base'> {each.text}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='md:hidden sm:block h-[54vh] md:h-[50%] flex flex-col justify-start items-start gap-2 pl-3 md:border-r border-b border-[#262626] pt-4'>
                                <h1 className='text-white text-2xl'> Voice AI Agents </h1>
                                <p className='text-base text-[#A3A3A3] pr-8'>Build and deploy low cost voice AI agents that talk and take actions like humans </p>
                                <div className='h-[58%] w-[90%] bg-[#171717] border-[#262626] border opacity-[0.8] rounded-2xl p-4 flex flex-col justify-around items-center'>
                                    {AIAgents.map((each, index) => {
                                        return (
                                            <div key={index} className='bg-[#292524]  w-[100%] h-[50px] rounded-full flex flex-row justify-start items-center gap-3 pl-4'>
                                                <img className='w-[30px] h-[30px]' src={each.image} alt='agents' />
                                                <p className='text-[#F6F6F6] text-base'> {each.text}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>



                        <div className='hidden md:block md:h-[100%] md:w-[33.3%] sm:-order-2 md:order-none'>
                            <div className='h-[50%] flex flex-col justify-start items-start gap-2 pl-4 border-r border-b border-[#262626]'>
                                <h1 className='text-white text-2xl'> Automated Quality Audits </h1>
                                <p className='text-base text-[#A3A3A3] pr-4'>Ensure complete oversight by automating quality checks across all interactions</p>
                                <div className='h-[58%] w-[90%] bg-[#171717] border-[#262626] border opacity-[0.8] rounded-2xl p-4 flex flex-col justify-around items-center'>
                                    <div className='flex flex-row justify-start items-center self-start gap-2'>
                                        <img className='w-[25px] h-[25px]' src={coverage} alt='coverage' />
                                        <p className='text-[#F6F6F6]'>SOP coverage </p>
                                    </div>
                                    {Audits.map((each, index) => {
                                        return (
                                            <div key={index} className='bg-[#292524]  w-[100%] h-[35px] rounded-full flex flex-row justify-start items-center gap-3 pl-4'>
                                                <img className='w-[25px] h-[25px]' src={each.image} alt='agents' />
                                                <p className='text-[#F6F6F6] text-base'> {each.text}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='bg-[#171717] w-[90%] h-[15%] rounded-2xl  border-[#262626] border p-2 gap-3 flex flex-row justify-center items-center'>
                                    <img src={opinion} alt='opinion' className='h-[35px] w-[40px]' />
                                    <p className='text-white text-[15px]'> As a loyal customer, I find this experience very <span className='bg-[#6B46C1]'>&nbsp;disappointing&nbsp;</span></p>
                                </div>
                            </div>
                          
                            <div className='hidden md:block h-[35vh] md:h-[50%] flex flex-col justify-start items-start gap-4 pl-3 md:border-r border-b border-[#262626] pt-4'>
                                <h1 className='text-white text-2xl md:my-2'> AI Powered Analytic </h1>
                                <p className='text-base text-[#A3A3A3] md:my-2'>Identify issues, ask questions and unlock valuable insights from your interaction </p>
                                <div className='flex flex-row justify-start pl-3 items-center gap-2 pt-4 md:my-2'>
                                    <img className='h-[20px] w-[20px]' src={search} alt='search' />
                                    <p className='text-[#A3A3A3] '> Type your question </p>
                                </div>
                                <div className='h-[14%] w-[90%] bg-[transparent] border border-[#262626] rounded-2xl p-4'>
                                </div>
                            </div>
                          
                        </div>
                        
                        <div className='h-[100vh] md:h-[100%] md:w-[33.3%] sm:-order-1 md:order-none'>
                            <div className=' h-[100%] flex flex-col justify-start items-start gap-4 border-b border-[#262626]'>
                                <h1 className='text-white text-2xl pl-3'> Intelligent Conversations. Effortless Support </h1>
                                <p className='text-base text-[#A3A3A3] pl-3'>Seamlessly integrate data sources and SOPs to generate accurate responses and actions </p>
                                <div className='h-[100%] w-[94%] bg-[#171717] opacity-[0.8] rounded-t-2xl px-4 pt-4 self-center'>
                                    <div className='rounded-t-2xl h-[100%] w-[100%] bg-cover bg-center' style={{ backgroundImage: `url(${two_img})` }}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='h-[41.5%] border-yellow-500 flex flex-col md:flex-row justify-center items-center w-[100%]'>
                        <div className='h-[100%] md:w-[50%] md:border-r border-[#262626] p-4 flex flex-col justify-start items-start gap-3'>
                            <h1 className='text-white text-2xl'> Agent Co-pilot </h1>
                            <p className='text-base text-[#A3A3A3] pr-4'>Assist your team with real-time personalized customer insights and actions </p>
                            <div className='flex flex-col justify-between items-center w-[100%] py-2 gap-4 md:gap-0'>
                                {Agents.map((each, index) => {
                                    return (
                                        <div key={index} className='w-[100%] h-[20vh] md:h-[22%] bg-[#171717] border border-[#262626] rounded-2xl p-4 flex flex-col justify-center items-start gap-1'>
                                            <img className='w-[25px]' src={each.image} alt='time' />
                                            <h1 className='text-white text-xl '> {each.headline} </h1>
                                            <p className='text-base text-[#A3A3A3] pr-4'> {each.description} </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className=' h-[100%] md:w-[50%] p-4 flex flex-col justify-start items-start gap-3'>
                            <h1 className='text-white text-2xl'> Fluid Integrations </h1>
                            <p className='text-base text-[#A3A3A3] pr-4'>Integrate seamlessly with tools like Freshdesk, Zoho, and more </p>
                            <div className=' items-center w-[100%] py-2'>
                                <img src={fluid} alt='fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features