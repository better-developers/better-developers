import { Heading, Icon, Link, Stack, Text } from '@chakra-ui/react';
import { BsBuildingsFill, BsFillPostageHeartFill, BsFillPostcardFill } from 'react-icons/bs';
import { BetterDevelopersLogo } from '../BetterDevelopersLogo/BetterDevelopersLogo';
import { Section } from '../Section/Section';
import { SectionItem } from '../SectionItem/SectionItem';

export const Footer = () => {
    return (
        <Section py={12}>
            <SectionItem colStart={[1, 1, 2]} colSpan={4}>
                <Stack direction="row" spacing="24px" alignItems="center">
                    <BetterDevelopersLogo />
                    <Heading size="md">Better Developers</Heading>
                </Stack>
            </SectionItem>

            <SectionItem colStart={[1, 1, 2]}>
                <Stack>
                    <section>
                        <Link href="https://datacvr.virk.dk/enhed/virksomhed/43791370" isExternal>
                            <Text>
                                <Icon as={BsFillPostcardFill} fontSize="xl" marginRight={2} verticalAlign="text-top" />
                                CVR 43791370
                            </Text>
                        </Link>

                        <Link href="http://maps.google.com/?q=Rosenkrantzgade 19B, 8000 Aarhus C" isExternal>
                            <Text>
                                <Icon as={BsBuildingsFill} fontSize="xl" marginRight={2} verticalAlign="text-top" />
                                Rosenkrantzgade 19B
                            </Text>
                        </Link>

                        <Link href="http://maps.google.com/?q=Rosenkrantzgade 19B, 8000 Aarhus C" isExternal>
                            <Text>
                                <Icon as={BsFillPostageHeartFill} fontSize="xl" marginRight={2} verticalAlign="text-top" />
                                8000, Aarhus C
                            </Text>
                        </Link>
                    </section>
                </Stack>
            </SectionItem>

            <SectionItem>
                <Stack gap={2}>
                    <section>
                        <Link href="/services">
                            <Heading fontSize="md">Services</Heading>
                        </Link>
                        <Link href="/services#end-to-end">
                            <Text>End-to-end projekter</Text>
                        </Link>
                        <Link href="/services#consultants">
                            <Text>Software konsulenter</Text>
                        </Link>
                    </section>
                    <section>
                        <Link href="/cases">
                            <Heading fontSize="md">Cases</Heading>
                        </Link>
                        <Link href="/cases">
                            <Text>Løsninger leveret af BD</Text>
                        </Link>
                        <Link href="/businesses">
                            <Text>Brancher</Text>
                        </Link>
                    </section>
                </Stack>
            </SectionItem>

            <SectionItem>
                <Link href="/about">
                    <Heading fontSize="md">Om os</Heading>
                </Link>
                <Link href="/about">
                    <Text>Om Better Developers</Text>
                </Link>
                <Link href="#">
                    <Text>BD processen</Text>
                </Link>
                <Link href="/career">
                    <Text>Karriere</Text>
                </Link>
                <Link href="/contact">
                    <Text>Kontakt</Text>
                </Link>
            </SectionItem>

            <SectionItem>
                <Link href="/career">
                    <Heading fontSize="md">Karriere</Heading>
                </Link>
                <Link href="/career">
                    <Text>Bliv en del af Better Developers</Text>
                </Link>
                <Link href="/career">
                    <Text>Freelance</Text>
                </Link>
                <Link href="/career">
                    <Text>Studerende</Text>
                </Link>
            </SectionItem>

            <SectionItem colStart={[1, 1, 2]}>
                <Text>© 2023 Better Developers Aps</Text>
            </SectionItem>
        </Section>
    );
};
