import { Button, Heading, Link, Stack } from '@chakra-ui/react';
import { useScroll } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BetterDevelopersLogo } from '../BetterDevelopersLogo/BetterDevelopersLogo';
import { NavBarContainer } from './NavBar.styles';

export const NavBar = () => {
    const router = useRouter();
    const { scrollY } = useScroll();
    const [isTop, setIsTop] = useState<boolean>(true);

    scrollY.on('change', (y) => setIsTop(y <= 0));

    return (
        <nav>
            <NavBarContainer $isTop={isTop} zIndex="100">
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
                    <Link href="/estimate">
                        <Button variant="brand">Estimer projekt</Button>
                    </Link>
                </Stack>
            </NavBarContainer>
        </nav>
    );
};
