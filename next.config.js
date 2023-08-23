const withBuilderDevTools = require('@builder.io/dev-tools/next')();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
    reactStrictMode: true,
    swcMinify: true,
    images: {
        unoptimized: true,
    },
});

module.exports = nextConfig;
