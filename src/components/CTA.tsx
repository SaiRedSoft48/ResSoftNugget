import React from 'react'
import cta_bg from "../assets/CTA_bg.png"
import Button from './Button'
const CTA: React.FC = () => {
    return (
        <div className='flex flex-col justify-center items-center w-[100%]'>
            <div className=' flex flex-col justify-center items-center h-[50vh] w-[88%] rounded-2xl bg-cover bg-center' style={{ backgroundImage: `url(${cta_bg})` }} >
                <div className='flex flex-col justify-center items-center gap-8 w-[90%]'>
                    <h1 className="text-white text-xl md:text-6xl text-center ">
                        Ready to transform your business?
                    </h1>

                    <p className="text-[#A3A3A3] text-md md:text-xl text-center md:px-4">
                        Get started and see how AI can transform your customer interactions—faster, smarter, better.
                    </p>
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default CTA