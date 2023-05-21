import { Button, Card, Flex, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { render } from '@react-email/render';
import { useState } from 'react';
import { usePost } from '../../hooks/api/usePost';
import { SendEmailRequest } from '../../pages/api/sendgrid';
import { toBase64 } from '../../utils/toBase64';
import { Dropzone } from '../Dropzone/Dropzone';
import { EmailTemplate } from './EmailTemplate';

type Attachment = Promise<NonNullable<SendEmailRequest['attachments']>[number]>;

export const ApplicationForm: React.FC = () => {
    const { performFetch, loading } = usePost('/api/sendgrid');
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [files, setFiles] = useState<File[]>([]);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const html = render(<EmailTemplate name={name} about={about} />);

        const attachmentsPromises = files.map<Attachment>(async (file) => ({
            content: await toBase64(file),
            filename: file.name,
            type: file.type,
            disposition: 'attachment',
            content_id: 'myId',
        }));

        const attachments = await Promise.all(attachmentsPromises);

        performFetch({
            subject: 'Ny jobansøgning',
            html,
            attachments,
        });
    };

    return (
        <Card px={8} pt={6} pb={8} bgColor="#535266" color="white" w="80%">
            <form onSubmit={onSubmit}>
                <Flex direction="column" gap={4}>
                    <FormControl>
                        <FormLabel>Fulde navn</FormLabel>
                        <Input type="text" placeholder="Dohn Joe" bgColor="white" color="black" onChange={(e) => setName(e.target.value)} />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Om dig</FormLabel>
                        <Textarea
                            placeholder="Sæt nogle ord på, hvorfor vi er et godt match"
                            bgColor="white"
                            color="black"
                            onChange={(e) => setAbout(e.target.value)}
                        />
                    </FormControl>

                    <FormControl>
                        <Dropzone onFilesChanged={setFiles}></Dropzone>
                    </FormControl>

                    <Button type="submit" variant="brand" onClick={onSubmit} isLoading={loading}>
                        Send
                    </Button>
                </Flex>
            </form>
        </Card>
    );
};
