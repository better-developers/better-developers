'use client';
import { Box, Button, Card, Center, Flex, Heading, Icon, Link, List, ListIcon, ListItem, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { IoPersonAdd } from 'react-icons/io5';
import { MdCheckCircle, MdSettings } from 'react-icons/md';
import { ApplicationForm } from '../../components/ApplicationForm/ApplicationForm';
import { Section } from '../../components/Section/Section';
import { SectionItem } from '../../components/SectionItem/SectionItem';
import HeroComp from '../../public/hero-comp.png';
import Linkedin1 from '../../public/img/linkedin-1.jpg';
import Linkedin2 from '../../public/img/linkedin-2.jpg';
import Employee1 from '../../public/placeholder-employee-1.png';
import Employee2 from '../../public/placeholder-employee-2.png';
import Employee3 from '../../public/placeholder-employee-3.png';
import Employee4 from '../../public/placeholder-employee-4.png';

const Career: React.FC = () => {
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
                                    <Text variant="brandHighlight">Karriere</Text>
                                    <Heading fontSize="4em" fontWeight="400" color="black">
                                        Bliv en del af{' '}
                                        <Box
                                            display="inline"
                                            lineHeight={1}
                                            background="linear-gradient(90.77deg, #F7A75A 21.3%, #F8E869 71.67%);"
                                            backgroundClip="text"
                                            textColor="transparent"
                                            fontWeight="semibold">
                                            Better Developers.
                                        </Box>
                                    </Heading>
                                </Flex>

                                <Text lineHeight="1.5" w="80%" color="black">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor diam sed tristique dictum.
                                </Text>

                                <Button variant="brand" w="fit-content">
                                    Send ansøgning
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
                            Bliv en del af et fællesskab med et fælles mål og fælles fejring!
                        </Heading>
                    </SectionItem>
                    <SectionItem colStart={3} colSpan={2} py={4} textAlign="center">
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec tincidunt diam. Sed et enim arcu. Donec
                            porta laoreet neque. Duis imperdiet massa lorem, vel efficitur purus ultrices et.
                        </Text>
                    </SectionItem>
                </Section>

                <Section pb={32}>
                    <SectionItem colStart={2} colSpan={2} py={8}>
                        <Heading fontWeight={600}>Følg med i dagligdagen</Heading>
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

                <Section py={8} bgColor="#535266">
                    <SectionItem colStart={2} colSpan={2} py={8}>
                        <Text variant="brandHighlight">Team Better Developers</Text>
                        <Heading color="white">Mød dine kommende kolleger</Heading>
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

                <Section pt={24} pb={16}>
                    <SectionItem px={8} py={16} colStart={2} colSpan={2}>
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

                    <SectionItem px={8} colStart={2} colSpan={1}>
                        <Flex flexDir="column" gap="1em" flex="1">
                            <Flex gap={2}>
                                <Heading color="black" size="md">
                                    Vi har et skide godt fællesskab og hygger.
                                </Heading>
                            </Flex>
                            <Text textAlign="justify">
                                Vi har mange års erfaring med produktudviklng indenfor IT-systemer, hvor vi lægger vægt på den gode dialog
                                og åbenhed.
                            </Text>
                        </Flex>
                    </SectionItem>

                    <SectionItem px={8}>
                        <Flex flexDir="column" gap="1em" flex="1">
                            <Flex gap={2}>
                                <Heading color="black" size="md">
                                    Vi har et skide godt fællesskab og hygger.
                                </Heading>
                            </Flex>
                            <Text textAlign="justify">
                                Vi har et hold af skarpe konsulenter der står klar til at hjælpe med lige netop jeres opgaver. En vigtig del
                                af vores opgave er at fnde lige netop den kandidat der passer bedst til jeres virksomhed.
                            </Text>
                        </Flex>
                    </SectionItem>

                    <SectionItem px={8}>
                        <Flex flexDir="column" gap="1em" flex="1">
                            <Flex gap={2}>
                                <Heading color="black" size="md">
                                    Vi har et skide godt fællesskab og hygger.
                                </Heading>
                            </Flex>
                            <Text textAlign="justify">
                                Vi har meget erfaring med de nyeste teknologier indenfor WEB og vi deler meget gerne ud af viden.
                            </Text>
                        </Flex>
                    </SectionItem>

                    <SectionItem px={8}>
                        <Flex flexDir="column" gap="1em" flex="1">
                            <Flex gap={2}>
                                <Heading color="black" size="md">
                                    Vi har et skide godt fællesskab og hygger.
                                </Heading>
                            </Flex>
                            <Text textAlign="justify">
                                Vi har meget erfaring med de nyeste teknologier indenfor WEB og vi deler meget gerne ud af viden.
                            </Text>
                        </Flex>
                    </SectionItem>
                </Section>

                <Section pt={24} pb={16}>
                    <SectionItem colStart={2} colSpan={2} display="flex" flexDirection="column" gap={24}>
                        <Heading size="2xl">Send ansøgning</Heading>

                        <Flex marginLeft={4} direction="column" gap={4}>
                            <Heading size="md">Ansøgningen må gerne indeholde</Heading>

                            <List spacing={3} marginLeft={6}>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color="green.500" />
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color="green.500" />
                                    Assumenda, quia temporibus eveniet a libero incidunt suscipit
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color="green.500" />
                                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdSettings} color="green.500" />
                                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                                </ListItem>
                            </List>
                        </Flex>
                    </SectionItem>

                    <SectionItem colStart={4} colSpan={2} display="flex" justifyContent="center">
                        <ApplicationForm variant="dark"></ApplicationForm>
                    </SectionItem>
                </Section>
            </Flex>
        </>
    );
};

export default Career;
