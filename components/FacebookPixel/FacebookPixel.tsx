﻿/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

export const FacebookPixel = () => {
    return (
        <>
            <script src="/analytics/facebook-analytics.js" async></script>
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src="https://www.facebook.com/tr?id=644000407251652&ev=PageView&noscript=1"
                />
            </noscript>
        </>
    );
};
