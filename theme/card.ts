import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys);

const caseCard = definePartsStyle({
    container: {
        borderRadius: '20px 0 20px 0',
        overflow: 'hidden',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));',
    },
});

export const cardTheme = defineMultiStyleConfig({
    variants: { caseCard },
});
