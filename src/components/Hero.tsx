import React from 'react';
import Button from './Button';
import MarqueeScroll from './MarqueeScroll';
import headingSvg from "../assets/hero/Vector.svg";
import hexagon from "../assets/hero/hexagon.png";
import circular from "../assets/hero/circular.png";

const Hero: React.FC = () => {
    return (
        <div className='bg-black h-[100vh] md:h-[160vh] flex flex-col justify-center items-center overflow-hidden'>
            <div className='relative h-[110vh] flex flex-col items-center text-center w-[100%] pt-40 overflow-hidden'>
                <img src={hexagon} alt='Hexagon' className='hidden md:inline-block absolute z-50 right-[-140px] top-[80px] w-40 md:w-70 max-w-full' />
                <h1 className="text-white text-[20px] md:text-7xl relative font-bold px-2 md:px-0">
                    <span className="relative z-10">AI Agents, </span>
                    <img src={headingSvg} alt="Highlight" className="absolute top-[-90px] left-[10px] md:top-[-25px] md:left-[20px] w-[130px] h-[200px] md:w-[480px] md:h-[120px] max-w-full" />
                    <span> build for speed, scale, and quality </span>
                </h1>
                <img src={circular} alt='Circular' className='hidden md:inline-block absolute left-[-130px] top-[400px] w-40 md:w-60 max-w-full' />

                <p className="text-[#A3A3A3] text-[14px] md:text-xl max-w-4xl mt-4 px-6 md:px-0">
                    Handling complex queries, boosting efficiency, and streamlining support, so your business scales faster with precision.
                </p>
                <Button size="text-md" pd="px-3 py-2 mt-6" />
            </div>

            <div className='flex flex-col items-center text-center overflow-hidden h-[60vh] md:h-[60vh]'>
                <h1 className='text-white text-[28px] md:text-[48px] md:leading-[60px] font-semibold w-[70vw] md:w-auto'>Trusted by the Zomato <span className='text-[#6B46C1]'>ecosystem </span></h1>
                <p className='text-[#A3A3A3] text-[14px] md:text-xl max-w-2xl mx-auto mt-2 w-[90vw] md:w-auto' >
                    We efficiently manage over 15 million monthly interactions across Zomato, at 99.99% uptime.
                </p>
                <MarqueeScroll />
            </div>
        </div>
    );
};

export default Hero;
