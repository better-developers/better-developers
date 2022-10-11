import type { NextPage } from 'next';
import styles from '../styles/home.module.scss';
import { SectionContent } from '../components/SectionContent/SectionContent';
import { SkillsCarousel } from '../components/SkillsCarousel/SkillsCarousel';
import { WaveDivider } from '../components/WaveDivider/WaveDivider';
import { blue } from '@mui/material/colors';
import Image from 'next/image';
import { LineDivider } from '../components/LineDivider/LineDivider';
import Link from 'next/link';
import { Button, IconButton } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { UilChatBubbleUser } from '@iconscout/react-unicons';
import WireframeLogo from '../public/logo_wireframe.svg';
import { UilAngleDoubleDown } from '@iconscout/react-unicons';
import WebBrowserGraphic from '../public/web_browser.svg';
import ConsultantGraphic from '../public/consultant.svg';
import { Box, Stack } from '@mui/system';

const Home: NextPage = () => {
    return (
        <>
            <video className={styles.bannerVideo} src="/video/jellyfish.mp4" loop autoPlay muted />
            <section className={styles.bannerSection} style={{ height: '100vh' }}>
                <section className={styles.bannerSection} style={{ height: '600px' }}>
                    <SectionContent className={styles.mainSection}>
                        <h1>Fra idé til forretningsværdi</h1>
                        <p>
                            Vi hjælper med at omdanne idéer til konkrete professionelle
                            IT-projekter, der skaber <b>værdi</b> for jer.{' '}
                        </p>
                    </SectionContent>
                    <WaveDivider />
                </section>

                <section className={styles.bannerSection}>
                    <SectionContent>
                        <h3>Hvad kan vi?</h3>
                        <p>
                            Vi har kompetencer inden for et bredt udvalg af teknologier, frameworks
                            og sprog - primært inden for web.
                        </p>
                        <SkillsCarousel />
                    </SectionContent>
                </section>

                <Box textAlign={'center'}>
                    <IconButton href={'#who-are-we'}>
                        <UilAngleDoubleDown size={80} />
                    </IconButton>
                </Box>
            </section>
            <section className={styles.section} id="who-are-we">
                <LineDivider />
                <SectionContent>
                    <div className={styles.splitBox}>
                        <div className={styles.image}>
                            <Image src={WireframeLogo} height={300} />
                        </div>
                        <span className={styles.text}>
                            <h2>
                                {'Vi er '}
                                <span className={styles.highlightBetterDevelopers}>
                                    Better Developers.
                                </span>
                            </h2>
                            <p className={styles.description}>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                    accusamus accusantium amet animi asperiores atque autem corporis
                                    dignissimos eum eveniet fugit iste nam nesciunt obcaecati
                                    officia porro repudiandae, sapiente vitae.
                                </span>
                                <span>
                                    Architecto delectus dolor dolore doloremque dolores ducimus, ea
                                    error ex, excepturi in maiores modi nobis nostrum obcaecati odio
                                    omnis placeat praesentium qui quidem repellendus sapiente
                                    tempora tenetur voluptas voluptate voluptates.
                                </span>
                            </p>
                        </span>
                    </div>
                </SectionContent>
            </section>
            <section className={styles.section}>
                <LineDivider />
                <SectionContent>
                    <h2>Services</h2>
                    <div className={styles.splitBox}>
                        <span className={styles.text}>
                            <h3>End-to-End Projekter</h3>
                            <p>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                    accusamus accusantium amet animi asperiores atque autem corporis
                                    dignissimos eum eveniet fugit iste nam nesciunt obcaecati
                                    officia porro repudiandae, sapiente vitae.
                                </span>
                            </p>
                        </span>
                        <div className={styles.image}>
                            <Image src={WebBrowserGraphic} />
                        </div>
                    </div>
                    <div className={styles.splitBoxReverse}>
                        <div className={styles.image}>
                            <Image src={ConsultantGraphic} width={200} />
                        </div>
                        <span className={styles.text}>
                            <h3>Konsulenter</h3>
                            <p>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                    accusamus accusantium amet animi asperiores atque autem corporis
                                    dignissimos eum eveniet fugit iste nam nesciunt obcaecati
                                    officia porro repudiandae, sapiente vitae.
                                </span>
                                <br />
                                <br />
                                <span>
                                    Architecto delectus dolor dolore doloremque dolores ducimus, ea
                                    error ex, excepturi in maiores modi nobis nostrum obcaecati odio
                                    omnis placeat praesentium qui quidem repellendus sapiente
                                    tempora tenetur voluptas voluptate voluptates.
                                </span>
                            </p>
                        </span>
                    </div>
                    <div className={styles.splitBox}>
                        <h3>Rådgivning</h3>
                        <div className={styles.image}></div>
                        <div>
                            <p>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                    accusamus accusantium amet animi asperiores atque autem corporis
                                    dignissimos eum eveniet fugit iste nam nesciunt obcaecati
                                    officia porro repudiandae, sapiente vitae.
                                </span>
                                <br />
                                <br />
                                <span>
                                    Architecto delectus dolor dolore doloremque dolores ducimus, ea
                                    error ex, excepturi in maiores modi nobis nostrum obcaecati odio
                                    omnis placeat praesentium qui quidem repellendus sapiente
                                    tempora tenetur voluptas voluptate voluptates.
                                </span>
                                <br />
                                <br />
                                <Link href="">Her</Link>
                            </p>
                        </div>
                    </div>
                </SectionContent>
            </section>
            <section className={styles.section}>
                <LineDivider />
                <SectionContent>
                    <h2>Cases</h2>
                    <div className={styles.splitBox}>
                        <h3>sad</h3>
                        <div className={styles.image}></div>
                        <div>
                            <p>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                    accusamus accusantium amet animi asperiores atque autem corporis
                                    dignissimos eum eveniet fugit iste nam nesciunt obcaecati
                                    officia porro repudiandae, sapiente vitae.
                                </span>
                                <br />
                                <br />
                                <span>
                                    Architecto delectus dolor dolore doloremque dolores ducimus, ea
                                    error ex, excepturi in maiores modi nobis nostrum obcaecati odio
                                    omnis placeat praesentium qui quidem repellendus sapiente
                                    tempora tenetur voluptas voluptate voluptates.
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.splitBoxReverse}>
                        <div className={styles.image}>sda</div>
                        <h3>sad</h3>
                        <div>
                            <p>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                    accusamus accusantium amet animi asperiores atque autem corporis
                                    dignissimos eum eveniet fugit iste nam nesciunt obcaecati
                                    officia porro repudiandae, sapiente vitae.
                                </span>
                                <br />
                                <br />
                                <span>
                                    Architecto delectus dolor dolore doloremque dolores ducimus, ea
                                    error ex, excepturi in maiores modi nobis nostrum obcaecati odio
                                    omnis placeat praesentium qui quidem repellendus sapiente
                                    tempora tenetur voluptas voluptate voluptates.
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.splitBox}>
                        <h3>sad</h3>
                        <div className={styles.image}></div>
                        <div>
                            <p>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                    accusamus accusantium amet animi asperiores atque autem corporis
                                    dignissimos eum eveniet fugit iste nam nesciunt obcaecati
                                    officia porro repudiandae, sapiente vitae.
                                </span>
                                <br />
                                <br />
                                <span>
                                    Architecto delectus dolor dolore doloremque dolores ducimus, ea
                                    error ex, excepturi in maiores modi nobis nostrum obcaecati odio
                                    omnis placeat praesentium qui quidem repellendus sapiente
                                    tempora tenetur voluptas voluptate voluptates.
                                </span>
                                <br />
                                <br />
                                <Link href="">Her</Link>
                            </p>
                        </div>
                    </div>
                </SectionContent>
            </section>
            <section className={styles.section}>
                <LineDivider />
                <SectionContent>
                    <h2 style={{ textAlign: 'center' }}>Lad os skabe noget sammen</h2>
                    <form
                        method="POST"
                        id="contactForm"
                        name="contactForm"
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
        </>
    );
};

export default Home;
