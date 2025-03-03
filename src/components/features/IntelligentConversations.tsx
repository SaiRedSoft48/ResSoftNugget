import React from 'react'
import { imageImports } from '../../utils/importImages'
const IntelligentConversations: React.FC = () => {
    const { two_img} = imageImports
  return (
      <div className=' h-[100%] flex flex-col justify-start items-start gap-3 border-b border-[#262626]'>
          <h1 className='text-white text-2xl pl-3'> Intelligent Conversations. Effortless Support </h1>
          <p className='text-base text-[#A3A3A3] pl-3'>Seamlessly integrate data sources and SOPs to generate accurate responses and actions </p>
          <div className='h-[100%] w-[94%] bg-[#171717] opacity-[0.8] rounded-t-2xl px-4 pt-4 self-center'>
              <div className='rounded-t-2xl h-[100%] w-[100%] bg-cover bg-center' style={{ backgroundImage: `url(${two_img})` }}>
              </div>
          </div>
      </div>
  )
}

export default IntelligentConversations