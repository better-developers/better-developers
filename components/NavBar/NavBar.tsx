import { Button, Flex, Heading, Link, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BetterDevelopersLogo } from '../BetterDevelopersLogo/BetterDevelopersLogo';

export const NavBar = () => {
    const router = useRouter();

    return (
        <nav>
            <Flex
                // position="fixed"
                position="absolute"
                alignItems="center"
                justifyContent="space-between"
                textColor="white"
                w="100%"
                px="15vw"
                py="12"
                zIndex="100"
            >
                <Stack direction="row" spacing="24px" alignItems="center">
                    <BetterDevelopersLogo onClick={() => router.push('/')} />
                    <Heading size="md">Better Developers</Heading>
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
            </Flex>
        </nav>
    );
};
