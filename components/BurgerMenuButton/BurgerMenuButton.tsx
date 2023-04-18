import Image from 'next/image';
import { FC } from 'react';
import BurgerMenu from '../../public/burger-menu.svg';
import styles from './BurgerMenuButton.module.scss';

type BurgerMenuButtonProps = {
    onClick: () => void;
};

export const BurgerMenuButton: FC<BurgerMenuButtonProps> = ({ onClick }) => (
    <Image className={styles.container} onClick={onClick} src={BurgerMenu} alt="" />
);
