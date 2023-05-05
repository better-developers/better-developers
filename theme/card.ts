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

const sectorCard = definePartsStyle({
    container: {
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));',
        cursor: 'pointer',
        transition: 'filter 500ms',
        _hover: {
            filter: 'drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));',
        },
    },
});

const arrow = {
    content: '""',
    position: 'absolute',
    border: 'solid 15px transparent',
    borderRightColor: '#FFF',
    zIndex: 1,
};

const sectorCardLeftActive = definePartsStyle({
    ...sectorCard,
    container: {
        _before: {
            ...arrow,
            top: '50%', // half way down (vertical center).
            marginTop: '-15px', // adjust position, arrow has a height of 30px.
            left: '-30px',
        },
    },
});

const sectorCardRightActive = definePartsStyle({
    ...sectorCard,
    container: {
        _before: {
            ...arrow,
            transform: 'rotate(180deg)',
            top: '50%', // half way down (vertical center).
            marginTop: '-15px', // adjust position, arrow has a height of 30px.
            right: '-30px',
        },
    },
});

const sectorCardTopMiddleActive = definePartsStyle({
    ...sectorCard,
    container: {
        _before: {
            ...arrow,
            transform: 'rotate(90deg)',
            top: 0, // half way down (vertical center).
            marginTop: '-30px', // adjust position, arrow has a height of 30px.
            left: 'calc(50% - 15px)',
        },
    },
});

const sectorCardTopLeftActive = definePartsStyle({
    ...sectorCard,
    container: {
        _before: {
            ...arrow,
            transform: 'rotate(90deg)',
            top: 0, // half way down (vertical center).
            marginTop: '-30px', // adjust position, arrow has a height of 30px.
            left: 'calc(10% - 15px)',
        },
    },
});

const sectorCardTopRightActive = definePartsStyle({
    ...sectorCard,
    container: {
        _before: {
            ...arrow,
            transform: 'rotate(90deg)',
            top: 0, // half way down (vertical center).
            marginTop: '-30px', // adjust position, arrow has a height of 30px.
            right: 'calc(10% - 15px)',
        },
    },
});

export const cardTheme = defineMultiStyleConfig({
    variants: {
        caseCard,
        sectorCard,
        sectorCardLeftActive,
        sectorCardRightActive,
        sectorCardTopMiddleActive,
        sectorCardTopLeftActive,
        sectorCardTopRightActive,
    },
});
