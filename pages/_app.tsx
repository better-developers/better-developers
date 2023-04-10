import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ActiveCampaign } from '../components/ActiveCampaign/ActiveCampaign';
import { FacebookPixel } from '../components/FacebookPixel/FacebookPixel';
import { GoogleAnalytcs } from '../components/GoogleAnalytics/GoogleAnalytcs';
import { HubspotPixel } from '../components/HubspotPixel/HubspotPixel';
import { NavBar } from '../components/NavBar/NavBar';
import '../styles/index.scss';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Better Developers</title>
            </Head>

            <ChakraProvider theme={theme}>
                <NavBar />
                <Component {...pageProps} />
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
