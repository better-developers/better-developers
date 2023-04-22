import { Accordion, Card, CardBody, Flex, Heading, Text } from '@chakra-ui/react';
import FAQItem from './FAQItem';

const FAQ: React.FC = () => {
    return (
        <Flex direction="column" gap="2em">
            <Heading>Titel der introducerer FAQ</Heading>

            <Text>
                Her kan vi skrive nogle overordnede ting omkring de spørgsmål som folk stiller og at de altid er velkomne til at kontakte
                os.
            </Text>

            <Card>
                <CardBody>
                    <Accordion allowMultiple>
                        <FAQItem heading="Hvorfor kunne jeg ikke ligeså godt hyre noget billigere?" borderTop="none">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </FAQItem>

                        <FAQItem heading="Er I ikke lige lovligt unge?">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </FAQItem>

                        <FAQItem heading="Hvordan kan jeg sikre mig at i levere?">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </FAQItem>

                        <FAQItem heading="Hvordan foregår timeregistrering?">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </FAQItem>

                        <FAQItem heading="Kan jeg have flere konsulenter tilkoblet?">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </FAQItem>

                        <FAQItem heading="Jeg skal bruge en helt specifik kompetence, er det noget I har?">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </FAQItem>

                        <FAQItem heading="Hvordan er det at arbejde hos Better Developers?" borderBottom="none">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </FAQItem>
                    </Accordion>
                </CardBody>
            </Card>
        </Flex>
    );
};

export default FAQ;
