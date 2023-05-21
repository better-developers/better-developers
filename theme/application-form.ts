import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const light = defineStyle({
    color: 'primaryFontColor',
    bgColor: 'white',
});

const dark = defineStyle({
    color: 'white',
    bgColor: '#535266',
});

export const applicationFormTheme = defineStyleConfig({
    variants: { light, dark },
});

export type ApplicationFormVariant = keyof NonNullable<(typeof applicationFormTheme)['variants']>;
