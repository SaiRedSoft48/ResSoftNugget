import React from 'react'
import Button from './Button'
import MarqueeScroll from './MarqueeScroll'

const Hero: React.FC = () => {
    return (
        <div className='bg-black h-[180vh]'>
            <div className='h-[110vh] flex flex-row justify-center items-center'>
                <div className='flex flex-col justify-center items-center gap-8 w-[90%]'>
                    <h1 className="text-white text-xl md:text-7xl text-center ">
                        AI Agents, build for speed, scale, and quality
                    </h1>

                    <p className="text-[#A3A3A3] text-md md:text-xl text-center md:px-4">
                        Handling complex queries, boosting efficiency, and streamlining support, so your business scales faster with precision.
                    </p>
                    <Button size="text-md" pd="px-3 py-2" />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-white text-center md:text-[48px] md:leading-[60px]'> Trusted by the Zomato ecosystem</h1>
                <p className='text-[#A3A3A3] font-normal md:text-[16px] md:leading-[24px] text-center'> We efficiently manage over 15 million monthly interactions across Zomato, at 99.99% uptime </p>
                <>
                    <MarqueeScroll />
                </>
            </div>

        </div>
    )
}

export default Hero