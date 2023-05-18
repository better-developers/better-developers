import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ActiveCampaign } from '../components/ActiveCampaign/ActiveCampaign';
import { FacebookPixel } from '../components/FacebookPixel/FacebookPixel';
import { Footer } from '../components/Footer/Footer';
import { GoogleAnalytcs } from '../components/GoogleAnalytics/GoogleAnalytcs';
import { HubspotPixel } from '../components/HubspotPixel/HubspotPixel';
import { NavBar } from '../components/NavBar/NavBar';
import { NavBarProvider } from '../contexts/NavBarContext';
import '../styles/index.scss';
import theme from '../theme';

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
            </Head>

            <ChakraProvider theme={theme}>
                <NavBarProvider>
                    <NavBar />
                    <Component {...pageProps} />
                    <Footer />
                </NavBarProvider>
            </ChakraProvider>

            {/* Analytics */}
            <GoogleAnalytcs />
            <FacebookPixel />
            <HubspotPixel />
            <ActiveCampaign />
        </>
    );
}

export default MyApp;
