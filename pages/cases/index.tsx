import { Box, Center, Flex, Grid, GridItem, Heading, Link, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { CaseCard } from '../../components/CaseCard/CaseCard';
import { ContactButton } from '../../components/ContactButton/ContactButton';
import { DynamicThemeColor } from '../../components/DynamicThemeColor/DynamicThemeColor';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { HeroSectionLayout } from '../../components/HeroSectionLayout/HeroSectionLayout';
import { Section } from '../../components/Section/Section';
import { SectionItem } from '../../components/SectionItem/SectionItem';
import { Case } from '../../models/case';
import CasesHero from '../../public/cases-hero.svg';
import PlaceholderCardImage from '../../public/placeholder-card-image.png';
import illustration2 from '../../public/assets/consultancy-pack/Illustrations/consultant-illustrations-2.png';

const Cases: NextPage = () => {
    const cases: Case[] = [
        {
            image: PlaceholderCardImage,
            title: 'Interaktiv frontend skaber højere engagement på dating PWA',
            content: (
                <Text textAlign="justify">
                    <Link>Læs mere...</Link>
                </Text>
            ),
        },

        {
            image: PlaceholderCardImage,
            title: 'Triangulering af offentlige wifi-signaler skaber heatmap af befolkningstæthed',
            content: (
                <Text textAlign="justify">
                    Mange institutioner har et behov for at kende befolkningstætheden eller personers bevægelse igennem en bygning. Ved
                    hjælp af wifi-signaler kunne folks bevægelser estimeres hvorefter der på frontend kunne skabes et heatmap af tæthederne.
                    <br />
                    <br />
                    <i>Projektet er et koncept udviklet i Vue med en .NET core backend med RaspBerry Pi baserede wifi sniffers.</i>
                    <br />
                    <br />
                    <Link>Læs mere...</Link>
                </Text>
            ),
        },
        {
            image: PlaceholderCardImage,
            title: 'Automatiseret udfyldelse af bogføringsprocedure forsimpler implementering af ny lovgivning',
            content: <Text textAlign="justify">Ved at automatisere</Text>,
        },
        {
            image: PlaceholderCardImage,
            title: 'Agro faglig viden og landbrugsdata forenes i værdiskabende web app',
            content: (
                <Text textAlign="justify">
                    Ved at kombinere agrofaglig viden med tilgængelig landbrugs og geodata, så var det muligt at skabe en web platform der
                    kunne hjælpe landmændende med at beregne mængden af næringsstoffer og vand. Dette har både en økonomisk og en mijømæssig
                    gevinst for landmændene og vores samfund.
                    <br />
                    <br />
                    <Link>Læs mere...</Link>
                </Text>
            ),
        },
        {
            image: PlaceholderCardImage,
            title: 'Forsikringssystem',
            content: <Text textAlign="justify"></Text>,
        },
        {
            image: PlaceholderCardImage,
            title: 'Web Assembly og SignalR gør det lettere at samarbejde om LaTeX dokumenter',
            content: (
                <Text textAlign="justify">
                    Hvad der før i tiden skulle køres lokalt på enkelte maskiner, kan nu ved hjælp af Web Assembly og SignalR gøres i en
                    webbrowser uden komplicerede installationer.
                    <br />
                    <br />
                    <i>
                        Projektet er skrevet i React med en .NET core backend. Pga. projektets høje kompleksitet og lange levetid, så er
                        backenden baseret på en onion arkitektur med mediator pattern for at følge SOLID og clean code principperne.
                    </i>
                </Text>
            ),
        },
    ];

    return (
        <>
            <DynamicThemeColor color="blue.50" />

            <Flex flexDir="column">
                <HeroSection colors={{ base: 'blue.50', primary: 'blue.100', secondary: 'blue.200', tertiary: 'blue.500' }}>
                    <HeroSectionLayout
                        identifier="Cases"
                        heading={<>Reelle virksomheder med reelle udfordringer</>}
                        paragraph={
                            <>
                                Udforsk vores virksomhedscases og opdag, hvordan Better Developers har hjulpet vores kunder med at opnå
                                digitale succeser gennem skræddersyede softwareløsninger.
                                <br />
                                <br />
                                Vores dygtige konsulenter og innovative tilgang har skabt mærkbare resultater og tilfredse kunder inden for
                                forskellige brancher.
                            </>
                        }
                        content={
                            <Stack alignItems="center" justifyContent="center" height={'100%'}>
                                <Box w="70%">
                                    <Image src={illustration2} alt="Computer image" />
                                </Box>
                            </Stack>
                        }
                    />
                </HeroSection>

                <Section py={24}>
                    <SectionItem colStart={[1, 1, 3]} colSpan={2} py={4}>
                        <Heading textAlign="center" fontWeight="semibold">
                            Vores tidligere samarbejder indenfor softwareuvikling
                        </Heading>
                    </SectionItem>
                    <SectionItem colStart={[1, 1, 3]} colSpan={2} py={4} textAlign="center">
                        <Text textAlign="justify">
                            Uanset om det er inden for sundhedssektoren, finansverdenen eller detailhandlen, har vores løsninger
                            transformeret vores kunders forretning og sikret dem en konkurrencemæssig fordel. Udforsk vores cases for at se,
                            hvordan vi har skabt digital succes og tilfredse kunder gennem vores teknologiske ekspertise.
                        </Text>
                    </SectionItem>
                </Section>

                <Section>
                    <SectionItem colStart={[1, 1, 2]} colSpan={4}>
                        <Grid gridTemplateColumns="repeat(4,1fr)" gridTemplateRows="1fr 0.5fr 1fr" gap={8}>
                            {cases.map((c, index) => (
                                <GridItem key={index} colSpan={[8, 8, 2]} rowSpan={index % 5 ? 2 : 1} minW={0} minH={0} h="100%">
                                    <CaseCard image={c.image} title={c.title}>
                                        {c.content}
                                    </CaseCard>
                                </GridItem>
                            ))}
                        </Grid>
                    </SectionItem>
                </Section>

                <Section py={24}>
                    <SectionItem colStart={[1, 1, 3]} colSpan={2} py={4} px={16}>
                        <Heading textAlign="center">Vil du høre mere? Vi elsker at fortælle!</Heading>
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

export default Cases;
