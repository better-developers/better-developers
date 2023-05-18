import { Heading, Link, Stack, Text } from '@chakra-ui/react';
import { BetterDevelopersLogo } from '../BetterDevelopersLogo/BetterDevelopersLogo';
import { Section } from '../Section/Section';
import { SectionItem } from '../SectionItem/SectionItem';

export const Footer = () => {
    return (
        <Section py={12}>
            <SectionItem colStart={2} colSpan={4}>
                <Stack direction="row" spacing="24px" alignItems="center">
                    <BetterDevelopersLogo />
                    <Heading size="md">Better Developers</Heading>
                </Stack>
            </SectionItem>
            <SectionItem colStart={3}>
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
                <Link>
                    <Text>BD processen</Text>
                </Link>
                <Link href="/career">
                    <Text>Karriere</Text>
                </Link>
                <Link>
                    <Text>Kontakt</Text>
                </Link>
            </SectionItem>
            <SectionItem>
                <Link href="/career">
                    <Heading fontSize="md">Karriere</Heading>
                </Link>
                <Link>
                    <Text>Bliv en del af Better Developers</Text>
                </Link>
                <Link>
                    <Text>Freelance</Text>
                </Link>
                <Link>
                    <Text>Studerende</Text>
                </Link>
            </SectionItem>
            <SectionItem colStart={2}>
                <Text>© 2023 Better Developers Aps</Text>
            </SectionItem>
        </Section>
    );
};
