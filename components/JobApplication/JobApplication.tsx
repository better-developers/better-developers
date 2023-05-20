import { Button, Card, Flex, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { render } from '@react-email/render';
import { useState } from 'react';
import { SendEmailRequest } from '../../pages/api/sendgrid';
import { toBase64 } from '../../utils/toBase64';
import { Dropzone } from '../Dropzone/Dropzone';
import { EmailTemplate } from './Emailtemplate';

type Attachment = Promise<NonNullable<SendEmailRequest['attachments']>[number]>;

export const JobApplication: React.FC = () => {
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [files, setFiles] = useState<File[]>([]);
    const [isSending, setIsSending] = useState(false);

    const onFilesChanged = (files: File[]) => setFiles(files);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
        setIsSending(true);
        e.preventDefault();

        const attachmentsPromises = files.map<Attachment>(async (file) => ({
            content: await toBase64(file),
            filename: file.name,
            type: file.type,
            disposition: 'attachment',
            content_id: 'myId',
        }));

        const attachments = await Promise.all(attachmentsPromises);

        const body: SendEmailRequest = {
            subject: 'Ny jobansøgning',
            html: render(<EmailTemplate name={name} about={about} />),
            attachments: attachments,
        };

        fetch('/api/sendgrid', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        }).finally(() => setIsSending(false));
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
                        <Dropzone onFilesChanged={onFilesChanged}></Dropzone>
                    </FormControl>

                    <Button type="submit" variant="brand" onClick={onSubmit} isLoading={isSending}>
                        Send
                    </Button>
                </Flex>
            </form>
        </Card>
    );
};
