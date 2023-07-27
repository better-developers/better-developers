import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
    return (
        <Html lang="da">
            <Head>
                <Script id="gradient-animation" strategy="beforeInteractive" src="/scripts/gradient-animation.min.js"></Script>
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
