import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GoogleAnalytcs } from '../components/GoogleAnalytics/GoogleAnalytcs';
import { NavBar } from '../components/NavBar/NavBar';
import "../styles/index.scss"
import {PageContent} from "../components/PageContent/PageContent";
import {FacebookPixel} from "../components/FacebookPixel/FacebookPixel";
import {HubspotPixel} from "../components/HubspotPixel/HubspotPixel";
import {ActiveCampaign} from "../components/ActiveCampaign/ActiveCampaign";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Better Developers</title>
            </Head>
            
            <NavBar />
            <Component {...pageProps} />

            {/* Analytics */}
            <GoogleAnalytcs />
            <FacebookPixel />
            <HubspotPixel/>
            <ActiveCampaign/>
        </>
    );
}

export default MyApp;
