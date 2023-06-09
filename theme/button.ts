import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const brand = defineStyle({
    bgGradient: 'linear(to-r, #F7A55A, #F8E969, #F7A55A,)',
    bgSize: '200% 100%',
    color: 'white',
    transition: 'background-position 500ms, box-shadow 500ms',
    boxShadow: '0',
    fontWeight: 700,
    _hover: {
        textDecoration: 'underline',
        backgroundPositionX: 'right',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;',
    },
    _loading: {
        opacity: 1,
        _hover: {
            bgGradient: 'linear(to-r, #F7A55A, #F8E969, #F7A55A,)',
            bgSize: '200% 100%',
            opacity: 1,
        },
    },
});

export const buttonTheme = defineStyleConfig({
    variants: { brand },
});
