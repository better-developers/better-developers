'use client';
import { Box, Card, Center, Flex, Heading, Link, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { MdCheckCircle } from 'react-icons/md';
import { ApplicationForm } from '../../components/ApplicationForm/ApplicationForm';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { HeroSectionLayout } from '../../components/HeroSectionLayout/HeroSectionLayout';
import { Section } from '../../components/Section/Section';
import { SectionItem } from '../../components/SectionItem/SectionItem';
import { TeamBetterDevelopers } from '../../components/TeamBetterDevelopers/TeamBetterDevelopers';
import Linkedin1 from '../../public/img/linkedin-1.jpg';
import Linkedin2 from '../../public/img/linkedin-2.jpg';

const Career: React.FC = () => {
    return (
        <>
            <Flex flexDir="column">
                <HeroSection colors={{ base: '#FAFCFE', primary: '#F7A75A', secondary: '#F7C661', tertiary: '#F8E668' }}>
                    <HeroSectionLayout
                        identifier="Karriere"
                        heading={
                            <>
                                {'Bliv en del af '}
                                <Box
                                    display="inline"
                                    lineHeight={1}
                                    background="linear-gradient(90.77deg, #F7A75A 21.3%, #F8E869 71.67%);"
                                    backgroundClip="text"
                                    textColor="transparent"
                                    fontWeight="semibold">
                                    Better Developers.
                                </Box>
                            </>
                        }
                        paragraph={
                            <>
                                Uanset om du har brug for webudvikling, mobilapp-udvikling, AI-integrationer eller andre softwareløsninger,
                                leverer vi jer skræddersyede tjenester, der passer til jeres krav.
                                <br />
                                <br />
                                Vores erfarne konsulenter arbejder tæt sammen med jer for at sikre, at vi leverer en løsning, der opfylder
                                jeres forventninger og giver værdi til jeres virksomhed.
                            </>
                        }
                    />
                </HeroSection>

                <Section py={24}>
                    <SectionItem colStart={[1, 1, 3]} colSpan={2} py={4}>
                        <Heading textAlign="center" fontWeight="semibold">
                            Bliv en del af et fællesskab med et fælles mål og fælles fejring!
                        </Heading>
                    </SectionItem>
                    <SectionItem colStart={[1, 1, 3]} colSpan={2} py={4} textAlign="center">
                        <Text>
                            Bliv en del af et varmt og indbydende fællesskab hos Better Developers, hvor vi deler et fælles mål og fejrer
                            vores succeser sammen. Vi værdsætter vores medarbejdere som en del af vores udvidede familie og tilbyder endda
                            muligheden for medejerskab af vores virksomhed. Som en del af vores team vil du opleve den unikke fornemmelse af
                            fællesskab, hvor vi støtter hinanden, dyrker kreativitet og skaber en fantastisk arbejdsplads. Kom og bliv en
                            del af Better Developers, hvor vi skaber både professionel vækst og en glædelig arbejdsoplevelse.
                        </Text>
                    </SectionItem>
                </Section>

                <Section pb={32}>
                    <SectionItem colStart={[1, 1, 2]} colSpan={2} py={8}>
                        <Heading fontWeight={600}>Følg med i dagligdagen</Heading>
                    </SectionItem>
                    <SectionItem colStart={[1, 1, 2]} colSpan={2}>
                        <Link href="https://www.linkedin.com/feed/update/urn:li:activity:7038197349411647488">
                            <Center>
                                <Card w="80%" variant={'sectorCard'} overflow="hidden">
                                    <Image src={Linkedin1} alt="linkedin" />
                                </Card>
                            </Center>
                        </Link>
                    </SectionItem>
                    <SectionItem colSpan={2}>
                        <Link href="https://www.linkedin.com/feed/update/urn:li:activity:7038197349411647488">
                            <Center>
                                <Card w="80%" variant={'sectorCard'} overflow="hidden">
                                    <Image src={Linkedin2} alt="linkedin" />
                                </Card>
                            </Center>
                        </Link>
                    </SectionItem>
                </Section>

                <TeamBetterDevelopers />

                <Section pt={24} pb={16}>
                    <SectionItem px={8} py={16} colStart={2} colSpan={[6, 6, 2]}>
                        <Heading size="2xl">
                            Hvorfor{' '}
                            <Box
                                display="inline"
                                lineHeight={1}
                                background="linear-gradient(90.77deg, #F7A75A 21.3%, #F8E869 71.67%);"
                                backgroundClip="text"
                                textColor="transparent"
                                fontWeight="semibold">
                                Better Developers?
                            </Box>
                        </Heading>
                    </SectionItem>

                    <SectionItem px={8} colStart={2}>
                        <Flex flexDir="column" gap="1em" flex="1">
                            <Flex gap={2}>
                                <Heading color="black" size="md">
                                    Virksomhedskultur
                                </Heading>
                            </Flex>
                            <Text textAlign="justify">
                                Hos Better Developers tilbyder vi mere end bare et job - vi skaber et fællesskab, hvor samarbejde, åbenhed
                                og positivitet er i fokus. Vi tror på værdien af et stærkt sammenhold, hvor medarbejdere støtter hinanden og
                                fejrer succeser sammen. Vi har skabt en arbejdsplads, hvor alle føler sig velkomne og respekterede, og hvor
                                der er plads til sjov og latter. Hos Better Developers bliver du en del af et fællesskab, hvor du kan trives
                                og vokse både personligt og fagligt.
                            </Text>
                        </Flex>
                    </SectionItem>

                    <SectionItem px={8}>
                        <Flex flexDir="column" gap="1em" flex="1">
                            <Flex gap={2}>
                                <Heading color="black" size="md">
                                    Karrieremuligheder
                                </Heading>
                            </Flex>
                            <Text textAlign="justify">
                                Hos Better Developers tror vi på at investere i vores medarbejderes karriereudvikling. Vi tilbyder et
                                stimulerende og udfordrende arbejdsmiljø, hvor du kan udforske nye teknologier og udvide dine færdigheder.{' '}
                                <br />
                                <br />
                                Vi tilbyder også regelmæssig træning og faglig udvikling for at sikre, at vores medarbejdere forbliver
                                opdaterede med de nyeste branchetrends og bedste praksis. Vi lægger vægt på at skabe en vej for
                                karriereudvikling og vækst, hvor medarbejdere kan avancere og påtage sig større ansvar og udfordringer over
                                tid. Vi er forpligtede til at støtte vores medarbejdere i at nå deres professionelle mål og skabe en
                                meningsfuld karriere inden for softwareudvikling.
                            </Text>
                        </Flex>
                    </SectionItem>

                    <SectionItem px={8}>
                        <Flex flexDir="column" gap="1em" flex="1">
                            <Flex gap={2}>
                                <Heading color="black" size="md">
                                    God work-life balance
                                </Heading>
                            </Flex>
                            <Text textAlign="justify">
                                Vi sætter en høj værdi på trivsel og velvære for vores medarbejdere. Vi forstår vigtigheden af at have en
                                balance mellem arbejde og privatliv, og vi stræber efter at skabe et miljø, der støtter og fremmer dette. Vi
                                tilbyder fleksible arbejdstider, muligheden for fjernarbejde og en afslappet og behagelig arbejdskultur.
                                <br />
                                <br />
                                Samtidig arbejder vi aktivt på at skabe en sund work-life balance gennem projekthåndtering og
                                ressourceallokering, så vores medarbejdere kan være produktive og opretholde en god balance i deres liv. Hos
                                Better Developers prioriterer vi vores medarbejderes trivsel og sikrer, at de har den rette støtte og
                                fleksibilitet til at opnå en sund og tilfredsstillende arbejds-balance.
                            </Text>
                        </Flex>
                    </SectionItem>

                    <SectionItem px={8}>
                        <Flex flexDir="column" gap="1em" flex="1">
                            <Flex gap={2}>
                                <Heading color="black" size="md">
                                    Belønning og anerkendelse
                                </Heading>
                            </Flex>
                            <Text textAlign="justify">
                                Hos Better Developers anerkender og belønner vi vores medarbejdere for deres bidrag og dedikation. Vi mener,
                                at det er vigtigt at fejre succeser og værdsætte det hårde arbejde, der lægges i projekterne. Vi tilbyder
                                konkurrencedygtige lønpakker og gode arbejdsforhold for vores medarbejdere. Men vi går ud over det
                                traditionelle og tilbyder også muligheden for medejerskab i virksomheden. Vi tror på, at når vores
                                medarbejdere er medejere, føler de sig endnu mere engagerede og motiverede til at skabe succes for både sig
                                selv og virksomheden.
                                <br />
                                <br />
                                Derudover har vi et anerkendelsesprogram, hvor vi fremhæver og belønner medarbejderes fremragende
                                præstationer og bidrag til vores fælles succes. Hos Better Developers bliver vores medarbejdere ikke kun
                                belønnet økonomisk, men de får også mulighed for at være en del af et fælles mål og føle sig værdsat og
                                anerkendt for deres indsats.
                            </Text>
                        </Flex>
                    </SectionItem>
                </Section>

                <Section pt={24} pb={16}>
                    <SectionItem colStart={[1, 1, 2]} colSpan={2} display="flex" flexDirection="column" gap={24}>
                        <Heading size="2xl">Send ansøgning</Heading>

                        <Flex marginLeft={4} direction="column" gap={4}>
                            <Heading size="md">Ansøgningen må gerne indeholde</Heading>

                            <List spacing={3} marginLeft={6}>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color="green.500" />
                                    Beskrivelse af dig selv
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color="green.500" />
                                    Relevante arbejdsinformationer
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color="green.500" />
                                    CV
                                </ListItem>
                            </List>
                        </Flex>
                    </SectionItem>

                    <SectionItem colStart={[1, 1, 4]} colSpan={2} display="flex" justifyContent="center">
                        <ApplicationForm variant="dark"></ApplicationForm>
                    </SectionItem>
                </Section>
            </Flex>
        </>
    );
};

export default Career;
