'use client';
import { Box, Center, Flex, Heading, Icon, Link, Stack, Text, Tooltip } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useContext, useEffect } from 'react';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';
import { IoPeopleCircle } from 'react-icons/io5';
import { VscSymbolMisc } from 'react-icons/vsc';
import { ContactButton } from '../components/ContactButton/ContactButton';
import { DynamicThemeColor } from '../components/DynamicThemeColor/DynamicThemeColor';
import FAQ from '../components/FAQ/FAQ';
import { Gradient } from '../components/Gradient/Gradient';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { HeroSectionLayout } from '../components/HeroSectionLayout/HeroSectionLayout';
import { Section } from '../components/Section/Section';
import { SectionItem } from '../components/SectionItem/SectionItem';
import { StaggerIn } from '../components/StaggerIn/StaggerIn';
import { VimeoVideo } from '../components/VimeoVideo/VimeoVideo';
import { NavBarContext } from '../contexts/NavBarContext';
import illustration1 from '../public/assets/consultancy-pack/Illustrations/consultant-illustrations-1.png';
import illustration7 from '../public/assets/consultancy-pack/Illustrations/consultant-illustrations-7.png';
import illustration9 from '../public/assets/consultancy-pack/Illustrations/consultant-illustrations-9.png';

type LogoObject = {
    tooltip: string;
    src: string;
};

const CompanyLogosImgSrc: LogoObject[] = [
    { src: 'android logo.svg', tooltip: 'Android' },
    { src: 'angular.svg', tooltip: 'Angular' },
    { src: 'csharp.svg', tooltip: 'C#' },
    { src: 'css.svg', tooltip: 'CSS' },
    { src: 'dotnet.svg', tooltip: '.NET' },
    { src: 'graphql.svg', tooltip: 'GraphQL' },
    { src: 'html.svg', tooltip: 'HTML' },
    { src: 'java.svg', tooltip: 'Java' },
    { src: 'javascript.svg', tooltip: 'Javascript' },
    { src: 'python.svg', tooltip: 'Python' },
    { src: 'react.svg', tooltip: 'React' },
    { src: 'typescript.svg', tooltip: 'Typescript' },
];

const Home: NextPage = () => {
    const [_context, setContext] = useContext(NavBarContext);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setContext('light'), []);

    return (
        <>
            <DynamicThemeColor color="#fff" />

            <Flex flexDir="column">
                <HeroSection
                    colors={{ base: 'white', primary: 'white', secondary: 'white', tertiary: 'white' }}
                    backgroundElement={
                        <Box width="100%" height="100%" zIndex="-1">
                            <Gradient />
                        </Box>
                    }>
                    <HeroSectionLayout
                        customHeading={
                            <>
                                <Heading
                                    fontSize={['2em', '2em', '4em', '4em']}
                                    fontWeight="400"
                                    mixBlendMode="overlay"
                                    transform="translate3d(0,0,0)" // hack to make mix-blend-mode work in safari https://stackoverflow.com/questions/70891365/css-mix-blend-mode-difference-issue-in-safari
                                    color="black">
                                    Et konsulenthus af
                                </Heading>
                                <Heading
                                    fontSize="4em"
                                    fontWeight="700"
                                    mixBlendMode="overlay"
                                    transform="translate3d(0,0,0)" // hack to make mix-blend-mode work in safari https://stackoverflow.com/questions/70891365/css-mix-blend-mode-difference-issue-in-safari
                                    color="black">
                                    udviklere.
                                </Heading>
                            </>
                        }
                        customParagraph={
                            <Text color="black">
                                Vi redefinerer det traditionelle it-konsulenthus i Danmark ved at have fokus på udviklerne helt fra vores
                                ejerskabstruktur, til hvordan vi arbejder med vores kunder.
                            </Text>
                        }
                        content={
                            <Stack justifyContent="flex-start" alignItems="end">
                                <VimeoVideo id="828819281" />
                            </Stack>
                        }
                    />
                </HeroSection>

                <StaggerIn.Parent animate="show">
                    <Section py={16}>
                        {CompanyLogosImgSrc.map(({ tooltip, src }, idx) => (
                            <SectionItem key={idx} colStart={(idx % 4) + 2} colSpan={1}>
                                <StaggerIn.Child>
                                    <Center py={4}>
                                        <Tooltip label={tooltip} fontSize="md">
                                            <Image width={60} height={60} key={src} src={`logos/${src}`} alt={tooltip} />
                                        </Tooltip>
                                    </Center>
                                </StaggerIn.Child>
                            </SectionItem>
                        ))}
                    </Section>
                </StaggerIn.Parent>

                <Section></Section>

                <Section py={16} backgroundColor={'red.50'}>
                    <SectionItem colStart={[1, 1, 2]} colSpan={[1, 1, 2]} px={8}>
                        <Text variant={'brandHighlight'}>Vores ydelser</Text>
                    </SectionItem>
                    <SectionItem px={8} colStart={[1, 1, 2]}>
                        <Flex flexDir="column" gap="2em" flex="1">
                            <Flex gap={2} alignItems="center">
                                <Icon as={BsFillRocketTakeoffFill} fontSize="5xl" />
                                <Heading size="md">Forretningsforståelse</Heading>
                            </Flex>
                            <Text>
                                Hos Better Developers er vi ikke blot udviklere, men også partnere. Derfor har vi en unik indsigt og
                                forståelse for hvad der skaber værdi for jeres forretning.
                            </Text>
                        </Flex>
                    </SectionItem>

                    <SectionItem px={8}>
                        <Flex flexDir="column" gap="2em" flex="1">
                            <Flex gap={2} alignItems="center">
                                <Icon as={IoPeopleCircle} fontSize="5xl" />
                                <Heading size="md">IT-Konsulenter</Heading>
                            </Flex>
                            <Text>
                                Kvalitet og det gode håndværk er i højsædet når vi skal udvikle IT systemer for vores kunder. Vi bruger
                                meget tid på faglig sparring og udvikling så vi altid kan levere de bedste resultater.
                            </Text>
                        </Flex>
                    </SectionItem>

                    <SectionItem px={8}>
                        <Flex flexDir="column" gap="2em" flex="1">
                            <Flex gap={2} alignItems="center">
                                <Icon as={HiChatBubbleLeftRight} fontSize="5xl" />

                                <Heading size="md">Samarbejdspartner</Heading>
                            </Flex>
                            <Text>
                                Vi har ikke kunder, vi har samarbejdspartnere. Vi involverer os aktivt i jeres forretning og giver nye
                                perspektiver på gængse problemer.
                            </Text>
                        </Flex>
                    </SectionItem>

                    <SectionItem px={8}>
                        <Flex flexDir="column" gap="2em" flex="1">
                            <Flex gap={2} alignItems="center">
                                <Icon as={VscSymbolMisc} fontSize="5xl" />

                                <Heading size="md">OpenAI API</Heading>
                            </Flex>
                            <Text>
                                Lad os hjælpe jer med at skabe værdi gennem kunstig intelligens. Vi kan identificere behovet for en
                                AI-løsning og understøtte en integration heraf.
                            </Text>
                        </Flex>
                    </SectionItem>
                </Section>

                <Section py={24}>
                    <SectionItem colStart={[1, 1, 2]} colSpan={2}>
                        <Flex flexDir="column" gap="8">
                            <Heading>Derfor skal du arbejde sammen med os.</Heading>

                            <Text>
                                Better Developers: Din pålidelige samarbejdspartner indenfor softwareudvikling og IT-konsulentydelser. Vi
                                kombinerer vores dygtige IT-konsulenter, forretningsforståelse og ekspertise inden for bl.a. OpenAI API for
                                at levere skræddersyede løsninger til jeres behov.
                                <br />
                                <br />
                                Vores team af erfarne udviklere forstår, at teknisk ekspertise alene ikke er nok. Vi fokuserer på at forstå
                                dine forretningsmål og udfordringer for at skabe software, der driver jeres virksomhed fremad. Vi tilbyder
                                dygtige IT-konsulenter med omfattende erfaring inden for forskellige teknologier og brancher. Uanset om I
                                har brug for udvikling af en webapplikation, en mobilapp eller en skræddersyet softwareløsning, kan vi
                                levere kvalitetskode og innovative løsninger.
                                <br />
                                <br />
                                Som jeres samarbejdspartner prioriterer vi transparent kommunikation, rettidig levering og et agilt
                                samarbejde. Vi ser os selv som en del af dit team, og vi arbejder tæt sammen med dig for at sikre
                                succesfulde resultater. Vores ekspertise inden for bl.a. OpenAI API gør os i stand til at integrere
                                avancerede kunstig intelligens-funktioner i jeres applikationer, såsom naturlig sprogbehandling og
                                automatiseret dataanalyse.
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
                    <SectionItem colStart={[1, 1, 4]} colSpan={3}>
                        <Center h="100%">
                            <Box w="90%">
                                <Image src={illustration7} alt="Logo wireframe" />
                            </Box>
                        </Center>
                    </SectionItem>
                </Section>

                <Section>
                    <SectionItem colSpan={2} paddingTop={24}>
                        <Flex h="100%" justifyContent="flex-end">
                            <Box w="50%">
                                <Image src={illustration1} alt="Illustration" />
                            </Box>
                        </Flex>
                    </SectionItem>

                    <SectionItem colStart={[1, 1, 3]} colEnd={5} colSpan={[6, 6, 2]}>
                        <FAQ />
                    </SectionItem>

                    <SectionItem colSpan={2}>
                        <Flex h="100%" paddingTop={32}>
                            <Box pl={8} w="40%">
                                <Image style={{ transform: 'scaleX(-1) rotate(-25deg)' }} src={illustration9} alt="Illustration" />
                            </Box>
                        </Flex>
                    </SectionItem>
                </Section>

                <Section py={24}>
                    <SectionItem colStart={[1, 1, 3]} colSpan={2} py={4}>
                        <Heading textAlign="center">
                            Lyder det spændende? Så lad os tage en snak om hvordan vi kan føre din idé ud i livet.
                        </Heading>
                    </SectionItem>
                    <SectionItem colStart={[1, 1, 3]} colSpan={2} py={4}>
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
