import { Box, BoxProps, Grid } from '@chakra-ui/react';
import { FC } from 'react';

export const Section: FC<BoxProps> = ({ children, backgroundColor, ...props }) => (
    <Box {...props} position={props.position ?? 'relative'} width="100%">
        <Grid
            gridTemplateColumns={['1fr', '1fr', '1fr', '1fr', '2fr repeat(4, 1fr) 2fr']}
            gap={['2em', '2em', '2em', '1em']}
            width="100%"
            minW={0}
            {...props}>
            {children}
        </Grid>

        <Grid
            gridTemplateColumns={[
                '0.5fr repeat(4, 1fr) 0.5fr',
                '0.5fr repeat(4, 1fr) 0.5fr',
                '0.5fr repeat(4, 1fr) 0.5fr',
                '0.5fr repeat(4, 1fr) 0.5fr',
                '2fr repeat(4, 1fr) 2fr',
            ]}
            width="100%"
            height="100%"
            top="0"
            position="absolute"
            zIndex={-2}
            backgroundColor={backgroundColor}>
            <Box width="1px" background="blackAlpha.50" />
            <Box width="1px" background="blackAlpha.50" />
            <Box width="1px" background="blackAlpha.50" />
            <Box width="1px" background="blackAlpha.50" />
            <Box width="1px" background="blackAlpha.50" />
            <Box width="1px" background="blackAlpha.50" />
        </Grid>
    </Box>
);
