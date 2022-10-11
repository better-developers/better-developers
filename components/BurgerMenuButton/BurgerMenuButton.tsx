import Image from 'next/image';
import BurgerMenu from '../../public/burger-menu.svg';
import styles from './BurgerMenuButton.module.scss';
import { FC } from 'react';

type BurgerMenuButtonProps = {
    onClick: () => void;
};

export const BurgerMenuButton: FC<BurgerMenuButtonProps> = ({ onClick }) => (
    <Image className={styles.container} onClick={onClick} src={BurgerMenu} />
);
