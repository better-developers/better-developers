import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './SectionContent.module.scss';

export const SectionContent: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
    children,
    className,
    ...props
}) => (
    <section {...props} className={`${className} ${styles.sectionContent}`}>
        {children}
    </section>
);
