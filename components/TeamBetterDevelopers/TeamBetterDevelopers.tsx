import { Button, Center, Heading, Icon, Link, Text } from '@chakra-ui/react';
import { IoPersonAdd } from 'react-icons/io5';
import { Section } from '../../components/Section/Section';
import { SectionItem } from '../../components/SectionItem/SectionItem';
import Anders from '../../public/img/profile/anders.jpg';
import Mikkel from '../../public/img/profile/mikkel.jpg';
import Soren from '../../public/img/profile/soren.jpg';
import Viktor from '../../public/img/profile/viktor.jpg';
import Placeholder from '../../public/img/profile/placeholder.png';
import { Employee } from '../Employee/Employee';

export const TeamBetterDevelopers: React.FC = () => {
    return (
        <Section py={8} bgColor="#535266">
            <SectionItem colStart={[1, 1, 2]} colSpan={2} py={8}>
                <Text variant="brandHighlight">Mød holdet</Text>
                <Heading color="white">Team Better Developers</Heading>
            </SectionItem>
            <SectionItem colStart={[1, 1, 2]}>
                <Employee name="Viktor Andersen" title="CEO" image={Viktor}></Employee>
            </SectionItem>
            <SectionItem>
                <Employee name="Anders Kristiansen" title="CSO" image={Anders}></Employee>
            </SectionItem>
            <SectionItem>
                <Employee name="Søren Jessen" title="CLO" image={Soren}></Employee>
            </SectionItem>
            <SectionItem>
                <Employee name="Mikkel Laursen" title="CTO" image={Mikkel}></Employee>
            </SectionItem>
            <SectionItem colStart={[1, 1, 2]}>
                <Employee name="Frederik Bjørn Groben Nielsen" title="Udvikler" image={Placeholder}></Employee>
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
    );
};
