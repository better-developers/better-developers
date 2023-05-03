import { Button, Flex, Heading, Link, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BetterDevelopersLogo } from '../BetterDevelopersLogo/BetterDevelopersLogo';
import { Variants, backIn, motion, useScroll, useViewportScroll } from 'framer-motion';
import { useState } from 'react';
import { NavBarContainer } from './NavBar.styles';

export const NavBar = () => {
    const router = useRouter();
    const { scrollY } = useScroll();
    const [isTop, setIsTop] = useState<boolean>(true);

    scrollY.on('change', (y) => {
        if (y <= 0) setIsTop(true);
        else setIsTop(false);
    });

    return (
        <nav>
            <NavBarContainer isTop={isTop} zIndex="100">
                <Stack direction="row" spacing="24px" alignItems="center" cursor="pointer" onClick={() => router.push('/')}>
                    <BetterDevelopersLogo />
                    <Heading size="md" color="inherit">
                        Better Developers
                    </Heading>
                </Stack>

                <Stack direction="row" spacing="42px" fontWeight="bold">
                    <Link href="/services" alignSelf="center">
                        Services
                    </Link>
                    <Link href="/cases" alignSelf="center">
                        Cases
                    </Link>
                    <Link href="/businesses" alignSelf="center">
                        Brancher
                    </Link>
                    <Link href="/about" alignSelf="center">
                        Om os
                    </Link>
                    <Link href="/career" alignSelf="center">
                        Karriere
                    </Link>

                    <Button variant="brand">
                        <Link href="/estimate">Estimer projekt</Link>
                    </Button>
                </Stack>
            </NavBarContainer>
        </nav>
    );
};
