import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const brand = defineStyle({
    bgGradient: 'linear(to-r, brand.400, brand.200)',
    color: 'white',
    _hover: {
        textDecoration: 'underline',
    },
});

export const buttonTheme = defineStyleConfig({
    variants: { brand },
});
