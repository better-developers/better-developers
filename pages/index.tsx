import { Box, Button, Card, Center, Flex, Grid, GridItem, Heading, Icon, Link, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import FAQ from '../components/FAQ/FAQ';
import HeroComp from '../public/hero-comp.png';
import logoWireframe from '../public/logo-wireframe.png';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';
import { IoPeopleCircle } from 'react-icons/io5';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { VscSymbolMisc } from 'react-icons/vsc';
import { Section } from '../components/Section/Section';
import { SectionItem } from '../components/SectionItem/SectionItem';
import { CaseCard } from '../components/CaseCard/CaseCard';
import PlaceholderCardImage from '../public/placeholder-card-image.png';
import { CaseCardPreview } from '../components/CaseCardPreview/CaseCardPreview';
import SegesLogo from '../public/logos/seges.png';
import DigisenseLogo from '../public/logos/digisense.png';
import MicrotechLogo from '../public/logos/microtech.jpg';
import { ContactCard } from '../components/ContactCard/ContactCard';

const Home: NextPage = () => {
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
                                <Box w="80%">
                                    <Image src={HeroComp} alt="Computer image" />
                                </Box>
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

                <Section position="relative" py={16}>
                    <SectionItem px={0} colSpan={6} position="absolute" h="100%" w="100%">
                        <Box
                            bgColor="#303D4D"
                            backgroundSize="cover"
                            width="100%"
                            height="100%"
                            position="absolute"
                            clipPath="polygon(0 10%, 100% 0px, 100% 90%, 0px 100%)"
                        />
                    </SectionItem>
                    <SectionItem colStart={2} colSpan={4} pt={36}>
                        <Stack>
                            <Heading color="white">Cases</Heading>
                            <Grid gridTemplateColumns="repeat(3,1fr)" borderRadius="20px 0 20px 0" overflow="hidden" gap={4}>
                                <CaseCardPreview title="Seges Innovation" image={SegesLogo}>
                                    <Text color="white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt dui quis massa porta, id
                                        fermentum risus pretium. Phasellus in ligula non.
                                        <br />
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt dui quis massa porta.
                                        <br />
                                        <br />
                                        <Link fontWeight={700}>Læs mere...</Link>
                                    </Text>
                                </CaseCardPreview>
                                <CaseCardPreview title="Digisense A/S" image={DigisenseLogo}>
                                    <Text color="white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt dui quis massa porta, id
                                        fermentum risus pretium. Phasellus in ligula non.
                                        <br />
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt dui quis massa porta.
                                        <br />
                                        <br />
                                        <Link fontWeight={700}>Læs mere...</Link>
                                    </Text>
                                </CaseCardPreview>
                                <CaseCardPreview title="Microtech A/S" image={MicrotechLogo}>
                                    <Text color="white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt dui quis massa porta, id
                                        fermentum risus pretium. Phasellus in ligula non.
                                        <br />
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt dui quis massa porta.
                                        <br />
                                        <br />
                                        <Link fontWeight={700}>Læs mere...</Link>
                                    </Text>
                                </CaseCardPreview>
                            </Grid>
                        </Stack>
                    </SectionItem>
                    <SectionItem colStart={2} colSpan={4} pt={12} pb={4}>
                        <Heading color="white">Det siger andre</Heading>
                    </SectionItem>
                    <SectionItem colStart={2} colSpan={1}>
                        <ContactCard
                            name="John Doe"
                            title="Lead developer"
                            quote={
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt dui quis massa porta, id fermentum risus pretium. Phasellus in ligula non. '
                            }
                        />
                    </SectionItem>
                    <SectionItem>
                        <ContactCard
                            name="John Doe"
                            title="Lead developer"
                            quote={
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt dui quis massa porta, id fermentum risus pretium. Phasellus in ligula non. '
                            }
                        />
                    </SectionItem>
                    <SectionItem>
                        <ContactCard
                            name="John Doe"
                            title="Lead developer"
                            quote={
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt dui quis massa porta, id fermentum risus pretium. Phasellus in ligula non. '
                            }
                        />
                    </SectionItem>
                    <SectionItem>
                        <ContactCard
                            name="John Doe"
                            title="Lead developer"
                            quote={
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt dui quis massa porta, id fermentum risus pretium. Phasellus in ligula non. '
                            }
                        />
                    </SectionItem>
                </Section>

                <Section py={48}>
                    <SectionItem colStart={3} colEnd={5}>
                        <FAQ />
                    </SectionItem>
                </Section>
                <Section py={12}>
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
