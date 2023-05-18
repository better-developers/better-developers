import { Box, Button, Center, Flex, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { CaseCard } from '../../components/CaseCard/CaseCard';
import { Section } from '../../components/Section/Section';
import { SectionItem } from '../../components/SectionItem/SectionItem';
import { Case } from '../../models/case';
import HeroComp from '../../public/hero-comp.png';
import PlaceholderCardImage from '../../public/placeholder-card-image.png';

const Cases: NextPage = () => {
    const cases: Case[] = [
        {
            image: PlaceholderCardImage,
            title: 'Digisense A/S',
            content: (
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas quam eu turpis dignissim convallis. Donec vitae ex
                    vitae dolor posuere vehicula. Fusce rutrum id ligula id scelerisque. Suspendisse dignissim felis nulla, quis bibendum
                    neque egestas eu.
                </Text>
            ),
        },
        {
            image: PlaceholderCardImage,
            title: 'Digisense A/S',
            content: (
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas quam eu turpis dignissim convallis. Donec vitae ex
                    vitae dolor posuere vehicula. Fusce rutrum id ligula id scelerisque. Suspendisse dignissim felis nulla, quis bibendum
                    neque egestas eu.
                </Text>
            ),
        },
        {
            image: PlaceholderCardImage,
            title: 'Digisense A/S',
            content: (
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas quam eu turpis dignissim convallis. Donec vitae ex
                    vitae dolor posuere vehicula. Fusce rutrum id ligula id scelerisque. Suspendisse dignissim felis nulla, quis bibendum
                    neque egestas eu.
                </Text>
            ),
        },
        {
            image: PlaceholderCardImage,
            title: 'Digisense A/S',
            content: (
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas quam eu turpis dignissim convallis. Donec vitae ex
                    vitae dolor posuere vehicula. Fusce rutrum id ligula id scelerisque. Suspendisse dignissim felis nulla, quis bibendum
                    neque egestas eu.
                </Text>
            ),
        },
        {
            image: PlaceholderCardImage,
            title: 'Digisense A/S',
            content: (
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas quam eu turpis dignissim convallis. Donec vitae ex
                    vitae dolor posuere vehicula. Fusce rutrum id ligula id scelerisque. Suspendisse dignissim felis nulla, quis bibendum
                    neque egestas eu.
                </Text>
            ),
        },
        {
            image: PlaceholderCardImage,
            title: 'Digisense A/S',
            content: (
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas quam eu turpis dignissim convallis. Donec vitae ex
                    vitae dolor posuere vehicula. Fusce rutrum id ligula id scelerisque. Suspendisse dignissim felis nulla, quis bibendum
                    neque egestas eu.
                </Text>
            ),
        },
    ];

    return (
        <>
            <Flex flexDir="column">
                <Flex height="650px" alignItems="end" position="relative">
                    <Section position="absolute" height="100%">
                        <SectionItem px={0} colSpan={6}>
                            <Box
                                top={50}
                                bgColor="blue.100"
                                backgroundSize="cover"
                                width="100%"
                                height="100%"
                                position="absolute"
                                clipPath="polygon(0px 0px, 100% 0px, 100% 65%, 0px 100%)"
                            />
                        </SectionItem>
                        <SectionItem px={0} colStart={3} colSpan={3}>
                            <Box
                                top={-45}
                                bgColor="blue.200"
                                backgroundSize="cover"
                                width="100%"
                                height="100%"
                                position="absolute"
                                clipPath="polygon(0px 0px, 100% 0px, 100% 65%, 0px 100%)"
                            />
                        </SectionItem>
                        <SectionItem px={0} colStart={5} colSpan={1}>
                            <Box
                                top={-85}
                                bgColor="blue.500"
                                backgroundSize="cover"
                                width="100%"
                                height="100%"
                                position="absolute"
                                clipPath="polygon(0px 0px, 100% 0px, 100% 65%, 0px 100%)"
                            />
                        </SectionItem>
                        <SectionItem px={0} colSpan={6}>
                            <Box
                                bgColor="blue.50"
                                backgroundSize="cover"
                                width="100%"
                                height="100%"
                                position="absolute"
                                clipPath="polygon(0px 0px, 100% 0px, 100% 65%, 0px 100%)"
                            />
                        </SectionItem>
                    </Section>

                    <Section>
                        <SectionItem colStart={2} colEnd={4} mb={24}>
                            <Stack gap={8}>
                                <Flex flexDir="column">
                                    <Text variant="brandHighlight">Cases</Text>
                                    <Heading fontSize="4em" fontWeight="400" color="black">
                                        Reelle virksomheder med reelle udfordringer
                                    </Heading>
                                </Flex>

                                <Text lineHeight="1.5" w="60%" color="black">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor diam sed tristique dictum.
                                </Text>

                                <Button variant="brand" w="fit-content">
                                    Call to action
                                </Button>
                            </Stack>
                        </SectionItem>
                        <SectionItem colStart={4} colEnd={6}>
                            <Stack alignItems="end" height={'100%'}>
                                <Box w="80%">
                                    <Image src={HeroComp} alt="Computer image" />
                                </Box>
                            </Stack>
                        </SectionItem>
                    </Section>
                </Flex>
                <Section py={24}>
                    <SectionItem colStart={3} colSpan={2} py={4}>
                        <Heading textAlign="center" fontWeight="semibold">
                            Vores tidligere samarbejder indenfor softwareuvikling
                        </Heading>
                    </SectionItem>
                    <SectionItem colStart={3} colSpan={2} py={4} textAlign="center">
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec tincidunt diam. Sed et enim arcu. Donec
                            porta laoreet neque. Duis imperdiet massa lorem, vel efficitur purus ultrices et.
                        </Text>
                    </SectionItem>
                </Section>

                <Section>
                    <SectionItem colStart={2} colSpan={4}>
                        <Grid gridTemplateColumns="repeat(4,1fr)" gridTemplateRows="1fr 0.5fr 1fr" gap={8}>
                            {cases.map((c, index) => (
                                <GridItem key={index} colSpan={index % 5 ? 1 : 2} rowSpan={index % 5 ? 2 : 1} minW={0} minH={0} h="100%">
                                    <CaseCard image={c.image} title={c.title}>
                                        {c.content}
                                    </CaseCard>
                                </GridItem>
                            ))}
                        </Grid>
                    </SectionItem>
                </Section>

                <Section py={24}>
                    <SectionItem colStart={3} colSpan={2} py={4} px={16}>
                        <Heading textAlign="center">Vil du høre mere? Vi elsker at fortælle!</Heading>
                    </SectionItem>
                    <SectionItem colStart={3} colSpan={2} py={4}>
                        <Center>
                            <Button variant="brand">Kontakt os</Button>
                        </Center>
                    </SectionItem>
                </Section>
            </Flex>
        </>
    );
};

export default Cases;
