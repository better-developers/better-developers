import { Box, Center, Flex, Heading, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Section } from '../../components/Section/Section';
import { SectionItem } from '../../components/SectionItem/SectionItem';
import { NavBarContext } from '../../contexts/NavBarContext';

const Services: React.FC = () => {
    const [_context, setContext] = useContext(NavBarContext);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setContext('light'), []);

    return (
        <>
            <Flex flexDir="column">
                <Flex height="100vh" alignItems="center" position="relative">
                    <Section position="absolute" height="100%">
                        <SectionItem px={0} colSpan={6}>
                            <Box
                                top={54}
                                bgColor="#3E1905"
                                backgroundSize="cover"
                                width="100%"
                                height="100%"
                                position="absolute"
                                clipPath="polygon(0px 0px, 100% 0px, 100% 80%, 0px 100%)"
                            />
                        </SectionItem>
                        <SectionItem px={0} colStart={3} colSpan={3}>
                            <Box
                                top={-15}
                                bgColor="#1C1E29"
                                backgroundSize="cover"
                                width="100%"
                                height="100%"
                                position="absolute"
                                clipPath="polygon(0px 0px, 100% 0px, 100% 80%, 0px 100%)"
                            />
                        </SectionItem>
                        <SectionItem px={0} colStart={5} colSpan={1}>
                            <Box
                                top={-35}
                                bgColor="#3B3653"
                                backgroundSize="cover"
                                width="100%"
                                height="100%"
                                position="absolute"
                                clipPath="polygon(0px 0px, 100% 0px, 100% 80%, 0px 100%)"
                            />
                        </SectionItem>
                        <SectionItem px={0} colSpan={6}>
                            <Box
                                bgColor="brand.50"
                                backgroundSize="cover"
                                width="100%"
                                height="100%"
                                position="absolute"
                                clipPath="polygon(0px 0px, 100% 0px, 100% 80%, 0px 100%)">
                                <video src="/video/casette.mp4" autoPlay muted loop width="100%" />
                            </Box>
                        </SectionItem>
                    </Section>

                    <Section>
                        <SectionItem colStart={2} colSpan={4}>
                            <Center>
                                <Link href="tel:+4542661028">
                                    <Heading
                                        size="4xl"
                                        background="linear-gradient(90.77deg, #F7A75A 21.3%, #F8E869 71.67%);"
                                        backgroundClip="text"
                                        textColor="transparent">
                                        +45 42 66 10 28
                                    </Heading>
                                </Link>
                            </Center>
                        </SectionItem>
                    </Section>
                </Flex>
                <Section py={24}>
                    <SectionItem colStart={2} colSpan={2} py={4}>
                        <Heading fontWeight="semibold">Tal med en ekspert</Heading>
                    </SectionItem>
                    <SectionItem colStart={2} colSpan={2} py={4}>
                        <Text>Vi hjælper med:</Text>
                        <UnorderedList px={4}>
                            <ListItem>
                                <Text>Demo products of interest.</Text>
                            </ListItem>
                            <ListItem>
                                <Text>
                                    Design a solution to accept and optimize payments, add new revenue streams and automate financial
                                    workflows.
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text>Access custom pricing including cost+ pricing, volume discounts, and more.</Text>
                            </ListItem>
                        </UnorderedList>
                    </SectionItem>
                    <SectionItem colSpan={2}>
                        <ContactForm></ContactForm>
                    </SectionItem>
                </Section>
            </Flex>
        </>
    );
};

export default Services;
