import Image from 'next/image';
import { FC } from 'react';
import BDLogo from '../../public/better-developers-logo.svg';

type BetterDevelopersLogoProps = {
    onClick: () => void;
};

export const BetterDevelopersLogo: FC<BetterDevelopersLogoProps> = ({ onClick }) => {
    return <Image src={BDLogo} onClick={onClick} height={75} width={75} alt="Logo" />;
};
