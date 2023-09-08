import { Metadata } from 'next';
import Script from 'next/script';
import { FC, PropsWithChildren } from 'react';
import { Footer } from '../components/Footer/Footer';
import { NavBar } from '../components/NavBar/NavBar';
import { Providers } from './providers';

export const metadata: Metadata = {
    title: 'Better Developers',
    description: 'Corporate website for BetterDevelopers - a consultant company with home in Aarhus, Denmark',
};

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html lang="en">
            <Script id="google-tag-manager" strategy="afterInteractive">
                {`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-5PKN24S7');
                    `}
            </Script>

            <body>
                <Providers>
                    <NavBar />
                    {children}
                    <Footer />
                </Providers>

                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5PKN24S7" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    }}
                />
            </body>
        </html>
    );
};

export default RootLayout;
