import styles from './BetterDevelopersLogo.module.scss';
import { FC, useState } from 'react';
import Image from 'next/image';
import BDLogo from '../../public/better-developers-logo.svg';

type BetterDevelopersLogoProps = {
    onClick: () => void;
};

export const BetterDevelopersLogo: FC<BetterDevelopersLogoProps> = ({ onClick }) => {
    return <Image src={BDLogo} onClick={onClick} height={75} width={75} />;
};
