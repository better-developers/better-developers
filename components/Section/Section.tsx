import { Box, BoxProps, Grid } from '@chakra-ui/react';
import { FC } from 'react';

export const Section: FC<BoxProps> = ({ children, ...props }) => (
    <Box {...props} position={props.position ?? 'relative'} width="100%">
        <Grid gridTemplateColumns="0.5fr repeat(4, 1fr) 0.5fr" width="100%" minW={0}>
            {children}
        </Grid>
    </Box>
);
