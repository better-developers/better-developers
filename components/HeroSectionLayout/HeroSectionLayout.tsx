import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';
import { ContactButton } from '../ContactButton/ContactButton';
import { SectionItem } from '../SectionItem/SectionItem';

type HeroSectionProps = {
    identifier?: string;
    heading?: ReactElement;
    customHeading?: ReactElement;
    paragraph?: ReactElement;
    customParagraph?: ReactElement;
    content?: ReactElement;
};

export const HeroSectionLayout: FC<HeroSectionProps> = ({ identifier, heading, customHeading, paragraph, customParagraph, content }) => {
    return (
        <>
            <SectionItem colStart={[1, 1, 2]} colEnd={[8, 8, 4, 4]} mb={24}>
                <Stack gap={8}>
                    <Flex flexDir="column">
                        {identifier && <Text variant="brandHighlight">{identifier}</Text>}

                        {heading && (
                            <Heading fontSize={['2em', '2em', '3em', '3em']} fontWeight="600" color="black">
                                {heading}
                            </Heading>
                        )}

                        {customHeading}
                    </Flex>

                    {paragraph && (
                        <Text lineHeight="2" color="black" maxWidth={'750px'}>
                            {paragraph}
                        </Text>
                    )}

                    {customParagraph}

                    <ContactButton />
                </Stack>
            </SectionItem>
            <SectionItem colStart={[1, 1, 4]} colEnd={[8, 8, 6, 6]}>
                {content}
            </SectionItem>
        </>
    );
};
