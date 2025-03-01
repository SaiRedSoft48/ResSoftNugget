import React from 'react'
import compliance from "../assets/impact/compliance.png"
import queries from "../assets/impact/queries.png"
import resolution from "../assets/impact/resolution.png"
import ImpactCard from '../components/ImpactCard'

interface Impact {
    id: string,
    image: string,
    headline: string,
    description: string
}

const ImpactData: Impact[] = [{
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
const Impact: React.FC = () => {
    return (
        <div className='bg-black py-6'>
            <div className='flex flex-col gap-2 items-center'>
                <h1 className="text-white text-2xl md:text-[48px] md:leading-[60px] font-semibold">
                    Maximize Efficiency
                </h1>
                <p className="text-[#A3A3A3] text-md md:text-lg my-2">
                    Optimize workflows, drive faster issue resolutions, and achieve measurable cost reductions
                </p>
                <div className='flex flex-col md:flex-row justify-between items-center md:w-[85%] mt-2'>
                    {ImpactData.map((card) => <ImpactCard key={card.id} card={card} />)}
                </div>
            </div>
        </div>
    )
}

export default Impact