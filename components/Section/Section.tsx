import { Box, BoxProps, Grid, GridItem } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

export const Section: FC<BoxProps> = ({ children, ...props }) => (
    <Box {...props} position="relative" width="100%">
        <Grid gridTemplateColumns="0.5fr repeat(4, 1fr) 0.5fr" width="100%" minW={0}>
            <GridItem colStart={2} colEnd={6}>
                <Grid gridTemplateColumns="repeat(4, 1fr)">{children}</Grid>
            </GridItem>
        </Grid>
        <Grid gridTemplateColumns="0.5fr repeat(4, 1fr) 0.5fr" width="100%" height="100%" top="0" position="absolute" zIndex={-2}>
            <Box width="1px" background="blackAlpha.50" />
            <Box width="1px" background="blackAlpha.50" />
            <Box width="1px" background="blackAlpha.50" />
            <Box width="1px" background="blackAlpha.50" />
            <Box width="1px" background="blackAlpha.50" />
            <Box width="1px" background="blackAlpha.50" />
        </Grid>
    </Box>
);
