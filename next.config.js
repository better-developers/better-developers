/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        loader: 'akamai',
        path: '',
    },
    experimental: {
        images: {
            allowFutureImage: true,
        },
    },
};

module.exports = nextConfig;
