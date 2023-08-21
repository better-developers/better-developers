import { HTMLMotionProps, motion } from 'framer-motion';
import { FC } from 'react';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
    fadeout: {
        opacity: 0,
        transition: {
            duration: 1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            bounce: 0.3,
        },
    },
    fadeout: {
        opacity: 0,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};

const Parent: FC<HTMLMotionProps<'div'>> = (props) => (
    <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ margin: '-200px', once: true }}
        exit="fadeout"
        {...props}
    />
);
const Child: FC<HTMLMotionProps<'div'>> = (props) => <motion.div variants={item} {...props} />;

export const StaggerIn = {
    Parent,
    Child,
};
