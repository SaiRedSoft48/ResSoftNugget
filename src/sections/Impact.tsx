import React from 'react'
import ImpactCard from '../components/ImpactCard'
import { ImpactData } from '../constants/constant'
import { motion } from "framer-motion";

const Impact: React.FC = () => {
    return (
        <div className='bg-black py-6'>
            <motion.div initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }} className='flex flex-col gap-2 items-center'>
                <h1 className="text-white text-[28px] md:text-[48px] md:leading-[60px] font-semibold">
                    Maximize Efficiency
                </h1>
                <p className="text-[#A3A3A3] text-[14px] w-[80vw] text-center md:w-auto  md:text-lg my-2">
                    Optimize workflows, drive faster issue resolutions, and achieve measurable cost reductions
                </p>
                <div className='flex flex-col md:flex-row justify-between items-center md:w-[85%] mt-2'>
                    {ImpactData.map((card) => <ImpactCard key={card.id} card={card} />)}
                </div>
            </motion.div>
        </div>
    )
}
export default Impact