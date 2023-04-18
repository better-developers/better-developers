import { FC, PropsWithChildren } from 'react';
import styles from './PageContent.module.scss';

export const PageContent: FC<PropsWithChildren> = ({ children }) => <main className={styles.pageContainer}>{children}</main>;
