import { Box, Button, Card, Center, Flex, Heading, Icon, Link, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { IoPersonAdd } from 'react-icons/io5';
import { Section } from '../../components/Section/Section';
import { SectionItem } from '../../components/SectionItem/SectionItem';
import HeroComp from '../../public/hero-comp.png';
import Linkedin1 from '../../public/img/linkedin-1.jpg';
import Linkedin2 from '../../public/img/linkedin-2.jpg';
import Employee1 from '../../public/placeholder-employee-1.png';
import Employee2 from '../../public/placeholder-employee-2.png';
import Employee3 from '../../public/placeholder-employee-3.png';
import Employee4 from '../../public/placeholder-employee-4.png';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const About: React.FC = () => {
    return (
        <>
            <Flex flexDir="column">
                <Flex height="650px" alignItems="end" position="relative">
                    <Section position="absolute" height="100%">
                        <SectionItem px={0} colSpan={6}>
                            <Box
                                top={50}
                                bgColor="#F7A75A"
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
                                bgColor="#F7C661"
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
                                bgColor="#F8E668"
                                backgroundSize="cover"
                                width="100%"
                                height="100%"
                                position="absolute"
                                clipPath="polygon(0px 0px, 100% 0px, 100% 65%, 0px 100%)"
                            />
                        </SectionItem>
                        <SectionItem px={0} colSpan={6}>
                            <Box
                                bgColor="#FAFCFE"
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
                                    <Text variant="brandHighlight">Om os</Text>
                                    <Heading fontSize="4em" fontWeight="400" color="black">
                                        Vi er{' '}
                                        <Box
                                            display="inline"
                                            lineHeight={1}
                                            background="linear-gradient(90.77deg, #F7A75A 21.3%, #F8E869 71.67%);"
                                            backgroundClip="text"
                                            textColor="transparent"
                                            fontWeight="semibold"
                                        >
                                            Better Developers.
                                        </Box>
                                    </Heading>
                                </Flex>

                                <Text lineHeight="1.5" w="80%" color="black">
                                    Better Developers blev grundlagt i Aarhus i 2023 med en klar vision for at levere ekstraordinære
                                    softwareløsninger. Vi arbejder hver dag på at udvikle de bedste og mest innovative løsninger indenfor
                                    software.
                                </Text>

                                <Button variant="brand" w="fit-content">
                                    Call to action
                                </Button>
                            </Stack>
                        </SectionItem>
                        <SectionItem colStart={4} colEnd={6}>
                            <Stack alignItems="end" height={'100%'}>
                                <ReactPlayer
                                    url="https://vimeo.com/828819281"
                                    controls
                                    width="80%"
                                    style={{
                                        filter: 'drop-shadow(5px 5px 10px #666)',
                                    }}
                                />
                            </Stack>
                        </SectionItem>
                    </Section>
                </Flex>
                <Section py={24}>
                    <SectionItem colStart={3} colSpan={2} py={4}>
                        <Heading textAlign="center" fontWeight="semibold">
                            Dygtige konsulenter, skarpe kompetencer og fællesskab
                        </Heading>
                    </SectionItem>
                    <SectionItem colStart={3} colSpan={2} py={4} textAlign="center">
                        <Text>
                            Vores team af dygtige konsulenter hos Better Developers er stolte af deres skarpe kompetencer og evnen til at
                            levere fremragende resultater. Vi tror på betydningen af fællesskabet og trækker på hinandens styrker for at
                            opnå enestående succes. Vores konsulenter er specialiserede inden for forskellige områder af softwareudvikling,
                            hvilket giver os en bred vifte af ekspertise og mulighed for at tackle selv de mest komplekse udfordringer. Vi
                            arbejder tæt sammen med vores kunder for at forstå deres behov og levere skræddersyede løsninger, der overgår
                            forventningerne. Vores fokus er altid at skabe værdi, drive innovation og opbygge langvarige partnerskaber med
                            vores kunder.
                        </Text>
                    </SectionItem>
                </Section>

                <Section py={8} bgColor="#535266">
                    <SectionItem colStart={2} colSpan={2} py={8}>
                        <Text variant="brandHighlight">Mød holdet</Text>
                        <Heading color="white">Team Better Developers</Heading>
                    </SectionItem>
                    <SectionItem colStart={2}>
                        <Image src={Employee1} alt="Employee" />
                    </SectionItem>
                    <SectionItem>
                        <Image src={Employee2} alt="Employee" />
                    </SectionItem>
                    <SectionItem>
                        <Image src={Employee3} alt="Employee" />
                    </SectionItem>
                    <SectionItem>
                        <Image src={Employee4} alt="Employee" />
                    </SectionItem>
                    <SectionItem colSpan={6} py={12}>
                        <Center>
                            <Link href="/career">
                                <Button variant="brand" leftIcon={<Icon as={IoPersonAdd} fontSize="xl" />}>
                                    Tilføj person
                                </Button>
                            </Link>
                        </Center>
                    </SectionItem>
                </Section>

                <Section py={8}>
                    <SectionItem colStart={2} colSpan={2} py={8}>
                        <Heading fontWeight={600}>
                            Historien bag{' '}
                            <Box
                                display="inline"
                                background="linear-gradient(90.77deg, #F7A75A 21.3%, #F8E869 71.67%);"
                                backgroundClip="text"
                                textColor="transparent"
                            >
                                Better Developers
                            </Box>
                        </Heading>
                        <Heading fontWeight={600}>- fortalt af vores CEO</Heading>
                    </SectionItem>
                    <SectionItem colStart={2}>
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
                    <SectionItem colStart={2} colSpan={2} py={8}>
                        <Heading fontWeight={600}>Følg med</Heading>
                    </SectionItem>
                    <SectionItem colStart={2} colSpan={2}>
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
                <Section py={24}>
                    <SectionItem colStart={3} colSpan={2} py={4} px={16}>
                        <Heading textAlign="center">Ønsker du at lære os bedre at kende? Kom forbi til en kop kaffe i Aarhus</Heading>
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

export default About;
