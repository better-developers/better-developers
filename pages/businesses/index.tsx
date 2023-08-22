import { Box, Center, Flex, Grid, Heading, Hide, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import { IoDocumentText, IoPeople } from 'react-icons/io5';
import { MdAgriculture } from 'react-icons/md';
import { RiGovernmentFill } from 'react-icons/ri';
import { SiWebmoney } from 'react-icons/si';
import { ContactButton } from '../../components/ContactButton/ContactButton';
import { DynamicThemeColor } from '../../components/DynamicThemeColor/DynamicThemeColor';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { HeroSectionLayout } from '../../components/HeroSectionLayout/HeroSectionLayout';
import { Section } from '../../components/Section/Section';
import { SectionItem } from '../../components/SectionItem/SectionItem';
import { Sector, SectorCard } from '../../components/SectorCard/SectorCard';
import illustration2 from '../../public/assets/consultancy-pack/illustrations/consultant-illustrations-2.png';
import WebAppTemplate from '../../public/web-app-template.svg';

const sectors: readonly Sector[] = [
    {
        icon: MdAgriculture,
        sectorName: 'Landbrug',
        content: (
            <Text>
                Gennem konsulentarbejde hos en større landbrugs virksomhed har vores konsulenter tilegnet sig viden indenfor landbrug. En
                domæne viden som indbefatter blandt andet brugen af geo data og højdedata.
            </Text>
        ),
    },
    {
        icon: IoPeople,
        sectorName: 'GDPR',
        content: (
            <Text>
                Opbevaring og databehandling af persondata er i stigende grad en realitet for de fleste software virksomheder. Hos Better
                Developers har vi erfaring og eksperter indenfor lige netop GDPR compliance.
            </Text>
        ),
    },
    {
        icon: RiGovernmentFill,
        sectorName: 'Det offentlige',
        content: (
            <Text>
                For vores konsulenter er det ikke fjernt at arbejde med offentlige instanser, vi har været drivende i flere offentlige
                projekter. Disse projekter spænder alt fra sundhedssektoren til kommunalt arbejde.
            </Text>
        ),
    },
    {
        icon: SiWebmoney,
        sectorName: 'Fintech',
        content: (
            <Text>
                Gennem vores konsulentarbejde og vores fokus på forretningsforståelse har vi fået omfattende kendskab til fintech og de
                lovgivninger der styre den finansielle sektor.
            </Text>
        ),
    },
    {
        icon: IoDocumentText,
        sectorName: 'Forsikring',
        content: <Text>Gennem et stærkt kundesamarbejde har vi fået dyb indsigt og domænekendskab til forsikringsverdenen.</Text>,
    },
];

const Businesses: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const isActive = (index: number) => selectedIndex === index;
    const onClick = (index: number) => () => setSelectedIndex(index);

    return (
        <>
            <DynamicThemeColor color="red.50" />

            <Flex flexDir="column">
                <HeroSection colors={{ base: 'red.50', primary: '#F5B3B3', secondary: '#F27E7E', tertiary: '#D14141' }}>
                    <HeroSectionLayout
                        identifier="Brancher"
                        heading={
                            <Text fontSize="0.8em" color="inherit" fontWeight="inherit" lineHeight="inherit">
                                Software&shy;
                                <wbr />
                                løsninger skrædder&shy;
                                <wbr />
                                syet til din branche
                            </Text>
                        }
                        paragraph={
                            <>Vores erfaringsbaserede tilgang inden for softwareudvikling giver os en unik forståelse af din branche.</>
                        }
                        content={
                            <Stack alignItems="center" justifyContent="center" height={'100%'}>
                                <Box w="80%">
                                    <Image src={illustration2} alt="Computer image" />
                                </Box>
                            </Stack>
                        }
                    />
                </HeroSection>

                <Section py={24}>
                    <SectionItem colStart={[1, 1, 3]} colSpan={2} py={4}>
                        <Heading textAlign="center" fontWeight="semibold">
                            Vi er klar med erfaring indenfor din branche
                        </Heading>
                    </SectionItem>
                    <SectionItem colStart={[1, 1, 3]} colSpan={2} py={4} textAlign="justify">
                        <Text>
                            Vores omfattende erfaring inden for din branche gør os til den ideelle partner til at løse dine
                            softwareudviklingsbehov. Vi har arbejdet med virksomheder i en række sektorer og forstår de unikke udfordringer
                            og krav der er forbundet med de forskellige brancher. Vores dygtige team af konsulenter og udviklere er
                            fortrolige med de seneste tendenser og teknologier inden for din sektor, hvilket giver os en unik fordel ved at
                            levere skræddersyede løsninger, der er specifikt tilpasset til at imødekomme dine branchespecifikke behov. Med
                            vores ekspertise og erfaring er vi klar til at hjælpe dig med at nå dine forretningsmål og forblive
                            konkurrencedygtig i din branche.
                        </Text>
                    </SectionItem>
                </Section>

                <Section py={32} bgColor="#535266">
                    <SectionItem colStart={[1, 1, 2]} colSpan={[2, 2, 1]}>
                        <SectorCard sector={sectors[0]} active={isActive(0)} side={'right'} alignment={'middle'} onClick={onClick(0)} />
                    </SectionItem>

                    <Hide below="md">
                        <SectionItem colSpan={2}>
                            <Center>
                                <Flex flexDir="column">
                                    <Image src={WebAppTemplate} alt="web applikation" />
                                </Flex>
                            </Center>
                        </SectionItem>
                    </Hide>

                    <SectionItem colSpan={[2, 2, 1]}>
                        <SectorCard sector={sectors[1]} active={isActive(1)} side={'left'} alignment={'middle'} onClick={onClick(1)} />
                    </SectionItem>

                    <SectionItem colStart={[1, 1, 2]} colSpan={[2, 2, 4]} py={[0, 0, 8]}>
                        <Grid gridTemplateColumns={['1fr', '1fr', '1fr 1fr 1fr']} gap={8} px={[0, 0, 16]}>
                            <SectorCard sector={sectors[2]} active={isActive(2)} side={'top'} alignment={'right'} onClick={onClick(2)} />
                            <SectorCard sector={sectors[3]} active={isActive(3)} side={'top'} alignment={'middle'} onClick={onClick(3)} />
                            <SectorCard sector={sectors[4]} active={isActive(4)} side={'top'} alignment={'left'} onClick={onClick(4)} />
                        </Grid>
                    </SectionItem>
                </Section>

                <Section py={24}>
                    <SectionItem colStart={[1, 1, 3]} colSpan={2} py={4} px={16}>
                        <Heading textAlign="center">Ønsker du at høre mere? Vi brænder for at dele vores viden!</Heading>
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

export default Businesses;
