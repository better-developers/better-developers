import type { NextPage } from 'next';
import styles from '../styles/home.module.scss';
import { SectionContent } from '../components/SectionContent/SectionContent';
import { SkillsCarousel } from '../components/SkillsCarousel/SkillsCarousel';
import { WaveDivider } from '../components/WaveDivider/WaveDivider';
import { blue } from '@mui/material/colors';
import Image from 'next/image';
import FutureImage from 'next/future/image';
import { LineDivider } from '../components/LineDivider/LineDivider';
import Link from 'next/link';
import { Button, IconButton } from '@mui/material';
import WireframeLogo from '../public/bd-wireframe.svg';
import { UilAngleDoubleDown } from '@iconscout/react-unicons';
import WebBrowserGraphic from '../public/web_browser.svg';
import ConsultantGraphic from '../public/consultant.svg';
import DatingAppMockup from '../public/dating-app.svg';
import PapyrusSystem from '../public/papyrus.png';
import { Box, Stack } from '@mui/system';
import { ContactSection } from '../components/ContactSection/ContactSection';
import VisualElementOne from '../public/assets/asset-1.svg';
import VisualElementTwo from '../public/assets/asset-3.svg';
import VisualElementThree from '../public/assets/asset-7.svg';
import VisualElementFour from '../public/assets/asset-12.svg';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const useParallax = (value: MotionValue<number>, distance: number) => {
    return useTransform(value, [0, 1], [-distance, distance]);
};

const Home: NextPage = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y1 = useParallax(scrollYProgress, 300);
    const y2 = useParallax(scrollYProgress, 400);
    const y3 = useParallax(scrollYProgress, 200);

    return (
        <div ref={ref}>
            <video className={styles.bannerVideo} src="/video/jellyfish.mp4" loop autoPlay muted />

            <motion.div className={styles.visualElementContainer} style={{ y: y1 }}>
                <FutureImage src={VisualElementOne} className={styles.visualElementOne} />
            </motion.div>
            <motion.div className={styles.visualElementContainer} style={{ y: y2 }}>
                <FutureImage src={VisualElementTwo} className={styles.visualElementTwo} />
            </motion.div>
            <motion.div className={styles.visualElementContainer} style={{ y: y3 }}>
                <FutureImage src={VisualElementThree} className={styles.visualElementThree} />
            </motion.div>
            <motion.div className={styles.visualElementContainer} style={{ y: y3 }}>
                <FutureImage src={VisualElementFour} className={styles.visualElementFour} />
            </motion.div>

            <section
                className={styles.bannerSection}
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                <section className={styles.bannerSection} style={{ height: '500px' }}>
                    <SectionContent className={styles.mainSection}>
                        <h1>Fra idé til forretningsværdi</h1>
                        <p>
                            Vi hjælper med at omdanne idéer til konkrete professionelle
                            IT-projekter, der skaber <b>værdi</b> for jer.
                        </p>
                    </SectionContent>
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
                        <UilAngleDoubleDown color={'white'} size={80} />
                    </IconButton>
                </Box>
            </section>
            <section className={styles.section} id="who-are-we">
                <LineDivider />
                <SectionContent>
                    <div className={styles.splitBox}>
                        <div className={styles.image}>
                            <Image src={WireframeLogo} height={200} />
                        </div>
                        <span className={styles.text}>
                            <h2>
                                {'Vi er '}
                                <span className={styles.highlightBetterDevelopers}>
                                    Better Developers.
                                </span>
                            </h2>
                            <p>
                                <span>
                                    Better Developers består af dygtige og specialiserede
                                    softwareudviklere med fokus på web. Derudover har vi kontakt til
                                    et stort netværk af freelance konsulenter, som vi kan trække på,
                                    alt efter hvad opgaven kræver.
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
                                    Går du med et projekt i tankerne? En idé der kan skabe værdi for
                                    din virsomhed? Så lad os hjælpe dig med at tage den idé og føre
                                    den ud i vireligheden. Vi har mange års erfaring med
                                    produktudviklng indenfor IT-systemer, hvor vi lægger vægt på den
                                    gode dialog og åbenhed.
                                </span>
                            </p>
                        </span>
                        <div className={styles.image}>
                            <Image src={WebBrowserGraphic} />
                        </div>
                    </div>
                    <div className={styles.splitBoxReverse}>
                        <div className={styles.image}>
                            <Image src={ConsultantGraphic} height={300} width={300} />
                        </div>
                        <span className={styles.text}>
                            <h3>Konsulenter</h3>
                            <p>
                                <span>
                                    Vi har et hold af skarpe konsulenter der står klar til at hjælpe
                                    med lige netop jeres opgaver. En vigtig del af vores opgave er
                                    at fnde lige netop den kandidat der passer bedst til jeres
                                    virksomhed.
                                </span>
                            </p>
                        </span>
                    </div>
                    <div className={styles.splitBox}>
                        <div className={styles.image}></div>
                        <span className={styles.text}>
                            <h3>Rådgivning</h3>
                            <p>
                                <span>
                                    Vi har meget erfaring med de nyeste teknologier indenfor WEB og
                                    vi deler meget gerne ud af viden.
                                </span>
                            </p>
                        </span>
                    </div>
                </SectionContent>
            </section>
            <section className={styles.section}>
                <LineDivider />
                <SectionContent>
                    <h2>Cases</h2>
                    <div className={styles.splitBox}>
                        <div className={styles.image}>
                            <Image className={styles.imageHover} src={PapyrusSystem} />
                        </div>
                        <span className={styles.text}>
                            <h3>
                                Web Assembly og SignalR gør det lettere at samarbejde om LaTeX
                                dokumenter
                            </h3>
                            <p>
                                <span>
                                    Hvad der før i tiden skulle køres lokalt på enkelte maskiner,
                                    kan nu ved hjælp af Web Assembly og SignalR gøres i en
                                    webbrowser uden komplicerede installationer. Papyrus er et
                                    projekt der bringer de nyeste teknologier sammen i fin forening
                                    og skaber noget der er større end de enkelte dele. Ved at bringe
                                    selve dokument genereringen ud til klienterne, så kunne
                                    hastigheden øges med 900% ift. konkurenterne. Dette forbedrede
                                    brugeroplevelsen og dermed produktiviteten for brugerne af
                                    Papyrus.
                                </span>
                                <br />
                                <br />
                                <i>
                                    Projektet er skrevet i React med en .NET core backend. Pga.
                                    projektets høje kompleksitet og lange levetid, så er backenden
                                    baseret på en onion arkitektur med mediator pattern for at følge
                                    SOLID og clean code principperne.
                                </i>
                            </p>
                        </span>
                    </div>
                    <div className={styles.splitBoxReverse}>
                        <div className={styles.image}>
                            <Image
                                className={styles.imageHover}
                                src={DatingAppMockup}
                                height={500}
                            />
                        </div>
                        <span className={styles.text}>
                            <h3>Interaktiv frontend skaber højere engagement på dating PWA</h3>
                            <p>
                                <span>
                                    Markedet er mættet med dating apps, derfor er det vigtigt at
                                    skille sig ud. Konceptet bag denne dating app er at der kun
                                    forekommer ét match om dagen. Derfor var det vigtigt at skabe en
                                    platform der var meget interaktiv da det var med til at holde
                                    brugerne engagerede i PWA’en.
                                </span>
                                <br />
                                <br />
                                <i>
                                    Projektet er et koncept udviklet i React med en .NET core
                                    backend.
                                </i>
                            </p>
                        </span>
                    </div>
                    <div className={styles.splitBox}>
                        <div className={styles.image}></div>
                        <span className={styles.text}>
                            <h3>
                                Triangulering af offentlige wifi-signaler skaber heatmap af
                                befolkningstæthed
                            </h3>
                            <p>
                                <span>
                                    {`Mange institutioner har et behov for at kende
                                        befolkningstætheden eller personers bevægelse igennem en
                                        bygning. Ved hjælp af wifi-signaler kunne folks bevægelser
                                        estimeres hvorefter der på frontend kunne skabes et heatmap af
                                        tæthederne. Projektet var derfor en kombination af hardware,
                                        software, embedded og web udvikling. Systemet var lavet således
                                        at tre Raspberry Pi's blev brugt til at triangulere WiFi
                                        transmissioner. Disse blev derefter omdannet til lokations data
                                        ved en knn-algoritme. Herefter blev de sendt til en backend der
                                        kunne levere data til en frontend, som i sidste ende viste
                                        brugeren et heatmap over befolkningstætheden.`}
                                </span>
                                <br />
                                <br />
                                <i>
                                    Projektet er et koncept udviklet i Vue med en .NET core backend
                                    med RaspBerry Pi baserede wifi sniffers.
                                </i>
                            </p>
                        </span>
                    </div>
                </SectionContent>
            </section>

            <ContactSection />
        </div>
    );
};

export default Home;
