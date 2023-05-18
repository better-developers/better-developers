import { GridItem, GridItemProps } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

export const SectionItem: FC<PropsWithChildren<GridItemProps>> = ({ children, ...props }) => (
    <GridItem {...props} minW={0} px={props.px ?? 4}>
        {children}
    </GridItem>
);
