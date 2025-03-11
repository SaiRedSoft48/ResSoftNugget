export const featuresHeadingfadeUp = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 100, damping: 10 },
    viewport: { once: true },
};

export const featuresDescriptionfadeUp = {
    initial: { y: 20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 100, damping: 10 },
    viewport: { once: true },
};

export const featuresFadeUp = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 100, damping: 10 },
    viewport: { once: true },
};

export const featuresImgBump = {
    initial: { y: 20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 100, damping: 10 },
    viewport: { once: true }
};

export const textSlideInLeft = {
    initial: { x: -50, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 100, damping: 10 },
    viewport: { once: true }
};

export const fadeUp = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.7, ease: "easeOut" },
    viewport: { once: true, amount: 0.2 },
};

export const fadeUpWithDelay = (delay: number) => ({
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut", delay },
    viewport: { once: true, amount: 0.2 },
});

export const fadeUpScale = (delay: number) => ({
    initial: { y: -150, scale: 0.5, opacity: 0 },
    whileInView: { y: 0, scale: 1, opacity: 1 },
    transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.8, delay },
    viewport: { once: true, amount: 0.2 },
});

export const fadeDownScale = (delay: number) => ({
    initial: { y: 150, scale: 0.5, opacity: 0 },
    whileInView: { y: 0, scale: 1, opacity: 1 },
    transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.8, delay },
    viewport: { once: true, amount: 0.2 },
});

export const fadeUpHeading = (delay: number) => ({
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.8, delay },
    viewport: { once: true, amount: 0.2 },
});


export const heroVectorMotion = {
    initial: { scaleX: 1.5, opacity: 0 },
    animate: { scaleX: 1, opacity: 1 },
    transition: {
        type: "spring",
        stiffness: 120,
        damping: 18,
    },
};

export const HeroCicularMotion = {
    initial: { y: -100, scale: 0.5, opacity: 0 },
    animate: { y: 0, scale: 1, opacity: 1 },
    transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
        delay: 0.2,
    },
};

export const HeroDescriptionMotion = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 1,
        delay: 0,
    },
};

export const HeroHexagonMotion = {
    initial: { y: -100, scale: 0.5, opacity: 0 },
    animate: { y: 0, scale: 1, opacity: 1 },
    transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
        delay: 0,
    },
};


export const rotateLeftMotion = {
    initial: { rotate: 0 },
    animate: { rotate: -360 },
    transition: {
        ease: "linear",
        repeat: Infinity, duration: 6
    },
};

export const rotateRightMotion = {
    initial: { rotate: 0 },
    animate: { rotate: 360 },
    transition: {
        ease: "linear",
        repeat: Infinity , duration:6
    },
};
