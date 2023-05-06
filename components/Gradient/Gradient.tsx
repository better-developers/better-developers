import Head from 'next/head';
import Script from 'next/script';
('use client');

export const Gradient = () => {
    return (
        <>
            <Script
                id="initialise-gradient"
                dangerouslySetInnerHTML={{
                    __html: `var gradient = new Gradient(); gradient.initGradient('#gradient-canvas');`,
                }}></Script>

            <canvas id="gradient-canvas" style={{ width: '100%', height: '100%' }}></canvas>
        </>
    );
};
