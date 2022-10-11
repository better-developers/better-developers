import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GoogleAnalytcs } from '../components/GoogleAnalytics/GoogleAnalytcs';
import { NavBar } from '../components/NavBar/NavBar';
import "../styles/index.scss"
import {PageContent} from "../components/PageContent/PageContent";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Better Developers</title>
            </Head>
            <GoogleAnalytcs />
            <NavBar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
