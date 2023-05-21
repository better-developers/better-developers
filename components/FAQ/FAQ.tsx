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
                        <FAQItem heading="Hvorfor arbejde sammen med Better Developers?" borderTop="none">
                            Du skal arbejde sammen med os, hvis jeres forretning gerne vil have mere end blot en programmør der levere noget
                            kode, men en aktiv samarbejdspartner der forstår jeres forretning og hjælper jer med at implementere de nyeste
                            teknologier der vækster jeres forretning.
                        </FAQItem>

                        <FAQItem heading="Hvordan er jeres tilgang til udvikling?">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </FAQItem>

                        <FAQItem heading="Hvad er jeres kernekompetencer inden for softwareudvikling?">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </FAQItem>

                        <FAQItem heading="Hvordan samarbejder I med jeres kunder?">
                            Vi prioriterer tæt samarbejde med vores kunder gennem hele udviklingsprocessen. Vi starter med at forstå deres
                            behov og krav og udvikler derefter en skræddersyet løsning. Vi holder vores kunder opdaterede gennem
                            regelmæssige møder, fremskridtsrapporter og feedback-sessioner for at sikre, at vores arbejde opfylder deres
                            forventninger.
                        </FAQItem>

                        <FAQItem heading="Hvilke teknologier og programmeringssprog arbejder I med?">
                            Vi er specialister i en bred vifte af teknologier og programmeringssprog, herunder Java, C#, Python, JavaScript,
                            PHP, Ruby og mange flere. Vi bruger også populære frameworks og platforme som .NET, Angular, React, Node.js og
                            Laravel for at opbygge robuste og moderne løsninger.
                        </FAQItem>

                        <FAQItem heading="Hvordan sikrer I kvaliteten af jeres software?">
                            Kvalitet er en af vores øverste prioriteter. Vi anvender testdrevet udvikling (TDD), automatiserede tests og
                            code reviews for at sikre, at vores software er fejlfri og opfylder de forventede standarder. Vi følger også
                            agile udviklingsmetoder, der giver mulighed for hyppige iterationer og feedback for at forbedre kvaliteten
                            undervejs.
                        </FAQItem>

                        <FAQItem heading="Hvordan håndterer I beskyttelse af fortrolige oplysninger og data?">
                            Vi tager databeskyttelse og fortrolighed meget alvorligt. Vi implementerer sikre udviklingspraksisser, herunder
                            adgangskontrol, datakryptering og overholdelse af relevante sikkerhedsstandarder. Vi indgår også
                            fortrolighedsaftaler med vores kunder for at beskytte deres følsomme oplysninger. Det hele er samtidigt sikret
                            af eksterne ekspeter hos BetterCompliance.
                        </FAQItem>
                    </Accordion>
                </CardBody>
            </Card>
        </Flex>
    );
};

export default FAQ;
