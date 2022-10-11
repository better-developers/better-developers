import { BetterDevelopersLogo } from '../BetterDevelopersLogo/BetterDevelopersLogo';
import styles from './NavBar.module.scss';
import { BurgerMenuButton } from '../BurgerMenuButton/BurgerMenuButton';

export const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <BetterDevelopersLogo onClick={() => console.log('Clicked logo')} />
            <BurgerMenuButton onClick={() => console.log('Clicked burger menu')} />
        </nav>
    );
};
