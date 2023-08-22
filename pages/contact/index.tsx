import { Center, Flex, Heading, Link } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { DynamicThemeColor } from '../../components/DynamicThemeColor/DynamicThemeColor';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { Section } from '../../components/Section/Section';
import { SectionItem } from '../../components/SectionItem/SectionItem';
import { NavBarContext } from '../../contexts/NavBarContext';

const Services: React.FC = () => {
    const [_context, setContext] = useContext(NavBarContext);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setContext('light'), []);

    return (
        <>
            {/* From screenshot of top of video */}
            <DynamicThemeColor color="#111b1d" />

            <Flex flexDir="column">
                <HeroSection
                    colors={{ base: 'brand.50', primary: '#3E1905', secondary: '#1C1E29', tertiary: '#3B3653' }}
                    backgroundElement={
                        <video
                            src="/video/casette.mp4"
                            autoPlay
                            muted
                            loop
                            width="100%"
                            poster="/video/casette-placeholder.jpg"
                            style={{ objectFit: 'cover', height: '100%' }}
                        />
                    }>
                    <SectionItem colStart={[1, 1, 2]} colSpan={[5, 5, 4]} height={750}>
                        <Center flexDirection="column" gap={4} h={['30%', '30%', '60%']}>
                            <Heading color="#F7A75A" size="sm" opacity={0.5} fontWeight={300}>
                                Lad os starte med et opkald...
                            </Heading>

                            <Link href="tel:+4553800054">
                                <Heading
                                    size={['2xl', '2xl', '4xl']}
                                    background="linear-gradient(90.77deg, #F7A75A 21.3%, #F8E869 71.67%);"
                                    backgroundClip="text"
                                    textColor="transparent">
                                    +45 53 80 00 54
                                </Heading>
                            </Link>
                        </Center>
                    </SectionItem>
                </HeroSection>

                <Section pt={24}>
                    <SectionItem colStart={[1, 1, 1, 3]} colSpan={2} py={4}>
                        <Heading textAlign="center" size="lg">
                            Lad os sammen afdække behovene til jeres næste projekt.
                        </Heading>
                    </SectionItem>
                    <SectionItem colSpan={2} colStart={[1, 1, 1, 3]} py={8}>
                        <ContactForm />
                    </SectionItem>
                </Section>
            </Flex>
        </>
    );
};

export default Services;
