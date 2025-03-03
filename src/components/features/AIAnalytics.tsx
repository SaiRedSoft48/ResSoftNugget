import React from 'react'
import { imageImports } from '../../utils/importImages' 
const AIAnalytics: React.FC = () => {
    const { search } = imageImports
    return (
        <div className='h-[100%] md:w-[56%] flex flex-col justify-start items-start gap-4 pl-3 md:border-r border-b border-[#262626] pt-4'>
            <h1 className='text-white text-2xl md:my-2'> AI Powered Analytic </h1>
            <p className='text-base text-[#A3A3A3] md:my-2'>Identify issues, ask questions and unlock valuable insights from your interaction </p>
            <div className='flex flex-row justify-start pl-3 items-center gap-2 pt-4 md:my-2'>
                <img className='h-[20px] w-[20px]' src={search} alt='search' />
                <p className='text-[#A3A3A3] '> Type your question </p>
            </div>
            <div className='h-[14%] w-[90%] bg-[transparent] border border-[#262626] rounded-2xl p-4'>
            </div>
        </div>
    )
}

export default AIAnalytics