import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const brand = defineStyle({
    bgGradient: 'linear(to-r, brand.400, brand.200, brand.400,)',
    bgSize: '200% 100%',
    color: 'white',
    transition: 'background-position 500ms, box-shadow 500ms',
    boxShadow: '0',
    _hover: {
        textDecoration: 'underline',
        backgroundPositionX: 'right',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;',
    },
});

export const buttonTheme = defineStyleConfig({
    variants: { brand },
});
