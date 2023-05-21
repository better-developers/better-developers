import { Code, Text } from '@chakra-ui/react';

export interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ firstName, lastName, email, phone, message }) => {
    return (
        <>
            <Text>Navn:</Text>
            <Code>
                <pre style={{ background: '#f8f8ff' }}>{`${firstName} ${lastName}`}</pre>
            </Code>

            <Text>Email:</Text>
            <Code>
                <pre style={{ background: '#f8f8ff' }}>{email}</pre>
            </Code>

            <Text>Telefon:</Text>
            <Code>
                <pre style={{ background: '#f8f8ff' }}>{phone}</pre>
            </Code>

            <Text>Besked:</Text>
            <Code>
                <pre style={{ background: '#f8f8ff' }}>{message}</pre>
            </Code>
        </>
    );
};
