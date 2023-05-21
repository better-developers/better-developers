import { Box, Button, Center, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { ContactButton } from '../../components/ContactButton/ContactButton';
import { Section } from '../../components/Section/Section';
import { SectionItem } from '../../components/SectionItem/SectionItem';
import HeroComp from '../../public/hero-comp.png';
import ServicesHero from '../../public/services-hero.svg';

const Services: React.FC = () => {
    return (
        <>
            <Flex flexDir="column">
                <Flex height="650px" alignItems="end" position="relative">
                    <Section position="absolute" height="100%">
                        <SectionItem px={0} colSpan={6}>
                            <Box
                                top={50}
                                bgColor="#F8CA62"
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
                                bgColor="#F8E468"
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
                                bgColor="brand.400"
                                backgroundSize="cover"
                                width="100%"
                                height="100%"
                                position="absolute"
                                clipPath="polygon(0px 0px, 100% 0px, 100% 65%, 0px 100%)"
                            />
                        </SectionItem>
                        <SectionItem px={0} colSpan={6}>
                            <Box
                                bgColor="brand.50"
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
                                    <Text variant="brandHighlight">Services</Text>
                                    <Heading fontSize="4em" fontWeight="400" color="black">
                                        Software services tilpasset dine behov
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
                            <Stack alignItems="center" height={'100%'}>
                                <Box w="70%">
                                    <Image src={ServicesHero} alt="Computer image" />
                                </Box>
                            </Stack>
                        </SectionItem>
                    </Section>
                </Flex>
                <Section py={24}>
                    <SectionItem colStart={3} colSpan={2} py={4}>
                        <Heading textAlign="center" fontWeight="semibold">
                            Vores kerne tjenester indenfor software udvikling
                        </Heading>
                    </SectionItem>
                    <SectionItem colStart={3} colSpan={2} py={4} textAlign="center">
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec tincidunt diam. Sed et enim arcu. Donec
                            porta laoreet neque. Duis imperdiet massa lorem, vel efficitur purus ultrices et.
                        </Text>
                    </SectionItem>
                </Section>

                <Section py={32} bgColor="blue.800" id="end-to-end">
                    <SectionItem colStart={2} colSpan={2}>
                        <Stack gap={4}>
                            <Heading color="white">End-to-end projekter</Heading>
                            <Text color="white">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec tincidunt diam. Sed et enim arcu.
                                Donec porta laoreet neque. Duis imperdiet massa lorem, vel efficitur purus ultrices et. Proin eu efficitur
                                purus. Sed semper nunc vel nibh iaculis, non dapibus nibh convallis. Donec laoreet mollis ligula, vel
                                feugiat diam porttitor ac.
                                <br />
                                <Link color="white">Se processen</Link>
                                <br />
                                <Link color="white">Se tidligere cases</Link>
                            </Text>
                        </Stack>
                    </SectionItem>
                    <SectionItem colSpan={2}>
                        <Center>
                            <Box w="70%">
                                <Image src={HeroComp} alt="Computer image" />
                            </Box>
                        </Center>
                    </SectionItem>
                </Section>
                <Section py={32} id="consultants">
                    <SectionItem colStart={2} colSpan={2}>
                        <Center>
                            <Box w="70%">
                                <Image src={HeroComp} alt="Computer image" />
                            </Box>
                        </Center>
                    </SectionItem>
                    <SectionItem colSpan={2}>
                        <Stack gap={4}>
                            <Heading>Software konsulenter</Heading>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec tincidunt diam. Sed et enim arcu.
                                Donec porta laoreet neque. Duis imperdiet massa lorem, vel efficitur purus ultrices et. Proin eu efficitur
                                purus. Sed semper nunc vel nibh iaculis, non dapibus nibh convallis. Donec laoreet mollis ligula, vel
                                feugiat diam porttitor ac.
                                <br />
                                <Link>Se hvem vi er</Link>
                            </Text>
                        </Stack>
                    </SectionItem>
                </Section>

                <Section py={24}>
                    <SectionItem colStart={3} colSpan={2} py={4}>
                        <Heading textAlign="center">Er du overbevist? Så lad os føre din idé ud i livet.</Heading>
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
