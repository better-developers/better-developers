/* eslint-disable @next/next/next-script-for-ga */
import Script from 'next/script';

export const GoogleAnalytcs = () => {
    return (
        <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-9TK421REJQ" />
            <Script src="/analytics/google-analytics.js" />
        </>
    );
};
