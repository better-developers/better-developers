import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
    color: 'primaryFontColor',
});

const hyphen = defineStyle({
    hyphens: 'auto',
});

export const headingTheme = defineStyleConfig({
    baseStyle,
    variants: { hyphen },
});
