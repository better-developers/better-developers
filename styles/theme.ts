import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const theme = extendTheme({
    config,
    colors: {
        brand: {
            50: '#fff1de',
            100: '#fdd6b2',
            200: '#fabd84',
            300: '#f7a255',
            400: '#f38826',
            500: '#da6e0e',
            600: '#aa5608',
            700: '#7a3d04',
            800: '#4a2400',
            900: '#1d0a00',
        },
    },
});

export default theme;
