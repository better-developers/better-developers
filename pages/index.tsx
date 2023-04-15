import { Box, Button, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import computerPic from '../public/hero-comp.png';
import logoWireframe from '../public/logo-wireframe.png';

const Home: NextPage = () => {
    return (
        <Flex flexDir="column" gap="10em" paddingBottom="8em">
            <Flex height="65vh" width="100%" alignItems="end" position="relative">
                <Box
                    bgImage="url('/hero.png')"
                    backgroundSize="cover"
                    width="100%"
                    height="100%"
                    position="absolute"
                    zIndex="-1"
                    clipPath="polygon(0px 0px, 100% 0px, 100% 65%, 0px 100%)"
                />

                <Flex width="100%" justifyContent="space-between" px="15vw" paddingBottom="48px">
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

            <Flex gap="5em" px="15vw">
                <Flex flexDir="column" gap="1em" flex="1">
                    <Heading>Projekter</Heading>
                    <Text textAlign="justify">
                        Vi har mange års erfaring med produktudviklng indenfor IT-systemer, hvor vi lægger vægt på den gode dialog og
                        åbenhed.
                    </Text>
                </Flex>

                <Flex flexDir="column" gap="1em" flex="1">
                    <Heading>Konsulenter</Heading>
                    <Text textAlign="justify">
                        Vi har et hold af skarpe konsulenter der står klar til at hjælpe med lige netop jeres opgaver. En vigtig del af
                        vores opgave er at fnde lige netop den kandidat der passer bedst til jeres virksomhed.
                    </Text>
                </Flex>

                <Flex flexDir="column" gap="1em" flex="1">
                    <Heading>Rådgivning</Heading>
                    <Text textAlign="justify">
                        Vi har meget erfaring med de nyeste teknologier indenfor WEB og vi deler meget gerne ud af viden.
                    </Text>
                </Flex>
            </Flex>

            <Grid templateColumns="2fr 1fr" gap="6" px="15vw">
                <Flex flexDir="column">
                    <Heading>Længere titel til at beskrive fordelene ved BD </Heading>
                    <Text>
                        Vi har mange års erfaring med produktudviklng indenfor IT-systemer, hvor vi lægger vægt på den gode dialog og
                        åbenhed.
                    </Text>
                </Flex>

                <Image src={logoWireframe} alt="Logo wireframe"></Image>
            </Grid>
        </Flex>
    );
};

export default Home;
