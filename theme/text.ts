import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
    color: 'primaryFontColor',
});

export const textTheme = defineStyleConfig({
    baseStyle,
});
