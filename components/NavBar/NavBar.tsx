import { BetterDevelopersLogo } from '../BetterDevelopersLogo/BetterDevelopersLogo';
import styles from './NavBar.module.scss';
import { BurgerMenuButton } from '../BurgerMenuButton/BurgerMenuButton';
import { useRouter } from 'next/router';

export const NavBar = () => {
    const router = useRouter();
    return (
        <nav className={styles.navbar}>
            <BetterDevelopersLogo onClick={() => router.push('/')} />
            <BurgerMenuButton onClick={() => console.log('Clicked burger menu')} />
        </nav>
    );
};
