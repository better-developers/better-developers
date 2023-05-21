import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const light = defineStyle({});

const dark = defineStyle({});

export const applicationFormTheme = defineStyleConfig({
    variants: { light, dark },
});
