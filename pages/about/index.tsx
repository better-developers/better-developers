import { Box, Card, Center, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { ContactButton } from '../../components/ContactButton/ContactButton';
import { DynamicThemeColor } from '../../components/DynamicThemeColor/DynamicThemeColor';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { HeroSectionLayout } from '../../components/HeroSectionLayout/HeroSectionLayout';
import { Section } from '../../components/Section/Section';
import { SectionItem } from '../../components/SectionItem/SectionItem';
import { TeamBetterDevelopers } from '../../components/TeamBetterDevelopers/TeamBetterDevelopers';
import { VimeoVideo } from '../../components/VimeoVideo/VimeoVideo';
import Linkedin1 from '../../public/img/linkedin-1.jpg';
import Linkedin2 from '../../public/img/linkedin-2.jpg';
import Linkedin31 from '../../public/img/linkedin-3-1.jpeg';
import Linkedin32 from '../../public/img/linkedin-3-2.jpeg';
import Linkedin4 from '../../public/img/linkedin-4.jpeg';

const About: React.FC = () => {
    return (
        <>
            <DynamicThemeColor color="#FAFCFE" />

            <Flex flexDir="column">
                <HeroSection colors={{ base: '#FAFCFE', primary: '#F7A75A', secondary: '#F7C661', tertiary: '#F8E668' }}>
                    <HeroSectionLayout
                        identifier="Om os"
                        heading={
                            <>
                                {'Vi er '}
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
                                Better Developers blev grundlagt i Aarhus i 2023 med en klar vision for at levere ekstraordinære
                                softwareløsninger. Vi arbejder hver dag på at udvikle de bedste og mest innovative løsninger indenfor
                                software.
                            </>
                        }
                        content={
                            <Stack alignItems="end" height={'100%'}>
                                <VimeoVideo id="828777583" />
                            </Stack>
                        }
                    />
                </HeroSection>
                <Section py={24}>
                    <SectionItem colStart={[1, 1, 3]} colSpan={2} py={4}>
                        <Heading textAlign="center" fontWeight="semibold">
                            Dygtige konsulenter, skarpe kompetencer og fællesskab
                        </Heading>
                    </SectionItem>
                    <SectionItem colStart={[1, 1, 3]} colSpan={2} py={4} textAlign="justify">
                        <Text>
                            Vores konsulenter er specialiserede inden for forskellige områder af softwareudvikling, hvilket giver os en bred
                            vifte af ekspertise og mulighed for at tackle selv de mest komplekse udfordringer.
                        </Text>
                    </SectionItem>
                </Section>

                <TeamBetterDevelopers />

                <Section py={8}>
                    <SectionItem colStart={[1, 1, 2]} colSpan={[6, 6, 2]} py={8}>
                        <Heading fontWeight={600}>
                            Historien bag{' '}
                            <Box
                                display="inline"
                                background="linear-gradient(90.77deg, #F7A75A 21.3%, #F8E869 71.67%);"
                                backgroundClip="text"
                                textColor="transparent">
                                Better Developers
                            </Box>
                        </Heading>
                        <Heading fontWeight={600}>- fortalt af vores CEO</Heading>
                    </SectionItem>
                    <SectionItem colStart={[1, 1, 2]}>
                        <Text textAlign="justify">
                            Det at skabe noget større i fællesskab med andre har altid været en drivkraft. Og når muligheden opstår, så er
                            det med at gribe dem.
                            <br />
                            <br />
                            Better Developers er opstået i fællesskab, på baggrund af et ønske om at skabe den ideelle arbejdsplads, hvor
                            der er fokus på det gode håndværk og et stærkt sammenhold. For at skabe dette miljø, satte vi tidligt i
                            processen et mål om at 50% af virksomheden skulle være ejet af medarbejderne.
                        </Text>
                    </SectionItem>
                    <SectionItem>
                        <Text textAlign="justify">
                            Således at vi i fællesskab kan drive visionen i mål og for at skabe mere end “bare” en arbejdsplads. Vores
                            antagelse er at det der driver os - at være del af projekter i vækst - også må være gældende for andre.
                            <br />
                            <br />
                            En vision kan være nok så god, men uden eksekvering er den ingenting. Det var derfor vigtigt fra start af at få
                            etableret et hold med kompetencer der komplimenterer hinanden. Men lige så vigtigt har det været at være en flok
                            af mennesker som kan have det sjovt og grine sammen.
                        </Text>
                    </SectionItem>
                    <SectionItem>
                        <Text textAlign="justify">
                            Først blev der lagt et fundament af forretningserfaring gennem Søren. Han bidrog med sin erfaring gennem egen
                            virksomhed BetterCompliance og sit arbejde som Risk & Security Director ved Visma.
                            <br />
                            <br />
                            Fundamentet for virksomheden var lagt, men vi kom ikke bredt nok ud til virksomhederne. Her kom Anders ind i
                            billedet, med et speciale i den ene hånd og Better Developers i den anden,
                        </Text>
                    </SectionItem>
                    <SectionItem>
                        <Text textAlign="justify">
                            formåede han at transformere og strømline salgsprocessen. Herfra tog det fart og det var tydeligt, at vi
                            manglede yderligere kompetencer. Vi skulle bruge en dedikeret og dygtig CTO, til at drive visionen om at være på
                            forkant med de nyeste teknologier og lave det bedste håndværk. Her kom Mikkel ind og tog ejerskab fra
                            begyndelsen og har været med til at forme det teknologiske fundament for forretningen og udvide vores
                            værktøjskasse.
                            <br />
                            <br />- Viktor Lundsgaard Andersen, CEO
                        </Text>
                    </SectionItem>
                </Section>

                <Section py={8}>
                    <SectionItem colStart={[1, 1, 2]} colSpan={2} py={8}>
                        <Heading fontWeight={600}>Følg med</Heading>
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
                    <SectionItem colSpan={2} colStart={2} rowSpan={2}>
                        <Link href="https://www.linkedin.com/feed/update/urn:li:activity:7095391933170114560">
                            <Center>
                                <Card w="80%" variant={'sectorCard'} overflow="hidden">
                                    <Image src={Linkedin31} alt="linkedin" />
                                </Card>
                            </Center>
                        </Link>
                    </SectionItem>
                    <SectionItem colSpan={2}>
                        <Link href="https://www.linkedin.com/feed/update/urn:li:activity:7095391933170114560">
                            <Center>
                                <Card w="80%" variant={'sectorCard'} overflow="hidden">
                                    <Image src={Linkedin32} alt="linkedin" />
                                </Card>
                            </Center>
                        </Link>
                    </SectionItem>
                    <SectionItem colSpan={2} colStart={4}>
                        <Link href="https://www.linkedin.com/feed/update/urn:li:activity:7099412445344997376">
                            <Center>
                                <Card w="80%" variant={'sectorCard'} overflow="hidden">
                                    <Image src={Linkedin4} alt="linkedin" />
                                </Card>
                            </Center>
                        </Link>
                    </SectionItem>
                </Section>
                <Section py={24}>
                    <SectionItem colStart={[1, 1, 3]} colSpan={2} py={4} px={16}>
                        <Heading textAlign="center">Ønsker du at lære os bedre at kende? Kom forbi til en kop kaffe i Aarhus</Heading>
                    </SectionItem>
                    <SectionItem colStart={[1, 1, 3]} colSpan={2} py={4}>
                        <Center>
                            <ContactButton />
                        </Center>
                    </SectionItem>
                </Section>
            </Flex>
        </>
    );
};

export default About;
