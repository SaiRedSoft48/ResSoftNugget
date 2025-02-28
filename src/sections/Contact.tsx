import React from 'react'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const Contact: React.FC = () => {
    return (
        <>
            <div className='bg-black h-[80vh] flex flex-col items-center justify-center'>
                <CTA />
            </div>
            <Footer />
        </>
    )
}

export default Contact