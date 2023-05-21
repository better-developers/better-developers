import { Center, Heading } from '@chakra-ui/react';
import { Section } from '../../components/Section/Section';
import { SectionItem } from '../../components/SectionItem/SectionItem';

const Estimate: React.FC = () => {
    return (
        <Section py={48}>
            <SectionItem colStart={2} colSpan={4}>
                <Center>
                    <Heading size="4xl">Kommer snart</Heading>
                </Center>
            </SectionItem>
        </Section>
    );
};

export default Estimate;
