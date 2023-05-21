import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const light = defineStyle({
    color: 'black',
    bgColor: 'white',
    _placeholder: {
        color: 'black',
    },
});

const dark = defineStyle({
    color: 'white',
    bgColor: '#535266',
    _placeholder: {
        color: 'white',
    },
});

export const applicationFormTheme = defineStyleConfig({
    variants: { light, dark },
});

export type ApplicationFormVariant = keyof NonNullable<(typeof applicationFormTheme)['variants']>;
