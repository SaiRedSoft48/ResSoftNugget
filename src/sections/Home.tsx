import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from "./Features"

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
        </>
    )
}

export default Home