import { Avatar, Card, CardBody, Heading, Stack, Text } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

type ContactCardProps = {
    quote: string;
    name: string;
    title: string;
};

export const ContactCard: FC<PropsWithChildren<ContactCardProps>> = ({ quote, name, title, children }) => (
    <Card variant="caseCard" h="100%">
        <CardBody p={12} pb={4}>
            <Stack gap={12}>
                <Text variant="quote">&quot; {quote} &quot;</Text>
                <Stack gap={1}>
                    <Avatar />
                    <Heading size="md" lineHeight={1}>
                        {name}
                    </Heading>
                    <Text lineHeight={1}>{title}</Text>
                </Stack>
            </Stack>
        </CardBody>
    </Card>
);
