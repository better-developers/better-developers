import Image from 'next/image';
import { FC } from 'react';
import BDLogo from '../../public/better-developers-logo.svg';

export const BetterDevelopersLogo: FC = () => {
    return <Image src={BDLogo} width={75} alt="Logo" />;
};
