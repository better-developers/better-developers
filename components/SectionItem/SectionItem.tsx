import { GridItem, GridItemProps } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

export const SectionItem: FC<PropsWithChildren<GridItemProps>> = ({ children, ...props }) => (
    <GridItem {...props} colStart={props.colStart ?? [1, 1, 'auto']} colSpan={props.colSpan ?? [6, 6, 'auto']} minW={0} px={props.px ?? 4}>
        {children}
    </GridItem>
);
