import React, { useState, useEffect } from "react";
import logo from "../assets/LOGO.png";
import Button from "./Button";

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768); 
        };

        const handleScroll = () => {
            if (window.scrollY > 500 && !isMobile) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };


        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", checkScreenSize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMobile]);

    return (
        <div className={`w-full flex justify-center items-center p-2 fixed top-0 z-50 transition-all duration-300`}>
             {/* bg-radial from-[#000] from-2% to-[#262626] */}
            <div className={`w-[95%] h-10 md:h-20 flex flex-row justify-between items-center px-2.5 md:px-8 rounded-full border-gray-900 
                ${isMobile ? "bg-[#171717] shadow-lg" : isScrolled ? "bg-[#171717] shadow-lg" : "bg-transparent"}`}>
                <div>
                    <img className="w-[110px] h-[25px] md:w-[160px] md:h-[40px]" src={logo} alt="logo" />
                </div>
                <Button />
            </div>
        </div>
    );
};

export default Navbar;

