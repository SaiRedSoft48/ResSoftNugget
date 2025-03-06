import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const questions = [
    "How many tickets were actually resolved?",
    "Which queries are best suited for automation?",
    "Which issues frequently lead to escalation?",
];

const QuestionRotator: React.FC = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % questions.length);
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-[14%] w-[90%] bg-[transparent] border border-[#262626] rounded-2xl p-4 flex items-center">
            <motion.p
                key={index}
                className="text-[#A3A3A3] text-[12px] md:text-[16px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
            >
                {questions[index]}
            </motion.p>
        </div>
    );
};

export default QuestionRotator;
