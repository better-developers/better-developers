import { Card, Heading, Stack } from '@chakra-ui/react';
import { Variants, motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { FC, PropsWithChildren, useState } from 'react';

type CaseCardPreviewProps = {
    image: StaticImageData;
    title: string;
};

const variants: Variants = {
    show: {
        y: 0,
    },
    hidden: {
        y: '100%',
    },
};

export const CaseCardPreview: FC<PropsWithChildren<CaseCardPreviewProps>> = ({ image, title, children }) => {
    const [hover, setHover] = useState(false);

    return (
        <Card h={400} overflow="hidden" position="relative" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <Stack alignItems="center" justifyContent="center" h="100%">
                <Image src={image} alt="case-image" />
            </Stack>

            <motion.div
                transition={{
                    duration: 0.3,
                    bounce: 0,
                }}
                animate={hover ? 'show' : 'hidden'}
                variants={variants}
                style={{ height: '100%', width: '100%', position: 'absolute' }}>
                <Stack
                    gap={2}
                    px={8}
                    py={12}
                    background="linear-gradient(114.59deg, #F7A85B 1%, #F8E869 91.26%)"
                    height="100%"
                    width="100%">
                    <Heading fontSize="3xl" color="white">
                        {title}
                    </Heading>
                    {children}
                </Stack>
            </motion.div>
        </Card>
    );
};
