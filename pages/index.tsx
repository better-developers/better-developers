import { Box, Button, Center, Flex, Grid, GridItem, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import FAQ from '../components/FAQ/FAQ';
import computerPic from '../public/hero-comp.png';
import logoWireframe from '../public/logo-wireframe.png';

import { HiChatBubbleLeftRight } from 'react-icons/hi2';
import { IoPeopleCircle } from 'react-icons/io5';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { VscSymbolMisc } from 'react-icons/vsc';
import { Section } from '../components/Section/Section';
import { SectionItem } from '../components/SectionItem/SectionItem';

const Home: NextPage = () => {
    console.log({ computerPic });

    return (
        <>
            <Flex flexDir="column">
                <Flex height="650px" alignItems="end" position="relative">
                    <Box
                        bgImage="url('/hero.png')"
                        backgroundSize="cover"
                        width="100%"
                        height="100%"
                        position="absolute"
                        zIndex="-1"
                        clipPath="polygon(0px 0px, 100% 0px, 100% 65%, 0px 100%)"
                    />

                    <Section>
                        <SectionItem colStart={2} colEnd={4} mb={24}>
                            <Stack gap={8}>
                                <Flex flexDir="column">
                                    <Heading fontSize="4em" fontWeight="400" mixBlendMode="overlay" color="black">
                                        Et konsulenthus af
                                    </Heading>
                                    <Heading fontSize="4em" fontWeight="700" mixBlendMode="overlay" color="black">
                                        udviklere.
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
                            <Stack justifyContent="center" alignItems="end" height={'100%'}>
                                <img src={'/hero-comp.png'} alt="Computer image" width="80%" />
                            </Stack>
                        </SectionItem>
                    </Section>
                </Flex>

                <Section pt={24} pb={16}>
                    <SectionItem colStart={2} colSpan={1}>
                        <Flex flexDir="column" gap="1em" flex="1">
                            <Flex gap={2}>
                                <Icon as={BsFillRocketTakeoffFill} fontSize="5xl" />
                                <Heading>Konsulenter</Heading>
                            </Flex>
                            <Text textAlign="justify">
                                Vi har mange års erfaring med produktudviklng indenfor IT-systemer, hvor vi lægger vægt på den gode dialog
                                og åbenhed.
                            </Text>
                        </Flex>
                    </SectionItem>

                    <SectionItem>
                        <Flex flexDir="column" gap="1em" flex="1">
                            <Flex gap={2}>
                                <Icon as={IoPeopleCircle} fontSize="5xl" />
                                <Heading>Konsulenter</Heading>
                            </Flex>
                            <Text textAlign="justify">
                                Vi har et hold af skarpe konsulenter der står klar til at hjælpe med lige netop jeres opgaver. En vigtig del
                                af vores opgave er at fnde lige netop den kandidat der passer bedst til jeres virksomhed.
                            </Text>
                        </Flex>
                    </SectionItem>

                    <SectionItem>
                        <Flex flexDir="column" gap="1em" flex="1">
                            <Flex gap={2}>
                                <Icon as={HiChatBubbleLeftRight} fontSize="5xl" />

                                <Heading>Rådgivning</Heading>
                            </Flex>
                            <Text textAlign="justify">
                                Vi har meget erfaring med de nyeste teknologier indenfor WEB og vi deler meget gerne ud af viden.
                            </Text>
                        </Flex>
                    </SectionItem>

                    <SectionItem>
                        <Flex flexDir="column" gap="1em" flex="1">
                            <Flex gap={2}>
                                <Icon as={VscSymbolMisc} fontSize="5xl" />

                                <Heading>Andet</Heading>
                            </Flex>
                            <Text textAlign="justify">
                                Vi har meget erfaring med de nyeste teknologier indenfor WEB og vi deler meget gerne ud af viden.
                            </Text>
                        </Flex>
                    </SectionItem>
                </Section>

                <Section py={24}>
                    <SectionItem colStart={2} colSpan={2}>
                        <Flex flexDir="column" gap="4">
                            <Heading>Længere titel til at beskrive fordelene ved BD </Heading>
                            <Text>
                                Vi har mange års erfaring med produktudviklng indenfor IT-systemer, hvor vi lægger vægt på den gode dialog
                                og åbenhed.
                            </Text>
                        </Flex>
                    </SectionItem>
                    <SectionItem colStart={4} colSpan={2}>
                        <Center>
                            <Image src={logoWireframe} alt="Logo wireframe" />
                        </Center>
                    </SectionItem>
                </Section>

                <Section
                    py={32}
                    bgColor="brand.800"
                    backgroundSize="cover"
                    width="100%"
                    height="100%"
                    clipPath="polygon(0px 20%, 100% 0px, 100% 80%, 0px 100%)">
                    <SectionItem colStart={2} colSpan={4}>
                        <Stack>
                            <Heading color="white">Cases</Heading>
                            <Grid gridTemplateColumns="repeat(3,1fr)" height={200} borderRadius="20px 0 20px 0" overflow="hidden" gap="1px">
                                <Box backgroundColor="white" />
                                <Box backgroundColor="white" />
                                <Box backgroundColor="white" />
                            </Grid>
                        </Stack>
                    </SectionItem>
                    <SectionItem colStart={2} colSpan={4} pt={12} pb={4}>
                        <Heading color="white">Det siger andre</Heading>
                    </SectionItem>
                    <SectionItem colStart={2} colSpan={1}>
                        <Box backgroundColor="white" height={100} />
                    </SectionItem>
                    <SectionItem>
                        <Box backgroundColor="white" height={100} />
                    </SectionItem>
                    <SectionItem>
                        <Box backgroundColor="white" height={100} />
                    </SectionItem>
                    <SectionItem>
                        <Box backgroundColor="white" height={100} />
                    </SectionItem>
                </Section>

                <Section py={8}>
                    <SectionItem colStart={3} colEnd={5}>
                        <FAQ />
                    </SectionItem>
                </Section>
                <Section py={24}>
                    <SectionItem colStart={3} colSpan={2} py={4}>
                        <Heading textAlign="center">Er du overbevist? Så lad os føre din idé ud i livet.</Heading>
                    </SectionItem>
                    <SectionItem colStart={3} colSpan={2} py={4}>
                        <Center>
                            <Button variant="brand">Estimer projekt</Button>
                        </Center>
                    </SectionItem>
                </Section>
            </Flex>
        </>
    );
};

export default Home;
