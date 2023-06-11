import { Box, Button, Center, Flex, Heading, Link, ListItem, OrderedList, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { ContactButton } from '../../components/ContactButton/ContactButton';
import { Section } from '../../components/Section/Section';
import { SectionItem } from '../../components/SectionItem/SectionItem';
import HeroComp from '../../public/hero-comp.png';
import ServicesHero from '../../public/services-hero.svg';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { HeroSectionLayout } from '../../components/HeroSectionLayout/HeroSectionLayout';

const Services: React.FC = () => {
    return (
        <>
            <Flex flexDir="column">
                <HeroSection colors={{ base: 'brand.50', primary: '#F8CA62', secondary: '#F8E468', tertiary: 'brand.400' }}>
                    <HeroSectionLayout
                        identifier="Services"
                        heading={<>Software services tilpasset dine behov</>}
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
                        content={
                            <Stack alignItems="center" height={'100%'}>
                                <Box w="70%">
                                    <Image src={ServicesHero} alt="Computer image" />
                                </Box>
                            </Stack>
                        }
                    />
                </HeroSection>

                <Section py={24}>
                    <SectionItem colStart={3} colSpan={2} py={4}>
                        <Heading textAlign="center" fontWeight="semibold">
                            Vores kerne tjenester indenfor softwareudvikling
                        </Heading>
                    </SectionItem>
                    <SectionItem colStart={3} colSpan={2} py={4} textAlign="center">
                        <Text>
                            Vores kerne tjenester inden for softwareudvikling omfatter:
                            <br /> <br />
                        </Text>
                        <OrderedList textAlign="left" spacing={4}>
                            <ListItem>
                                <b>Webudvikling</b>: Vi leverer skræddersyede webapplikationer og websites, der er optimeret til at opfylde
                                dine specifikke behov og levere en god brugeroplevelse.
                            </ListItem>
                            <ListItem>
                                <b>Mobilapp-udvikling</b>: Vi udvikler innovative og brugervenlige mobilapplikationer til både iOS og
                                Android-platforme, der hjælper dig med at nå ud til din målgruppe og skabe værdi.
                            </ListItem>

                            <ListItem>
                                <b>AI-integrationer</b>: Vi har ekspertise i at integrere kunstig intelligens (AI) i dine eksisterende
                                systemer eller udvikle nye AI-baserede løsninger. Dette omfatter chatbots, maskinlæringsalgoritmer,
                                billedgenkendelse, naturlig sprogbehandling og meget mere.
                            </ListItem>
                            <ListItem>
                                <b>Cloud-løsninger</b>: Vi hjælper med at migrere dine applikationer og data til sikre og skalerbare
                                cloud-platforme som f.eks. Amazon Web Services (AWS) eller Microsoft Azure, hvilket giver dig fleksibilitet
                                og mulighed for at udnytte fordelene ved skyen.
                            </ListItem>
                            <ListItem>
                                <b>Softwarevedligeholdelse og support</b>: Vi tilbyder vedligeholdelse og support af din eksisterende
                                softwareapplikation, herunder fejlrettelser, ydeevneoptimering og opdateringer for at sikre, at den
                                forbliver stabil og opdateret over tid.
                            </ListItem>
                        </OrderedList>
                    </SectionItem>
                </Section>

                <Section py={32} bgColor="blue.800" id="end-to-end">
                    <SectionItem colStart={2} colSpan={2}>
                        <Stack gap={4}>
                            <Heading color="white">End-to-end projekter</Heading>
                            <Text color="white">
                                Vores tilgang til end-to-end softwareudviklingsprojekter indebærer et tæt samarbejde og partnerskab med
                                vores kunder. Vi ser os selv som en forlængelse af jeres team og arbejder sammen med jer for at sikre, at
                                projektet opfylder jeres forventninger og forretningsmål. Her er nogle af de måder, vi samarbejder med jer
                                som en troværdig partner:
                            </Text>
                            <OrderedList color="white" spacing={4}>
                                <ListItem>
                                    Behovsanalyse og kravafklaring: Vi starter med en grundig behovsanalyse, hvor vi lytter til jeres mål,
                                    forretningsprocesser og krav. Vi arbejder sammen med jer for at definere klare og specifikke krav til
                                    projektet, så vi har en fælles forståelse af jeres behov og mål.
                                </ListItem>
                                <ListItem>
                                    Tæt kommunikation og regelmæssig rapportering: Vi prioriterer åben kommunikation og regelmæssig
                                    rapportering for at holde jer opdaterede på projektets fremskridt. Vi arrangerer møder,
                                    fremskridtsrapporter og feedback-sessioner, hvor vi sikrer, at vi er på samme side, og eventuelle
                                    ændringer eller tilpasninger kan diskuteres og implementeres effektivt.
                                </ListItem>
                                <ListItem>
                                    Iterativ udviklingsproces: Vi følger en iterativ udviklingsproces, der giver mulighed for hyppige
                                    feedback-loops. Dette giver jer mulighed for at give input undervejs og sikrer, at projektet udvikler
                                    sig i den rigtige retning. Vi vægter jeres input og tilpasser vores tilgang og løsninger for at
                                    imødekomme jeres behov.
                                </ListItem>
                                <ListItem>
                                    Fleksibilitet og tilpasningsevne: Vi er fleksible og tilpasningsdygtige i vores tilgang til at arbejde
                                    med jer som samarbejdspartner. Vi forstår, at behov og krav kan ændre sig undervejs, og vi er parate til
                                    at tilpasse os og levere de nødvendige ændringer eller tilføjelser til projektet.
                                </ListItem>
                                <ListItem>
                                    Langsigtet support: Vores partnerskab stopper ikke, når projektet er afsluttet. Vi tilbyder langsigtet
                                    support og vedligeholdelse af den udviklede software. Vi er der for at hjælpe med eventuelle spørgsmål,
                                    fejlrettelser eller ydeevneoptimeringer og sikre, at jeres software fungerer optimalt over tid. Ved at
                                    arbejde som en samarbejdspartner er vores mål at opbygge et tillidsfuldt forhold, hvor vi forstår jeres
                                    behov, lytter til jeres ønsker og leverer skræddersyede løsninger, der hjælper jer med at opnå succes.
                                    Vi stræber efter at være en pålidelig og langsigtet partner, der er dedikeret til jeres succes og vækst.
                                </ListItem>
                            </OrderedList>
                            <Text>
                                <br />
                                <Link color="white">Se processen</Link>
                                <br />
                                <Link color="white">Se tidligere cases</Link>
                            </Text>
                        </Stack>
                    </SectionItem>
                    <SectionItem colSpan={2}>
                        <Center h="100%">
                            <Box w="70%">{/* <Image src={HeroComp} alt="Computer image" /> */}</Box>
                        </Center>
                    </SectionItem>
                </Section>
                <Section py={32} id="consultants">
                    <SectionItem colStart={2} colSpan={2}>
                        <Center h="100%">
                            <Box w="70%">{/* <Image src={HeroComp} alt="Computer image" /> */}</Box>
                        </Center>
                    </SectionItem>
                    <SectionItem colSpan={2}>
                        <Stack gap={4}>
                            <Heading>Software konsulenter</Heading>
                            <Text>
                                Vores konsulenthus er stolt af at have et team af dygtige og erfarne konsulenter, der er dedikerede til at
                                levere højkvalitetssoftwareløsninger. Vores konsulenter er eksperter inden for deres respektive fagområder
                                og har omfattende viden om de nyeste teknologier og udviklingsmetoder. Vi tilbyder vores kunder adgang til
                                dette ekspertise gennem vores konsulentydelser, hvor vores konsulenter arbejder tæt sammen med jer for at
                                forstå jeres unikke behov og levere skræddersyede løsninger.
                                <br />
                                <br />
                                Vores konsulentteam omfatter specialister inden for forskellige teknologier og programmeringssprog, herunder
                                Java, C#, Python, JavaScript, PHP og meget mere. Uanset om I har brug for backend-udviklere,
                                frontend-designere, cloud-arkitekter eller AI-specialister, kan vi sammensætte det rette team af konsulenter
                                med de nødvendige kompetencer for at imødekomme jeres specifikke krav. Vi sikrer, at vores konsulenter er
                                opdaterede med den seneste viden og udstyrer dem med de værktøjer og ressourcer, de har brug for, for at
                                levere den bedst mulige service til vores kunder.
                                <br />
                                <Link>Se hvem vi er</Link>
                            </Text>
                        </Stack>
                    </SectionItem>
                </Section>

                <Section py={12}>
                    <SectionItem colStart={3} colSpan={2} py={4}>
                        <Heading textAlign="center">
                            Er du klar til at omsætte din idé til virkelighed?
                            <br />
                            <br />
                            Lad os bringe din vision til live sammen!
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

export default Services;
