import { Flex, Heading, Link, Stack } from '@chakra-ui/react';
import { useScroll } from 'framer-motion';
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

    scrollY.on('change', (y) => setIsTop(y <= 0));

    return (
        <nav>
            <Flex
                pos="fixed"
                align="center"
                justify="space-between"
                w="100%"
                p="48px 11vw"
                bgColor={isTop ? 'transparent' : 'white'}
                color={fontColor}
                borderBottom={isTop ? 'none' : '1px solid rgba(0,0,0, 0.1)'}
                boxShadow={isTop ? 'none' : 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;'}
                transition="background-color 300ms, color 500ms, box-shadow 300ms, border-bottom 500ms 500ms"
                zIndex="100">
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

                    <ContactButton></ContactButton>
                </Stack>
            </Flex>
        </nav>
    );
};
