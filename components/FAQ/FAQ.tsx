import { Accordion, Card, CardBody, Flex, Heading, Text } from '@chakra-ui/react';
import FAQItem from './FAQItem';

const FAQ: React.FC = () => {
    return (
        <Flex direction="column" gap="2em">
            <Heading>FAQ</Heading>

            <Text>
                Her kan du få svar på nogle af de spørgsmål, som vi oftest støder på. Finder du ikke svar her, så er du meget velkommen til
                at kontakte os.
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
                            Vi har en passion for arkitektur, design og clean code og er en engageret samarbejdspartner drevet af
                            nysgerrighed og forståelse Interesseret i ny teknologi og state-of-the-art. Du får derfor en kompetent partner
                            med ombord når du hyrer en af vores dygtige konsulenter.
                        </FAQItem>

                        <FAQItem heading="Hvad er jeres kernekompetencer inden for softwareudvikling?">
                            Better Developers specialiserer sig i en bred vifte af softwareudviklingstjenester, herunder webudvikling,
                            mobilapp-udvikling, databasedesign, cloud-løsninger, systemintegration og mere. Vi har erfaring med forskellige
                            teknologier og programmeringssprog.
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

                        <FAQItem heading="Hvordan håndterer I beskyttelse af fortrolige oplysninger og data?" borderBottom="none">
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
