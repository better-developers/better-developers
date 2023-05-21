import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { Open_Sans } from 'next/font/google';
import { applicationFormTheme } from './application-form';
import { buttonTheme } from './button';
import { cardTheme } from './card';
import { headingTheme } from './heading';
import { textTheme } from './text';

const openSans = Open_Sans({ subsets: ['latin'] });

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const theme = extendTheme({
    config,
    fonts: {
        body: openSans.style.fontFamily,
        heading: openSans.style.fontFamily,
        mono: openSans.style.fontFamily,
    },
    colors: {
        primaryFontColor: '#425466',
        brand: {
            50: '#fff0dd',
            100: '#ffd5b1',
            200: '#fcbb83',
            300: '#f9a053',
            400: '#f68523',
            500: '#dd6b0b',
            600: '#ac5406',
            700: '#7b3c03',
            800: '#4c2300',
            900: '#1e0a00',
        },
    },
    components: { Button: buttonTheme, Text: textTheme, Heading: headingTheme, Card: cardTheme, ApplicationForm: applicationFormTheme },
});

export default theme;
