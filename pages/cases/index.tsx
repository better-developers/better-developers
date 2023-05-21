import { Box, Button, Center, Flex, Grid, GridItem, Heading, Link, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { CaseCard } from '../../components/CaseCard/CaseCard';
import { Section } from '../../components/Section/Section';
import { SectionItem } from '../../components/SectionItem/SectionItem';
import { Case } from '../../models/case';
import PlaceholderCardImage from '../../public/placeholder-card-image.png';
import CasesHero from '../../public/cases-hero.svg';

const Cases: NextPage = () => {
    const cases: Case[] = [
        {
            image: PlaceholderCardImage,
            title: 'Interaktiv frontend skaber højere engagement på dating PWA',
            content: (
                <Text textAlign="justify">
                    Markedet er mættet med dating apps, derfor er det vigtigt at skille sig ud. Konceptet bag denne dating app er at der kun
                    forekommer ét match om dagen. Derfor var det vigtigt at skabe en platform der var meget interaktiv da det var med til at
                    holde brugerne engagerede i PWA&apos;en.
                    <br />
                    <i>Projektet er et koncept udviklet i React med en .NET core backend.</i>
                    <br />
                    <Link>Læs mere...</Link>
                </Text>
            ),
        },

        {
            image: PlaceholderCardImage,
            title: 'Triangulering af offentlige wifi-signaler skaber heatmap af befolkningstæthed',
            content: (
                <Text textAlign="justify">
                    Mange institutioner har et behov for at kende befolkningstætheden eller personers bevægelse igennem en bygning. Ved
                    hjælp af wifi-signaler kunne folks bevægelser estimeres hvorefter der på frontend kunne skabes et heatmap af tæthederne.
                    <br />
                    <i>Projektet er et koncept udviklet i Vue med en .NET core backend med RaspBerry Pi baserede wifi sniffers.</i>
                    <br />
                    <Link>Læs mere...</Link>
                </Text>
            ),
        },
        // {
        //     image: PlaceholderCardImage,
        //     title: 'Automatiseret udfyldelse af bogføringsprocedure forsimpler implementering af ny lovgivning',
        //     content: (
        //         <Text textAlign="justify">
        //             Ved at automatisere
        //         </Text>
        //     ),
        // },
        {
            image: PlaceholderCardImage,
            title: 'Agro faglig viden og landbrugsdata forenes i værdiskabende web app',
            content: (
                <Text textAlign="justify">
                    Ved at kombinere agrofaglig viden med tilgængelig landbrugs og geodata, så var det muligt at skabe en web platform der
                    kunne hjælpe landmændende med at beregne mængden af næringsstoffer og vand. Dette har både en økonomisk og en mijømæssig
                    gevinst for landmændene og vores samfund.
                    <br />
                    <Link>Læs mere...</Link>
                </Text>
            ),
        },
        // {
        //     image: PlaceholderCardImage,
        //     title: 'Forsikringssystem',
        //     content: <Text textAlign="justify"></Text>,
        // },
        {
            image: PlaceholderCardImage,
            title: 'Web Assembly og SignalR gør det lettere at samarbejde om LaTeX dokumenter',
            content: (
                <Text textAlign="justify">
                    Hvad der før i tiden skulle køres lokalt på enkelte maskiner, kan nu ved hjælp af Web Assembly og SignalR gøres i en
                    webbrowser uden komplicerede installationer.
                    <br />
                    <i>
                        Projektet er skrevet i React med en .NET core backend. Pga. projektets høje kompleksitet og lange levetid, så er
                        backenden baseret på en onion arkitektur med mediator pattern for at følge SOLID og clean code principperne.
                    </i>
                </Text>
            ),
        },
    ];

    return (
        <>
            <Flex flexDir="column">
                <Flex height="750px" alignItems="end" position="relative">
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
                                    <Image src={CasesHero} alt="Computer image" />
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
