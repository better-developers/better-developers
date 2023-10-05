import {
    Button,
    Card,
    CardBody,
    CardHeader,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Heading,
    Input,
    Textarea,
    useToast,
} from '@chakra-ui/react';
import { render } from '@react-email/render';
import { useState } from 'react';
import { usePost } from '../../hooks/api/usePost';
import { EmailTemplate } from './EmailTemplate';

export const ContactForm: React.FC = () => {
    const toast = useToast();
    const { performFetch, loading, data, isSuccess, status } = usePost('/api/sendgrid');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = async (e: React.FormEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const html = render(<EmailTemplate firstName={firstName} lastName={lastName} email={email} phone={phone} message={message} />);

        await performFetch({
            subject: 'Ny henvendelse',
            html,
        });

        isSuccess
            ? toast({
                  description: 'Vi har modtaget din besked 🚀',
                  status: 'success',
                  duration: 9000,
                  isClosable: true,
              })
            : toast({
                  title: status,
                  description: `Der gik et eller andet galt.. Måske giver tallet mening`,
                  status: 'error',
                  duration: 9000,
                  isClosable: true,
              });
    };

    return (
        <Card as="form" onSubmit={onSubmit}>
            <CardHeader>
                <Heading size="md" fontWeight="semibold">
                    Send os en besked
                </Heading>
            </CardHeader>

            <CardBody>
                <Grid gridTemplateColumns="1fr 1fr" gap={4}>
                    <FormControl>
                        <FormLabel>Navn</FormLabel>
                        <Input type="text" onChange={(e) => setFirstName(e.target.value)} />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Efternavn</FormLabel>
                        <Input type="text" onChange={(e) => setLastName(e.target.value)} />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" onChange={(e) => setEmail(e.target.value)} />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Telefonnummer</FormLabel>
                        <Input type="phone" onChange={(e) => setPhone(e.target.value)} />
                    </FormControl>

                    <GridItem colSpan={2}>
                        <FormControl>
                            <FormLabel>Besked</FormLabel>
                            <Textarea color="primaryFontColor" bgColor="white" onChange={(e) => setMessage(e.target.value)} />
                        </FormControl>
                    </GridItem>

                    <GridItem colSpan={2}>
                        <Button type="submit" w="100%" variant="brand" onClick={onSubmit} isLoading={loading}>
                            Send
                        </Button>
                    </GridItem>
                </Grid>
            </CardBody>
        </Card>
    );
};
