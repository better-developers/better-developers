import { Button, Flex, Heading, Link, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BetterDevelopersLogo } from '../BetterDevelopersLogo/BetterDevelopersLogo';
import { Variants, backIn, motion, useScroll, useViewportScroll } from 'framer-motion';
import { useState } from 'react';
import styled from '@emotion/styled';

export const NavBarContainer = styled(Flex)<{ $isTop: boolean }>`
    position: fixed;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 48px 11vw;
    background-color: ${(props) => (props.$isTop ? 'transparent' : 'white')};
    color: ${(props) => (props.$isTop ? 'white' : 'var(--chakra-colors-primaryFontColor)')};
    border-bottom: ${(props) => (props.$isTop ? 'none' : '1px solid rgba(0,0,0, 0.1)')};
    box-shadow: ${(props) => (props.$isTop ? 'none' : 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;')};
    transition: background-color 1s 300ms, color 500ms 500ms, box-shadow 500ms, border-bottom 500ms 500ms;
`;
