import sendgrid from '@sendgrid/mail';
import { ArrayElement } from '../types/array-element';

export type Attachment = ArrayElement<NonNullable<Extract<Parameters<typeof sendgrid.send>[0], { attachments?: any[] }>['attachments']>>;

export interface SendEmailRequest {
    subject: string;
    html: string;
    attachments?: Array<Attachment>;
}
