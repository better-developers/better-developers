'use client';
import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ComponentProps, FC, PropsWithChildren, ReactElement } from 'react';
import { ContactButton } from '../ContactButton/ContactButton';
import { SectionItem } from '../SectionItem/SectionItem';

type HeroSectionProps = {
    identifier?: string;
    heading?: ReactElement;
    customHeading?: ReactElement;
    paragraph: ReactElement;
    content?: ReactElement;
};

export const HeroSectionLayout: FC<HeroSectionProps> = ({ identifier, heading, customHeading, paragraph, content }) => {
    const duration = 0.75;
    const ease = [0.5, 0.5, 0.21, 1];
    const animationDelayOffset = 0;
    const animationDelayDiff = 0.15;

    const Animation: FC<PropsWithChildren<{ index?: number }> & ComponentProps<typeof motion.div>> = ({
        index = 0,
        children,
        ...props
    }) => (
        <motion.div
            {...props}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease, duration, delay: animationDelayOffset + animationDelayDiff * index }}>
            {children}
        </motion.div>
    );

    return (
        <>
            <SectionItem colStart={[1, 1, 2]} colEnd={[8, 8, 4, 4]} mb={24}>
                <Stack gap={8}>
                    <Flex flexDir="column">
                        {identifier && (
                            <Animation index={0}>
                                <Text variant="brandHighlight">{identifier}</Text>
                            </Animation>
                        )}

                        <Animation index={1}>
                            {heading && (
                                <Heading fontSize={['2em', '2em', '4em', '4em']} fontWeight="400" color="black">
                                    {heading}
                                </Heading>
                            )}
                        </Animation>

                        <Animation style={{ mixBlendMode: 'overlay' }}>{customHeading}</Animation>
                    </Flex>

                    <Animation index={2}>
                        <Text lineHeight="1.5" color="black" maxWidth={'750px'}>
                            {paragraph}
                        </Text>
                    </Animation>

                    <Animation index={3}>
                        <ContactButton />
                    </Animation>
                </Stack>
            </SectionItem>

            <SectionItem colStart={[1, 1, 4]} colEnd={[8, 8, 6, 6]}>
                {content}
            </SectionItem>
        </>
    );
};
