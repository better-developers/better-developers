import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';
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
    return (
        <>
            <SectionItem colStart={2} colEnd={[8, 8, 4, 4]} mb={24}>
                <Stack gap={8}>
                    <Flex flexDir="column">
                        {identifier && <Text variant="brandHighlight">{identifier}</Text>}

                        {heading && (
                            <Heading fontSize={['2em', '2em', '4em', '4em']} fontWeight="400" color="black">
                                {heading}
                            </Heading>
                        )}

                        {customHeading}
                    </Flex>

                    <Text lineHeight="1.5" color="black" maxWidth={'750px'}>
                        {paragraph}
                    </Text>

                    <ContactButton />
                </Stack>
            </SectionItem>
            <SectionItem colStart={4} colEnd={[8, 8, 6, 6]}>
                {content}
            </SectionItem>
        </>
    );
};
