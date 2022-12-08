import type { NextPage } from 'next';
import styles from '../../styles/home.module.scss';
import Image from 'next/image';
import WireframeLogo from '../../public/logo_wireframe.svg';
import ConsultantGraphic from '../../public/consultant.svg';
import { SectionContent } from '../../components/SectionContent/SectionContent';
import { LineDivider } from '../../components/LineDivider/LineDivider';
import { ContactSection } from '../../components/ContactSection/ContactSection';
import { motion } from 'framer-motion';

import StepOne from '../../public/afklaring.svg';
import StepTwo from '../../public/specifikation.svg';
import StepThree from '../../public/design.svg';
import StepFour from '../../public/udvikling.svg';
import { Button } from '@mui/material';
import { Box, Stack } from '@mui/system';

const Home: NextPage = () => {
    return (
        <>
            <video
                className={styles.bannerVideo}
                src="/video/jellyfish.mp4"
                loop
                autoPlay
                muted
                style={{ height: 700 }}
            />
            <section className={styles.bannerSection} style={{ height: '700px' }}>
                <SectionContent className={styles.mainSection}>
                    <h1>Some kind of banner</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
                        elementum nisl.
                    </p>
                </SectionContent>
            </section>

            <section className={styles.section}>
                <LineDivider />
                <SectionContent>
                    <Stack alignItems={'flex-start'} component={'div'} gap={'24px'}>
                        <span className={styles.text}>
                            <h2>Subtitle</h2>
                            <p>
                                Donec dapibus mollis libero, at sollicitudin ipsum fermentum
                                viverra. Proin sodales tortor at augue dapibus vehicula. Morbi
                                pellentesque massa ex, nec ultricies lectus scelerisque a. Vivamus
                                vulputate pellentesque condimentum.
                            </p>
                        </span>
                        <Button variant={'contained'} href={'#contact-us'}>
                            Call to action
                        </Button>
                    </Stack>
                </SectionContent>
            </section>

            <section
                className={styles.section}
                style={{
                    height: 400,
                    background:
                        'linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url(teamwork.jpg)',
                }}>
                <LineDivider />

                <SectionContent></SectionContent>
            </section>
            <section className={styles.section}>
                <LineDivider />
                <SectionContent>
                    <h2>Process</h2>
                    <div className={styles.splitBox}>
                        <span className={styles.text}>
                            <h3>
                                <span className={styles.highlightBetterDevelopers}>
                                    1. Afklaring
                                </span>
                            </h3>
                            <p>
                                Donec dapibus mollis libero, at sollicitudin ipsum fermentum
                                viverra. Proin sodales tortor at augue dapibus vehicula. Morbi
                                pellentesque massa ex, nec ultricies lectus scelerisque a. Vivamus
                                vulputate pellentesque condimentum.
                            </p>
                        </span>
                        <div className={styles.image}>
                            <motion.div
                                className={styles.image}
                                initial={{ x: 900, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 100,
                                    bounce: 0.2,
                                    mass: 1,
                                    damping: 15,
                                }}>
                                <Image src={StepOne} height={200} />
                            </motion.div>
                        </div>
                    </div>
                    <div className={styles.splitBoxReverse}>
                        <motion.div
                            className={styles.image}
                            initial={{ x: -900, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                bounce: 0.2,
                                mass: 1,
                                damping: 15,
                            }}>
                            <Image src={StepTwo} height={300} />
                        </motion.div>
                        <span className={styles.text}>
                            <h3>
                                <span className={styles.highlightBetterDevelopers}>
                                    2. Specifikation
                                </span>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
                                elementum nisl. Fusce lorem ex, commodo ac sagittis id, ultrices at
                                lorem. Fusce ligula est, pharetra a neque sed, dignissim feugiat
                                dui. Quisque consequat neque vitae tortor scelerisque, at iaculis
                                purus fermentum.
                            </p>
                        </span>
                    </div>
                    <div className={styles.splitBox}>
                        <div className={styles.image}>
                            <motion.div
                                className={styles.image}
                                initial={{ x: 900, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 100,
                                    bounce: 0.2,
                                    mass: 1,
                                    damping: 15,
                                }}>
                                <Image src={StepThree} height={300} />
                            </motion.div>
                        </div>
                        <span className={styles.text}>
                            <h3>
                                <span className={styles.highlightBetterDevelopers}>3. Design</span>
                            </h3>
                            <p>
                                Etiam porttitor porttitor ex, quis ultrices magna congue a. Donec
                                dapibus mollis libero, at sollicitudin ipsum fermentum viverra.
                                Proin sodales tortor at augue dapibus vehicula. Morbi pellentesque
                                massa ex, nec ultricies lectus scelerisque a. Vivamus vulputate
                                pellentesque condimentum.
                            </p>
                        </span>
                    </div>
                    <div className={styles.splitBoxReverse}>
                        <motion.div
                            className={styles.image}
                            initial={{ x: -900, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                bounce: 0.2,
                                mass: 1,
                                damping: 15,
                            }}>
                            <Image src={StepFour} height={300} width={300} />
                        </motion.div>
                        <span className={styles.text}>
                            <h3>
                                <span className={styles.highlightBetterDevelopers}>
                                    4. Udvikling
                                </span>
                            </h3>
                            <p>
                                Orci varius natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Etiam porttitor porttitor ex, quis ultrices
                                magna congue a. Donec dapibus mollis libero, at sollicitudin ipsum
                                fermentum viverra. Proin sodales tortor at augue dapibus vehicula.
                                Morbi pellentesque massa ex, nec ultricies lectus scelerisque a.
                                Vivamus vulputate pellentesque condimentum.
                            </p>
                        </span>
                    </div>
                </SectionContent>
            </section>

            <section
                className={styles.section}
                style={{
                    background:
                        'linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url(teamwork.jpg)',
                }}>
                <LineDivider />

                <SectionContent>
                    <Stack alignItems={'flex-start'} component={'div'} gap={'24px'}>
                        <span className={styles.text}>
                            <h3>
                                <span className={styles.highlightBetterDevelopers}>
                                    One last explanation
                                </span>
                            </h3>
                            <p>
                                Donec dapibus mollis libero, at sollicitudin ipsum fermentum
                                viverra. Proin sodales tortor at augue dapibus vehicula. Morbi
                                pellentesque massa ex, nec ultricies lectus scelerisque a. Vivamus
                                vulputate pellentesque condimentum.
                            </p>
                        </span>
                        <Button variant={'contained'} href={'#contact-us'}>
                            Call to action
                        </Button>
                    </Stack>
                </SectionContent>
            </section>

            <ContactSection />
        </>
    );
};

export default Home;
