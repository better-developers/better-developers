import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { buttonTheme } from './button';

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const theme = extendTheme({
    config,
    colors: {
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
    components: { Button: buttonTheme },
});

export default theme;
