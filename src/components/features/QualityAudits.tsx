import React from 'react'
import { Audits } from "../../constants/constant"
import { imageImports } from '../../utils/importImages'
const QualityAudits: React.FC = () => {
    const { coverage, opinion } = imageImports
  return (
      <div className='h-[100%] flex flex-col justify-start items-start gap-2 pl-4 md:border-r border-b border-[#262626]'>
          <h1 className='text-white text-2xl'> Automated Quality Audits </h1>
          <p className='text-base text-[#A3A3A3] pr-4'>Ensure complete oversight by automating quality checks across all interactions</p>
          <div className='h-[38vh] md:h-[58%] w-[90%] bg-[#171717] border-[#262626] border opacity-[0.8] rounded-2xl p-4 flex flex-col justify-around items-center'>
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
  )
}

export default QualityAudits