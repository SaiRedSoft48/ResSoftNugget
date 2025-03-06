import { motion, Variants } from "framer-motion";

interface MotionWrapperProps {
    children: React.ReactNode;
    animation: Variants;
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({ children, animation }) => {
    return <motion.div {...animation}>{children}</motion.div>;
};

export default MotionWrapper;
