import { Flex, Stack, Heading, Button, Center, Text, Box, Grid, Icon, Card, Link } from '@chakra-ui/react';
import { Section } from '../../components/Section/Section';
import { SectionItem } from '../../components/SectionItem/SectionItem';
import Image from 'next/image';
import HeroComp from '../../public/hero-comp.png';
import Employee1 from '../../public/placeholder-employee-1.png';
import Employee2 from '../../public/placeholder-employee-2.png';
import Employee3 from '../../public/placeholder-employee-3.png';
import Employee4 from '../../public/placeholder-employee-4.png';
import Linkedin1 from '../../public/img/linkedin-1.jpg';
import Linkedin2 from '../../public/img/linkedin-2.jpg';
import { IoPersonAdd } from 'react-icons/io5';
import { useRouter } from 'next/router';

const About: React.FC = () => {
    const router = useRouter();

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
                                <Text w="80%">
                                    Donec porta laoreet neque. Duis imperdiet massa lorem, vel efficitur purus ultrices et.{' '}
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
                            Dygtige konsulenter, skarpe kompetencer og fællesskab
                        </Heading>
                    </SectionItem>
                    <SectionItem colStart={3} colSpan={2} py={4} textAlign="center">
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec tincidunt diam. Sed et enim arcu. Donec
                            porta laoreet neque. Duis imperdiet massa lorem, vel efficitur purus ultrices et.
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
                                textColor="transparent">
                                Better Developers
                            </Box>
                        </Heading>
                        <Heading fontWeight={600}>- fortalt af vores CEO</Heading>
                    </SectionItem>
                    <SectionItem colStart={2}>
                        <Text textAlign="justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra feugiat sapien cursus pharetra. Etiam
                            egestas vehicula vulputate.
                            <br />
                            <br />
                            Curabitur faucibus in ex et venenatis. Praesent a dictum lacus, id aliquet ipsum. Quisque elementum posuere nibh
                            nec maximus. Sed commodo lacinia tellus, sit amet maximus risus mattis nec. Fusce pretium viverra lacus, at
                            placerat dolor fringilla quis.
                        </Text>
                    </SectionItem>
                    <SectionItem>
                        <Text textAlign="justify">
                            Proin vehicula lectus eu neque ultricies dictum. Vivamus magna arcu, mollis vitae laoreet a, egestas elementum
                            nunc. Mauris et sagittis neque, nec lobortis ipsum.
                            <br />
                            <br />
                            Sed at nisl quis tellus malesuada finibus. Nunc et leo diam. Suspendisse faucibus blandit quam, at euismod metus
                            vestibulum hendrerit. Duis nec posuere nulla. Proin finibus velit quis molestie ultrices. Nunc imperdiet metus
                            nec velit rutrum posuere.
                        </Text>
                    </SectionItem>
                    <SectionItem>
                        <Text textAlign="justify">
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tempor ante
                            lorem, in viverra mauris porttitor a. Vivamus pharetra, lacus a rutrum sodales, diam diam vestibulum lacus, vel
                            vestibulum dolor augue quis ligula.
                            <br />
                            <br />
                            Donec eu metus convallis dolor tristique lacinia sed quis dolor. Morbi sit amet euismod turpis, a fringilla
                            lectus.
                        </Text>
                    </SectionItem>
                    <SectionItem>
                        <Text textAlign="justify">
                            Duis sagittis risus ut lorem rutrum tristique nec ut neque. Proin interdum pretium viverra. Morbi sodales metus
                            in lacus luctus, quis sagittis ante ullamcorper. Sed nec laoreet lorem.
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
                        <Center>
                            <Link href="https://www.linkedin.com/feed/update/urn:li:activity:7038197349411647488">
                                <Card w="80%" variant={'sectorCard'} overflow="hidden">
                                    <Image src={Linkedin1} alt="linkedin" />
                                </Card>
                            </Link>
                        </Center>
                    </SectionItem>
                    <SectionItem colSpan={2}>
                        <Center>
                            <Link href="https://www.linkedin.com/feed/update/urn:li:activity:7038197349411647488">
                                <Card w="80%" variant={'sectorCard'} overflow="hidden">
                                    <Image src={Linkedin2} alt="linkedin" />
                                </Card>
                            </Link>
                        </Center>
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

export default About;
