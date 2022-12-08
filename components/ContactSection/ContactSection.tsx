import styles from '../../styles/home.module.scss';
import { LineDivider } from '../LineDivider/LineDivider';
import { SectionContent } from '../SectionContent/SectionContent';
import { Button } from '@mui/material';

export const ContactSection = () => (
    <section className={styles.section} id={'contact-us'}>
        <LineDivider />
        <SectionContent>
            <h2 style={{ textAlign: 'center' }}>Lad os skabe noget sammen</h2>
            <form
                method="POST"
                id="contactForm"
                name="contactForm"
                action="sendmail.php"
                className={styles.contactForm}
                noValidate>
                <input
                    type="text"
                    className={styles.input}
                    name="name"
                    id="name"
                    placeholder="Fulde navn"
                />

                <input
                    type="email"
                    className={styles.input}
                    name="email"
                    id="email"
                    placeholder="Email"
                />

                <input
                    type="text"
                    className={styles.input}
                    name="phone"
                    id="phone"
                    placeholder="Telf."
                />

                <input
                    type="text"
                    className={styles.input}
                    name="position"
                    id="position"
                    placeholder="Stilling"
                />

                <input
                    type="text"
                    className={styles.input}
                    name="subject"
                    id="subject"
                    placeholder="Emne"
                />

                <textarea
                    name="message"
                    className={styles.input}
                    id="message"
                    cols={30}
                    rows={8}
                    placeholder="Skriv din besked her..."
                    style={{ height: 'inherit' }}
                />

                <Button variant={'outlined'} type="submit">
                    Send
                </Button>
            </form>
        </SectionContent>
    </section>
);
