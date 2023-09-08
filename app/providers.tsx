'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { NavBarProvider } from '../contexts/NavBarContext';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                <DndProvider backend={HTML5Backend}>
                    <NavBarProvider>{children}</NavBarProvider>
                </DndProvider>
            </ChakraProvider>
        </CacheProvider>
    );
};
