import { chakra } from '@chakra-ui/react';
import NextImage from 'next/image';
import { FC } from 'react';
import BDLogo from '../../public/better-developers-logo.svg';

export const BetterDevelopersLogo: FC = () => {
    const Image = chakra(NextImage, {
        baseStyle: { width: ['40px', '40px', '75px'] },
        shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
    });

    return <Image src={BDLogo} alt="Logo" />;
};
