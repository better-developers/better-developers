import sendgrid from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY ?? '');

type SendGridAttachments = Extract<Parameters<typeof sendgrid.send>[0], { attachments?: any[] }>['attachments'];

export interface SendEmailRequest {
    subject: string;
    html: string;
    attachments?: SendGridAttachments;
}

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { subject, html, attachments } = req.body as SendEmailRequest;

        await sendgrid.send({
            to: 'info@betterdevelopers.dk',
            from: 'info@betterdevelopers.dk',
            subject,
            html,
            attachments,
        });
    } catch (error: any) {
        const sendGridErrors = error.response?.body?.errors;

        console.error(sendGridErrors);

        return res.status(error.statusCode || 500).json({ errors: sendGridErrors });
    }

    return res.status(200).json({});
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '64mb',
        },
    },
};

export default sendEmail;
