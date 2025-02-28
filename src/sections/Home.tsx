import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <div className='bg-[#000] h-[40vh]'>
                <h1 className='text-center text-white text-4xl'> Under working... </h1>
            </div>
        </>
    )
}

export default Home