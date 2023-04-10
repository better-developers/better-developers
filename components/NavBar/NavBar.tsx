import { Button, Flex, Heading, Link, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BetterDevelopersLogo } from '../BetterDevelopersLogo/BetterDevelopersLogo';

export const NavBar = () => {
    const router = useRouter();

    return (
        <nav>
            <Flex position="fixed" alignItems="center" justifyContent="space-between" textColor="white" w="100%" px="15vw" py="12">
                <Stack direction="row" spacing="24px" alignItems="center">
                    <BetterDevelopersLogo onClick={() => router.push('/')} />
                    <Heading size="md">Better Developers</Heading>
                </Stack>

                <Stack direction="row" spacing="42px" fontWeight="bold">
                    <Link href="/" alignSelf="center">
                        Services
                    </Link>
                    <Link href="/" alignSelf="center">
                        Cases
                    </Link>
                    <Link href="/" alignSelf="center">
                        Brancher
                    </Link>
                    <Link href="/" alignSelf="center">
                        Om os
                    </Link>
                    <Link href="/" alignSelf="center">
                        Karriere
                    </Link>

                    <Button colorScheme="brand" variant="solid">
                        Estimer projekt
                    </Button>
                </Stack>
            </Flex>
        </nav>
    );
};
