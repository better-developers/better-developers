﻿import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Heading, Hide, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Show, Stack } from '@chakra-ui/react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { NavBarContext } from '../../contexts/NavBarContext';
import { BetterDevelopersLogo } from '../BetterDevelopersLogo/BetterDevelopersLogo';
import { ContactButton } from '../ContactButton/ContactButton';

export const NavBar = () => {
    const router = useRouter();
    const [color] = useContext(NavBarContext);
    const { scrollY } = useScroll();
    const [isTop, setIsTop] = useState<boolean>(true);

    const contextColor = color === 'light' ? 'white' : color === 'dark' ? 'primary' : 'primary';
    const fontColor = isTop ? contextColor : 'primary';

    useMotionValueEvent(scrollY, 'change', (y) => setIsTop(y <= 0));

    const links = [
        { href: 'services', text: 'Services' },
        { href: 'cases', text: 'Cases' },
        { href: 'businesses', text: 'Brancher' },
        { href: 'about', text: 'Om os' },
        { href: 'career', text: 'Karriere' },
    ];

    return (
        <nav>
            <Flex
                pos="fixed"
                align="center"
                justify="space-between"
                w="100%"
                p={['32px 11vw', '32px 11vw', '48px 11vw']}
                bgColor={isTop ? 'transparent' : 'white'}
                borderBottom={isTop ? 'none' : '1px solid rgba(0,0,0, 0.1)'}
                boxShadow={isTop ? 'none' : 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;'}
                transition="background-color 300ms, color 500ms, box-shadow 300ms, border-bottom 500ms 500ms"
                zIndex="100">
                <Stack direction="row" spacing="24px" alignItems="center" cursor="pointer" onClick={() => router.push('/')}>
                    <BetterDevelopersLogo />

                    <Hide below="xl">
                        <Heading color={fontColor} size="md">
                            Better Developers
                        </Heading>
                    </Hide>
                </Stack>

                <Show below="lg">
                    <Menu>
                        <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" color={fontColor} />
                        <MenuList>
                            {links.map((link, i) => (
                                <MenuItem key={i} as="a" href={link.href}>
                                    {link.text}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </Show>

                <Hide below="lg">
                    <Stack direction="row" spacing="42px" fontWeight="bold">
                        {links.map((link, i) => (
                            <Link key={i} color={['primary', 'primary', 'primary', fontColor]} href={`/${link.href}`} alignSelf="center">
                                {link.text}
                            </Link>
                        ))}
                        <ContactButton></ContactButton>,
                    </Stack>
                </Hide>
            </Flex>
        </nav>
    );
};
