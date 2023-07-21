import { Box, Center, Flex, Grid, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import { IoDocumentText, IoPeople } from 'react-icons/io5';
import { MdAgriculture } from 'react-icons/md';
import { RiGovernmentFill } from 'react-icons/ri';
import { SiWebmoney } from 'react-icons/si';
import { ContactButton } from '../../components/ContactButton/ContactButton';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { HeroSectionLayout } from '../../components/HeroSectionLayout/HeroSectionLayout';
import { Section } from '../../components/Section/Section';
import { SectionItem } from '../../components/SectionItem/SectionItem';
import { Sector, SectorCard } from '../../components/SectorCard/SectorCard';
import BusinessesHero from '../../public/businesses-hero.svg';
import WebAppTemplate from '../../public/web-app-template.svg';

const sectors: readonly Sector[] = [
    {
        icon: MdAgriculture,
        sectorName: 'Landbrug',
        content: (
            <Text>
                Vi hos Better Developers er stolte af vores bidrag til CropManager-projektet hos SEGES. Vi har leveret nøglefunktioner til
                Angular-frontenden, herunder refaktorering af eksisterende moduler og udvikling af nye features. Vores rolle indebærer også
                at fungere som en værdifuld sparringspartner for holdet, hvor vi deler best practices inden for Angular-udvikling.
            </Text>
        ),
    },
    {
        icon: IoPeople,
        sectorName: 'GDPR',
        content: (
            <Text>
                Vi hos Better Developers er glade for at have bidraget til BetterCompliances GDPR-løsning. Med vores ekspertise inden for en
                bred vifte af teknologier har vi udviklet en skræddersyet løsning baseret på .NET og Azure. Vores rolle har omfattet design
                og implementering af databeskyttelsesfunktioner, rettighedsstyring og brugeradgangskontrol. Vi er stolte af at have hjulpet
                BetterCompliance med at opfylde GDPR-kravene og sikre beskyttelse af persondata.
            </Text>
        ),
    },
    {
        icon: RiGovernmentFill,
        sectorName: 'Det offentlige',
        content: (
            <Text>
                Fra juni 2022 blev et nyt team dannet hos Better Developers med ansvaret for to produkter: Publication og LetDialog. Disse
                produkter inkluderer følgende teknologier: MVC .NET, Entity Framework, SQL. Octopus og GitHub Actions Publication er et
                produkt målrettet primært kommuner, hvor forskellige kunder kan offentliggøre deres møder. LetDialog er en besked-app, hvor
                socialrådgivere kan skrive og modtage beskeder fra deres klienter. Vi er stolte over at have leveret disse løsninger og
                bidraget til deres succes.
            </Text>
        ),
    },
    {
        icon: SiWebmoney,
        sectorName: 'Fintech',
        content: (
            <Text>
                Ved hjælp af Better Developers innovative fintech-løsning, Bogføring Simplified, har den virksomhed vi hjalp formået at
                effektivisere deres bogføringsprocesser. Den brugervenlige platform og automatiserede funktioner har gjort det muligt for
                dem at spare tid og minimere fejl, hvilket har resulteret i en mere strømlinet og pålidelig bogføring.
            </Text>
        ),
    },
    {
        icon: IoDocumentText,
        sectorName: 'Forsikring',
        content: (
            <Text>
                Better Developers har bistået MicroTech, en mindre virksomhed med forældet teknologi, med at modernisere deres
                forsikringssoftware. Som fuldstack-udvikler og konsulent har vi rådgivet dem om de nyeste teknologier og vejledt dem i at
                træde ind i den moderne software-landskab. Ved at implementere C#, .NET Framework, KnockoutJS, SQL, HTML, Javascript og
                Postman har vi hjulpet MicroTech med at tage afgørende skridt mod fremtidssikret softwareløsninger.
            </Text>
        ),
    },
] as const;

const Businesses: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const isActive = (index: number) => selectedIndex === index;
    const onClick = (index: number) => () => setSelectedIndex(index);

    return (
        <>
            <Flex flexDir="column">
                <HeroSection colors={{ base: 'red.50', primary: '#F5B3B3', secondary: '#F27E7E', tertiary: '#D14141' }}>
                    <HeroSectionLayout
                        identifier="Brancher"
                        heading={
                            <Text fontSize="0.8em" color="inherit" fontWeight="inherit" lineHeight="inherit">
                                Erfarings&shy;
                                <wbr />
                                baserede software&shy;
                                <wbr />
                                løsninger skrædder&shy;
                                <wbr />
                                syet til din branche
                            </Text>
                        }
                        paragraph={
                            <>
                                Vores erfaringsbaserede tilgang inden for softwareudvikling giver os en unik forståelse af din branche. Vi
                                leverer skræddersyede softwareløsninger, der er specifikt designet til at imødekomme de udfordringer og
                                behov din branche står over for.
                            </>
                        }
                        content={
                            <Stack alignItems="center" height={'100%'}>
                                <Box w="50%">
                                    <Image src={BusinessesHero} alt="Computer image" />
                                </Box>
                            </Stack>
                        }
                    />
                </HeroSection>

                <Section py={24}>
                    <SectionItem colStart={3} colSpan={2} py={4}>
                        <Heading textAlign="center" fontWeight="semibold">
                            Vi er klar med erfaring indenfor din branche
                        </Heading>
                    </SectionItem>
                    <SectionItem colStart={3} colSpan={2} py={4} textAlign="center">
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
                    <SectionItem colStart={2} colSpan={1}>
                        <SectorCard sector={sectors[0]} active={isActive(0)} side={'right'} alignment={'middle'} onClick={onClick(0)} />
                    </SectionItem>
                    <SectionItem colSpan={2}>
                        <Center>
                            <Flex flexDir="column">
                                <Image src={WebAppTemplate} alt="web applikation" />
                            </Flex>
                        </Center>
                    </SectionItem>
                    <SectionItem colSpan={1}>
                        <SectorCard sector={sectors[1]} active={isActive(1)} side={'left'} alignment={'middle'} onClick={onClick(1)} />
                    </SectionItem>
                    <SectionItem colStart={2} colSpan={4} py={8}>
                        <Grid gridTemplateColumns={['1fr', '1fr', '1fr 1fr 1fr']} gap={8} px={16}>
                            <SectorCard sector={sectors[2]} active={isActive(2)} side={'top'} alignment={'right'} onClick={onClick(2)} />
                            <SectorCard sector={sectors[3]} active={isActive(3)} side={'top'} alignment={'middle'} onClick={onClick(3)} />
                            <SectorCard sector={sectors[4]} active={isActive(4)} side={'top'} alignment={'left'} onClick={onClick(4)} />
                        </Grid>
                    </SectionItem>
                </Section>

                <Section py={24}>
                    <SectionItem colStart={3} colSpan={2} py={4} px={16}>
                        <Heading textAlign="center">Ønsker du at høre mere? Vi brænder for at dele vores viden!</Heading>
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

export default Businesses;
