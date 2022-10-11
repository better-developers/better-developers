import styles from './BetterDevelopersLogo.module.scss';
import { FC, useState } from 'react';

type BetterDevelopersLogoProps = {
    onClick: () => void;
};

export const BetterDevelopersLogo: FC<BetterDevelopersLogoProps> = ({ onClick }) => {
    const [onHover, setOnHover] = useState(false);

    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            height="94.1px"
            viewBox="0 0 94.1 94.1"
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
            onClick={onClick}
            className={styles.container}>
            <g>
                <path
                    d="M11.5,60.7V14.8h14.8c5.2,0,9.1,0.9,11.8,2.7c2.6,1.8,3.9,4.6,3.9,8.3c0,1.1-0.1,2.3-0.4,3.4
		c-0.3,1.1-0.7,2.1-1.2,3c-0.6,0.9-1.3,1.7-2.1,2.4s-1.8,1.3-3,1.7c1.1,0.2,2.2,0.6,3.3,1.1c1,0.6,2,1.3,2.7,2.1
		c0.8,0.9,1.4,1.9,1.9,3.1s0.7,2.5,0.7,4c0,4.7-1.6,8.2-4.7,10.6c-3.1,2.4-7.7,3.5-13.6,3.5H11.5z M33,27.3c0-0.9-0.1-1.7-0.4-2.4
		s-0.7-1.3-1.4-1.8c-0.6-0.5-1.4-0.9-2.4-1.1c-1-0.3-2.2-0.4-3.5-0.4h-5.2v12.2h5.2c1.4,0,2.6-0.2,3.6-0.5c1-0.3,1.8-0.8,2.4-1.4
		c0.6-0.6,1.1-1.3,1.3-2.1C32.9,29.1,33,28.2,33,27.3z M26.2,53.7c1.4,0,2.6-0.2,3.6-0.5c1-0.4,1.9-0.8,2.6-1.5
		c0.7-0.6,1.2-1.4,1.6-2.2c0.4-0.8,0.5-1.7,0.5-2.7c0-2-0.7-3.6-2.2-4.7c-1.5-1.1-3.8-1.7-6.8-1.7h-5.4v13.3H26.2z"
                />
                <path
                    d="M84.3,37.2c0,3.6-0.4,6.8-1.3,9.7c-0.9,2.9-2.3,5.4-4.1,7.4c-1.9,2.1-4.2,3.6-7.2,4.7
		c-2.9,1.1-6.4,1.7-10.4,1.7H49.6V14.8h13.6c3.5,0,6.6,0.4,9.2,1.3c2.6,0.9,4.8,2.2,6.6,4.1s3.1,4.1,4,7S84.3,33.3,84.3,37.2z
		 M75,37.7c0-2.5-0.2-4.7-0.6-6.6c-0.4-1.9-1.1-3.6-2-4.9c-0.9-1.3-2.2-2.4-3.8-3.1C67,22.4,65,22,62.6,22h-4.4v31.5H62
		c4.2,0,7.5-1.3,9.7-3.8C73.9,47.2,75,43.2,75,37.7z"
                />
            </g>
            <rect
                x="11.1"
                y="70.5"
                className={styles.underline}
                width={onHover ? '74' : '38.9'}
                height="4.4"
            />

            <rect x="1.5" y="1.5" className={styles.st1} width="91.1" height="91.1" />
        </svg>
    );
};
