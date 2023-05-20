import { Code, Text } from '@chakra-ui/react';

export interface EmailTemplateProps {
    name: string;
    about: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, about }) => {
    return (
        <>
            <Text>Navn: </Text>
            <Code>
                <pre style={{ background: '#f8f8ff' }}>{`${name}`}</pre>
            </Code>
            <Text>Om: </Text>
            <Code>
                <pre style={{ background: '#f8f8ff' }}>{about}</pre>
            </Code>
        </>
    );
};
