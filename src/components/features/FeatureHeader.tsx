import React from 'react';
import { HeadData } from '../../constants/constant';

const FeatureHeader: React.FC = () => {
    return (
        <div className='text-center'>
            <h1 className='text-white text-[28px] md:text-[48px] md:leading-[60px] font-semibold w-[80vw] m-auto'>
                The only AI toolbox you'll ever need
            </h1>
            <p className='text-[#A3A3A3] text-[14px] md:text-lg max-w-2xl mx-auto mt-2'>
                From conversational AI agents to co-pilots, unlock endless possibilities to transform your business
            </p>
            <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-4 py-4'>
                {HeadData.map((each) => (
                    <div
                        key={each.id}
                        className='bg-[#292524] h-[40px] w-[220px] rounded-full p-2 flex flex-row justify-center items-center gap-2'
                    >
                        <img className='w-[28px] h-[22px]' src={each.image} alt={each.text} />
                        <h1 className='text-white text-[14px] md:text-[18px]'>{each.text}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default React.memo(FeatureHeader);