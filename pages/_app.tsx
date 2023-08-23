import { builder } from '@builder.io/react';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ActiveCampaign } from '../components/ActiveCampaign/ActiveCampaign';
import { FacebookPixel } from '../components/FacebookPixel/FacebookPixel';
import { Footer } from '../components/Footer/Footer';
import { GoogleAnalytcs } from '../components/GoogleAnalytics/GoogleAnalytcs';
import { NavBar } from '../components/NavBar/NavBar';
import { NavBarProvider } from '../contexts/NavBarContext';
import '../styles/index.scss';
import theme from '../theme';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Better Developers</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"></link>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"></link>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"></link>
                <link rel="manifest" href="/site.webmanifest"></link>
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"></link>
                <meta name="msapplication-TileColor" content="#da532c"></meta>
                <meta name="theme-color" content="#ffffff"></meta>
                <meta
                    name="description"
                    content="Corporate website for BetterDevelopers - a consultant company with home in Aarhus, Denmark"></meta>
            </Head>

            <ChakraProvider theme={theme}>
                <DndProvider backend={HTML5Backend}>
                    <NavBarProvider>
                        <NavBar />
                        <Component {...pageProps} />
                        <Footer />
                    </NavBarProvider>
                </DndProvider>
            </ChakraProvider>

            {/* Analytics */}
            <GoogleAnalytcs />
            <FacebookPixel />
            <ActiveCampaign />
        </>
    );
}

export default MyApp;
