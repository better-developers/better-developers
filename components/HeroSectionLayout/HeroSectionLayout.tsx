import { Box, BoxProps, Button, ColorProps, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { Section } from '../Section/Section';
import { SectionItem } from '../SectionItem/SectionItem';
import { FC, PropsWithChildren, ReactElement } from 'react';
import { color } from 'framer-motion';
import ReactPlayer from 'react-player';
import { ContactButton } from '../ContactButton/ContactButton';

type HeroSectionProps = {
    identifier?: string;
    heading: ReactElement;
    paragraph: ReactElement;
    content?: ReactElement;
};

export const HeroSectionLayout: FC<HeroSectionProps> = ({ identifier, heading, paragraph, content }) => {
    return (
        <>
            <SectionItem colStart={2} colEnd={4} mb={24}>
                <Stack gap={8}>
                    <Flex flexDir="column">
                        {identifier && <Text variant="brandHighlight">{identifier}</Text>}
                        <Heading fontSize="4em" fontWeight="400" color="black">
                            {heading}
                        </Heading>
                    </Flex>

                    <Text lineHeight="1.5" color="black">
                        {paragraph}
                    </Text>

                    <ContactButton />
                </Stack>
            </SectionItem>
            <SectionItem colStart={4} colEnd={6}>
                {content}
            </SectionItem>
        </>
    );
};
