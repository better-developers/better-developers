import { Box, Card, Center, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ContactButton } from '../../components/ContactButton/ContactButton';
import { DynamicThemeColor } from '../../components/DynamicThemeColor/DynamicThemeColor';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { HeroSectionLayout } from '../../components/HeroSectionLayout/HeroSectionLayout';
import { Section } from '../../components/Section/Section';
import { SectionItem } from '../../components/SectionItem/SectionItem';
import illustration5 from '../../public/assets/consultancy-pack/illustrations/consultant-illustrations-5.png';
import illustration6 from '../../public/assets/consultancy-pack/illustrations/consultant-illustrations-6.png';
import illustration8 from '../../public/assets/consultancy-pack/illustrations/consultant-illustrations-8.png';

type Service = {
    src: string;
    title: string;
    description: string;
};

const services: Service[] = [
    {
        src: 'consultant-icon-1.png',
        title: 'Webudvikling',
        description: `Vi leverer skræddersyede webapplikationer og websites, der er optimeret til at opfylde
        dine specifikke behov og levere en god brugeroplevelse.`,
    },
    {
        src: 'consultant-icon-2.png',
        title: 'App-udvikling',
        description: `Vi udvikler innovative og brugervenlige applikationer til både iOS og
        Android-platforme.`,
    },
    {
        src: 'consultant-icon-3.png',
        title: 'AI-integrationer',
        description: `Vi har ekspertise i at integrere kunstig intelligens (AI) i dine eksisterende
        systemer eller udvikle nye AI-baserede løsninger.`,
    },
    {
        src: 'consultant-icon-4.png',
        title: 'Cloud-løsninger',
        description: `Vi hjælper med at migrere dine applikationer og data til sikre og skalerbare
        cloud-platforme som f.eks. Amazon Web Services (AWS) eller Microsoft Azure.`,
    },
    {
        src: 'consultant-icon-5.png',
        title: 'Vedligeholdelse',
        description: `Vi tilbyder vedligeholdelse og support af din eksisterende
        softwareapplikation, herunder fejlrettelser, ydeevneoptimering og opdateringer for at sikre, at den
        forbliver stabil og opdateret over tid.`,
    },
];

const Services: React.FC = () => {
    return (
        <>
            <DynamicThemeColor color="brand.50" />

            <Flex flexDir="column">
                <HeroSection colors={{ base: 'brand.50', primary: '#F8CA62', secondary: '#F8E468', tertiary: 'brand.400' }}>
                    <HeroSectionLayout
                        identifier="Services"
                        heading={<>Software services tilpasset dine behov</>}
                        paragraph={
                            <>
                                Uanset om du har brug for webudvikling, mobilapp-udvikling, AI-integrationer eller andre softwareløsninger,
                                leverer vi jer skræddersyede tjenester, der passer til jeres krav.
                            </>
                        }
                        content={
                            <Stack alignItems="center" justifyContent="center" height={'100%'}>
                                <Box w="70%">
                                    <Image src={illustration8} alt="illustration" />
                                </Box>
                            </Stack>
                        }
                    />
                </HeroSection>
                <Section pt={24}>
                    <SectionItem colStart={[1, 1, 3]} colSpan={2} py={4}>
                        <Heading textAlign="center" fontWeight="semibold" px={4}>
                            Vores kerne tjenester indenfor softwareudvikling
                        </Heading>
                    </SectionItem>
                </Section>

                <Section pt={8} pb={[12, 12, 12, 24]}>
                    {services.map(({ src, title, description }, idx) => (
                        <SectionItem key={idx} colStart={[0, 0, 0, ((idx * 2) % 4) + 2]} colSpan={2} justifyContent="stretch">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        type: 'spring',
                                        bounce: 0.3,
                                        delay: 0.3 * idx,
                                    },
                                }}
                                viewport={{
                                    once: true,
                                }}>
                                <Center>
                                    <Card variant="outline" h="100%" w="100%">
                                        <Stack py={8} px={[4, 4, 4, 8]} alignItems="center" gap={4} h="100%">
                                            <Image
                                                src={`assets/consultancy-pack/icons/dark/${src}`}
                                                width={50}
                                                height={50}
                                                alt="illustration"
                                            />
                                            <Text
                                                fontSize={['md', 'md', 'md', 'xl']}
                                                fontWeight="bold"
                                                textAlign={['center', 'center', 'center', 'left']}
                                                css={{ hyphens: 'auto' }}>
                                                {title}
                                            </Text>
                                            <Text textAlign="justify" fontSize="sm">
                                                {description}
                                            </Text>
                                        </Stack>
                                    </Card>
                                </Center>
                            </motion.div>
                        </SectionItem>
                    ))}
                </Section>

                <Section py={[8, 8, 8, 32]} bgColor="blue.800" id="end-to-end">
                    <SectionItem colStart={[1, 1, 2]} colSpan={2}>
                        <Stack gap={4} p={4}>
                            <Heading color="white">End-to-end projekter</Heading>
                            <Text color="white">
                                Vores tilgang til end-to-end softwareudviklingsprojekter indebærer et tæt samarbejde og partnerskab med
                                vores kunder. Vi ser os selv som en forlængelse af jeres team og arbejder sammen med jer for at sikre, at
                                projektet opfylder jeres forventninger og forretningsmål. Her er nogle af de måder, vi samarbejder med jer
                                som en troværdig partner:
                            </Text>

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
                            <Box w="70%">
                                <Image src={illustration6} alt="Computer image" />
                            </Box>
                        </Center>
                    </SectionItem>
                </Section>

                <Section py={[16, 16, 16, 32]} id="consultants">
                    <SectionItem colStart={[1, 1, 2]} colSpan={2}>
                        <Center h="100%">
                            <Box w="70%">
                                <Image src={illustration5} alt="Computer image" />
                            </Box>
                        </Center>
                    </SectionItem>
                    <SectionItem colSpan={2}>
                        <Stack gap={4} p={4}>
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

                <Section py={[0, 0, 0, 12]}>
                    <SectionItem colStart={[1, 1, 3]} colSpan={2} py={4}>
                        <Heading textAlign="center">Er du klar til at omsætte din idé til virkelighed?</Heading>
                        <Heading textAlign="center" fontSize="2xl">
                            <br />
                            <br />
                            Lad os bringe din vision til live sammen!
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

export default Services;
