'use client';
import { Box, Button, Center, Flex, Grid, Heading, Icon, Link, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useContext, useEffect } from 'react';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';
import { IoPeopleCircle } from 'react-icons/io5';
import { VscSymbolMisc } from 'react-icons/vsc';
import { CaseCardPreview } from '../components/CaseCardPreview/CaseCardPreview';
import { ContactButton } from '../components/ContactButton/ContactButton';
import { ContactCard } from '../components/ContactCard/ContactCard';
import FAQ from '../components/FAQ/FAQ';
import { Gradient } from '../components/Gradient/Gradient';
import { Section } from '../components/Section/Section';
import { SectionItem } from '../components/SectionItem/SectionItem';
import { NavBarContext } from '../contexts/NavBarContext';
import HeroComp from '../public/hero-comp.png';
import logoWireframe from '../public/logo-wireframe.svg';
import DigisenseLogo from '../public/logos/digisense.png';
import MicrotechLogo from '../public/logos/microtech.jpg';
import SegesLogo from '../public/logos/seges.png';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const Home: NextPage = () => {
    const [_context, setContext] = useContext(NavBarContext);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setContext('light'), []);

    return (
        <>
            <Flex flexDir="column">
                <Flex height="650px" alignItems="end" position="relative">
                    <Box
                        width="100%"
                        height="100%"
                        position="absolute"
                        zIndex="-1"
                        clipPath="polygon(0px 0px, 100% 0px, 100% 65%, 0px 100%)"
                    >
                        <Gradient />
                    </Box>

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

                                <Text lineHeight="1.5" color="black">
                                    Better Developers er et konsulenthus, skabt af udviklere for udviklere. Vi redifinerer det traditionelle
                                    it-konsulenthus i Danmark ved at have udvikling i hovedsædet helt fra vores ejerskabstruktur til hvordan
                                    vi arbejder med vores kunder.
                                </Text>

                                <Button variant="brand" w="fit-content">
                                    Kontakt os
                                </Button>
                            </Stack>
                        </SectionItem>
                        <SectionItem colStart={4} colEnd={6}>
                            <Stack justifyContent="flex-start" alignItems="end" height={'100%'}>
                                <ReactPlayer
                                    url="https://vimeo.com/828777583"
                                    controls
                                    width="100%"
                                    style={{
                                        filter: 'drop-shadow(5px 5px 10px #666)',
                                    }}
                                />
                            </Stack>
                        </SectionItem>
                    </Section>
                </Flex>

                <Section pt={24} pb={16}>
                    <SectionItem px={8} colStart={2} colSpan={1}>
                        <Flex flexDir="column" gap="1em" flex="1">
                            <Flex gap={2} alignItems="center">
                                <Icon as={BsFillRocketTakeoffFill} fontSize="5xl" />
                                <Heading size="md">Forretningsforståelse</Heading>
                            </Flex>
                            <Text>
                                Alle vores dygtige udviklere er partnere i Better Developers og har derfor en dyb forretningsforståelse. Det
                                betyder i får mere end bare en udvikler til jeres team når i arbejder sammen med os, da jeres forretning
                                altid vil være i centrum.
                            </Text>
                        </Flex>
                    </SectionItem>

                    <SectionItem px={8}>
                        <Flex flexDir="column" gap="1em" flex="1">
                            <Flex gap={2} alignItems="center">
                                <Icon as={IoPeopleCircle} fontSize="5xl" />
                                <Heading size="md">IT-Konsulenter</Heading>
                            </Flex>
                            <Text>
                                Kvalitet og højt faglige kompetencer er garanteret når i arbejder sammen med os. Vores team af skarpe
                                konsulenter er ekstremt talentfulde og er alle blevet godkendt af vores kvalitetsproces, så vi kan stå på
                                mål for hvert eneste linje kode vi levere til vores kunder.
                            </Text>
                        </Flex>
                    </SectionItem>

                    <SectionItem px={8}>
                        <Flex flexDir="column" gap="1em" flex="1">
                            <Flex gap={2} alignItems="center">
                                <Icon as={HiChatBubbleLeftRight} fontSize="5xl" />

                                <Heading size="md">Samarbejdspartner</Heading>
                            </Flex>
                            <Text>
                                Når i arbejder sammen med Better Developers får i samtidigt en samarbejdspartner der involverer sig aktivt i
                                jeres forretning. Vi ved at der ligger flere tanker bagved de systemer i gerne vil have udviklet.
                                Partnerskabsstrukturen gør det nemt for alle vores udviklere at dele deres tanker på en specifik opgave, så
                                i får den bedst mulige rådgivning hver gang.
                            </Text>
                        </Flex>
                    </SectionItem>

                    <SectionItem px={8}>
                        <Flex flexDir="column" gap="1em" flex="1">
                            <Flex gap={2} alignItems="center">
                                <Icon as={VscSymbolMisc} fontSize="5xl" />

                                <Heading size="md">OpenAI API</Heading>
                            </Flex>
                            <Text>
                                Kunstig intelligens er kommet for at blive og derfor har vi specialiseret os indenfor dette område. Vi
                                hjælper vores kunder ved at styrke deres konkurrenceevne ved at udnytte potentialet af kunstig intelligens.
                                Vi tilbyder ikke kun teknisk ekspertise, men også rådgivning om strategisk implementering af AI-løsninger,
                                dataprivatlivets betydning og overholdelse af gældende lovgivning.
                            </Text>
                        </Flex>
                    </SectionItem>
                </Section>

                <Section py={24}>
                    <SectionItem colStart={2} colSpan={2}>
                        <Flex flexDir="column" gap="4">
                            <Heading>Derfor skal du arbejde sammen med os.</Heading>
                            <Text>
                                Better Developers: Din pålidelige samarbejdspartner indenfor softwareudvikling og IT-konsulentydelser. Vi
                                kombinerer vores dygtige IT-konsulenter, forretningsforståelse og ekspertise inden for b.la. OpenAI API for
                                at levere skræddersyede løsninger til jeres behov.
                                <br />
                                <br />
                                Vores team af erfarne udviklere forstår, at teknisk ekspertise alene ikke er nok. Vi fokuserer på at forstå
                                dine forretningsmål og udfordringer for at skabe software, der driver jeres virksomhed fremad. Vi tilbyder
                                dygtige IT-konsulenter med omfattende erfaring inden for forskellige teknologier og brancher. Uanset om i
                                har brug for udvikling af en webapplikation, en mobilapp eller en skræddersyet softwareløsning, kan vi
                                levere kvalitetskode og innovative løsninger.
                                <br />
                                <br />
                                Som jeres samarbejdspartner prioriterer vi transparent kommunikation, rettidig levering og et agilt
                                samarbejde. Vi ser os selv som en del af dit team og arbejder tæt sammen med dig for at sikre succesfulde
                                resultater. Vores ekspertise inden for b.la. OpenAI API gør os i stand til at integrere avancerede kunstig
                                intelligens-funktioner i jeres applikationer, såsom naturlig sprogbehandling og automatiseret dataanalyse.
                                <br />
                                <br />
                                Arbejd sammen med Better Developers, og oplev fordelene ved at have en pålidelig partner, der forstår dine
                                forretningsmål, leverer dygtige IT-konsulenter og udnytter de nyeste teknologier som OpenAI API. Lad os
                                hjælpe dig med at skabe innovative og effektive softwareløsninger, der giver din virksomhed en
                                konkurrencemæssig fordel.
                                <br />
                                <br />
                                <Link href="/services">Se vores services her</Link>
                            </Text>
                        </Flex>
                    </SectionItem>
                    <SectionItem colStart={4} colSpan={2}>
                        <Center h="100%">
                            <Box w="70%">
                                <Image src={logoWireframe} alt="Logo wireframe" />
                            </Box>
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
                    {/* <SectionItem colStart={2} colSpan={4} pt={36}>
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
                    </SectionItem> */}
                    <SectionItem colStart={2} colSpan={4} pt={12} pb={4}>
                        <Heading color="white">Det siger andre</Heading>
                    </SectionItem>
                    <SectionItem colStart={2} colSpan={1}>
                        <ContactCard
                            name="Hans Nikolajsen"
                            title="Direktør"
                            quote={
                                'Better Developers har på kort tid imponeret os med deres tekniske ekspertise. Deres skræddersyede softwareløsninger har transformeret vores forretning og leveres altid til tiden. Vi anbefaler dem varmt til andre virksomheder.                                '
                            }
                        />
                    </SectionItem>
                    <SectionItem>
                        <ContactCard
                            name="Mark Henriksen"
                            title="IT-Udvikler"
                            quote={
                                'Vi er begejstrede for resultatet af vores samarbejde med Better Developers. Deres evne til at forstå vores behov og levere brugervenlige softwareløsninger er imponerende. Deres innovative tilgang og brug af avancerede teknologier som OpenAI API har været afgørende for vores succes. Vi ser frem til at fortsætte samarbejdet og udvikle endnu mere banebrydende løsninger sammen.                               '
                            }
                        />
                    </SectionItem>
                    <SectionItem>
                        <ContactCard
                            name="Hanne Ulrichsen"
                            title="Lead Developer"
                            quote={
                                'Vi er virkelig imponerede over Better Developers indsats. Deres talentfulde konsulenter har leveret softwareløsninger, der har øget vores produktivitet og konkurrenceevne. Vi er utroligt tilfredse med deres indsats og anbefaler dem uden tøven.'
                            }
                        />
                    </SectionItem>
                    <SectionItem>
                        <ContactCard
                            name="Martin Tranbjerg"
                            title="Direktør"
                            quote={
                                'Utroligt dygtige udviklere der kan deres tech-stacks og er hurtige til at forstå vores kode og forretning. Vi vil klart fortsætte vores samarbejde med dem.'
                            }
                        />
                    </SectionItem>
                </Section>

                <Section py={48}>
                    <SectionItem colStart={3} colEnd={5}>
                        <FAQ />
                    </SectionItem>
                </Section>
                <Section>
                    <SectionItem colStart={3} colSpan={2} py={4}>
                        <Heading textAlign="center">
                            Lyder det spændende? Så lad os tage en snak om hvordan vi kan føre din idé ud i livet.
                        </Heading>
                    </SectionItem>
                    <SectionItem colStart={3} colSpan={2} py={4}>
                        <Center>
                            <ContactButton></ContactButton>
                        </Center>
                    </SectionItem>
                </Section>
            </Flex>
        </>
    );
};

export default Home;
