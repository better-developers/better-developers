import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
    color: 'primaryFontColor',
});

const brandHighlight = defineStyle({
    background: 'linear-gradient(90.03deg, #F7A65A 0.02%, #F8E768 27.26%)',
    backgroundClip: 'text',
    textColor: 'transparent',
    fontWeight: '700',
});

const quote = defineStyle({
    fontStyle: 'italic',
});

export const textTheme = defineStyleConfig({
    baseStyle,
    variants: { brandHighlight, quote },
});
