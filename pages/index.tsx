import { Box, Button, Flex, Grid, Heading, Icon, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import FAQ from '../components/FAQ/FAQ';
import computerPic from '../public/hero-comp.png';
import logoWireframe from '../public/logo-wireframe.png';
import lineBackground from '../public/line-background.svg';

import { HiChatBubbleLeftRight } from 'react-icons/hi2';
import { IoPeopleCircle } from 'react-icons/io5';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { VscSymbolMisc } from 'react-icons/vsc';

const Home: NextPage = () => {
    return (
        <>
            <Flex flexDir="column" gap="10em" paddingBottom="8em" zIndex={1}>
                <Flex height="650px" width="100%" alignItems="end" position="relative">
                    <Box
                        bgImage="url('/hero.png')"
                        backgroundSize="cover"
                        width="100%"
                        height="100%"
                        position="absolute"
                        zIndex="-1"
                        clipPath="polygon(0px 0px, 100% 0px, 100% 65%, 0px 100%)"
                    />

                    <Flex justifyContent="space-between" px="15vw" paddingBottom="48px" backgroundSize="cover">
                        <Flex flexDir="column" gap="1.5em">
                            <Flex flexDir="column">
                                <Heading fontSize="4em" fontWeight="400" mixBlendMode="overlay">
                                    Et konsulenthus af
                                </Heading>
                                <Heading fontSize="4em" fontWeight="700" mixBlendMode="overlay">
                                    udviklere.
                                </Heading>
                            </Flex>

                            <Text lineHeight="1.5" w="60%">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor diam sed tristique dictum.
                            </Text>

                            <Button variant="brand" w="fit-content">
                                Call to action
                            </Button>
                        </Flex>

                        <Image src={computerPic} alt="Computer image"></Image>
                    </Flex>
                </Flex>

                <Grid gridTemplateColumns="repeat(4, 1fr)" px="15vw" justifyContent="center" gap="2em">
                    <Flex flexDir="column" gap="1em" flex="1">
                        <Flex gap={2}>
                            <Icon as={BsFillRocketTakeoffFill} fontSize="5xl" />
                            <Heading>Konsulenter</Heading>
                        </Flex>
                        <Text textAlign="justify">
                            Vi har mange års erfaring med produktudviklng indenfor IT-systemer, hvor vi lægger vægt på den gode dialog og
                            åbenhed.
                        </Text>
                    </Flex>

                    <Flex flexDir="column" gap="1em" flex="1">
                        <Flex gap={2}>
                            <Icon as={IoPeopleCircle} fontSize="5xl" />
                            <Heading>Konsulenter</Heading>
                        </Flex>
                        <Text textAlign="justify">
                            Vi har et hold af skarpe konsulenter der står klar til at hjælpe med lige netop jeres opgaver. En vigtig del af
                            vores opgave er at fnde lige netop den kandidat der passer bedst til jeres virksomhed.
                        </Text>
                    </Flex>

                    <Flex flexDir="column" gap="1em" flex="1">
                        <Flex gap={2}>
                            <Icon as={HiChatBubbleLeftRight} fontSize="5xl" />

                            <Heading>Rådgivning</Heading>
                        </Flex>
                        <Text textAlign="justify">
                            Vi har meget erfaring med de nyeste teknologier indenfor WEB og vi deler meget gerne ud af viden.
                        </Text>
                    </Flex>

                    <Flex flexDir="column" gap="1em" flex="1">
                        <Flex gap={2}>
                            <Icon as={VscSymbolMisc} fontSize="5xl" />

                            <Heading>Rådgivning</Heading>
                        </Flex>
                        <Text textAlign="justify">
                            Vi har meget erfaring med de nyeste teknologier indenfor WEB og vi deler meget gerne ud af viden.
                        </Text>
                    </Flex>
                </Grid>

                <Grid templateColumns="2fr 1fr" gap="60" px="15vw">
                    <Flex flexDir="column" gap="8">
                        <Heading width="80%">Længere titel til at beskrive fordelene ved BD </Heading>
                        <Text>
                            Vi har mange års erfaring med produktudviklng indenfor IT-systemer, hvor vi lægger vægt på den gode dialog og
                            åbenhed.
                        </Text>
                    </Flex>

                    <Image src={logoWireframe} alt="Logo wireframe"></Image>
                </Grid>

                <Box px="30vw">
                    <FAQ />
                </Box>
            </Flex>
            <Grid gridTemplateColumns="repeat(6, 1fr)" width="100vw" height="100vh" top="0">
                <Box width="1px" background="black" />
                <Box width="1px" background="black" />
                <Box width="1px" background="black" />
                <Box width="1px" background="black" />
                <Box width="1px" background="black" />
                <Box width="1px" background="black" />
            </Grid>
        </>
    );
};

export default Home;
