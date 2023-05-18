import { Box, Button, Center, Flex, Grid, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import { IoDocumentText, IoPeople } from 'react-icons/io5';
import { MdAgriculture } from 'react-icons/md';
import { RiGovernmentFill } from 'react-icons/ri';
import { SiWebmoney } from 'react-icons/si';
import { Section } from '../../components/Section/Section';
import { SectionItem } from '../../components/SectionItem/SectionItem';
import { Sector, SectorCard } from '../../components/SectorCard/SectorCard';
import HeroComp from '../../public/hero-comp.png';
import WebAppTemplate from '../../public/web-app-template.svg';

const sectors: readonly Sector[] = [
    {
        icon: MdAgriculture,
        sectorName: 'Landbrug',
        content: (
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec tincidunt diam. Sed et enim arcu. Donec porta laoreet
                neque. Duis imperdiet massa lorem, vel efficitur purus ultrices et.
            </Text>
        ),
    },
    {
        icon: IoPeople,
        sectorName: 'GDPR',
        content: (
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec tincidunt diam. Sed et enim arcu. Donec porta laoreet
                neque. Duis imperdiet massa lorem, vel efficitur purus ultrices et.
            </Text>
        ),
    },
    {
        icon: RiGovernmentFill,
        sectorName: 'Det offentlige',
        content: (
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec tincidunt diam. Sed et enim arcu. Donec porta laoreet
                neque. Duis imperdiet massa lorem, vel efficitur purus ultrices et.
            </Text>
        ),
    },
    {
        icon: SiWebmoney,
        sectorName: 'Fintech',
        content: (
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec tincidunt diam. Sed et enim arcu. Donec porta laoreet
                neque. Duis imperdiet massa lorem, vel efficitur purus ultrices et.
            </Text>
        ),
    },
    {
        icon: IoDocumentText,
        sectorName: 'Forsikring',
        content: (
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec tincidunt diam. Sed et enim arcu. Donec porta laoreet
                neque. Duis imperdiet massa lorem, vel efficitur purus ultrices et.
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
                <Flex height="650px" alignItems="end" position="relative">
                    <Section position="absolute" height="100%">
                        <SectionItem px={0} colSpan={6}>
                            <Box
                                top={50}
                                bgColor="#F5B3B3"
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
                                bgColor="#F27E7E"
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
                                bgColor="#D14141"
                                backgroundSize="cover"
                                width="100%"
                                height="100%"
                                position="absolute"
                                clipPath="polygon(0px 0px, 100% 0px, 100% 65%, 0px 100%)"
                            />
                        </SectionItem>
                        <SectionItem px={0} colSpan={6}>
                            <Box
                                bgColor="red.50"
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
                                    <Text variant="brandHighlight">Brancher</Text>
                                    <Heading fontSize="4em" fontWeight="400" color="black">
                                        Baseret på erfaring indenfor din branche
                                    </Heading>
                                </Flex>

                                <Text lineHeight="1.5" w="60%" color="black">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor diam sed tristique dictum.
                                </Text>

                                <Button variant="brand" w="fit-content">
                                    Call to action
                                </Button>
                            </Stack>
                        </SectionItem>
                        <SectionItem colStart={4} colEnd={6}>
                            <Stack alignItems="end" height={'100%'}>
                                <Box w="80%">
                                    <Image src={HeroComp} alt="Computer image" />
                                </Box>
                            </Stack>
                        </SectionItem>
                    </Section>
                </Flex>
                <Section py={24}>
                    <SectionItem colStart={3} colSpan={2} py={4}>
                        <Heading textAlign="center" fontWeight="semibold">
                            Vi er klar med erfaring indenfor din branche
                        </Heading>
                    </SectionItem>
                    <SectionItem colStart={3} colSpan={2} py={4} textAlign="center">
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec tincidunt diam. Sed et enim arcu. Donec
                            porta laoreet neque. Duis imperdiet massa lorem, vel efficitur purus ultrices et.
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
                        <Grid gridTemplateColumns="1fr 1fr 1fr" gap={8} px={16}>
                            <SectorCard sector={sectors[2]} active={isActive(2)} side={'top'} alignment={'right'} onClick={onClick(2)} />
                            <SectorCard sector={sectors[3]} active={isActive(3)} side={'top'} alignment={'middle'} onClick={onClick(3)} />
                            <SectorCard sector={sectors[4]} active={isActive(4)} side={'top'} alignment={'left'} onClick={onClick(4)} />
                        </Grid>
                    </SectionItem>
                </Section>

                <Section py={24}>
                    <SectionItem colStart={3} colSpan={2} py={4} px={16}>
                        <Heading textAlign="center">Vil du høre mere? Vi elsker at fortælle!</Heading>
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

export default Businesses;
