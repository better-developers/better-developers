import React, { FC } from 'react';
import styles from './LineDivider.module.scss';

interface LineDividerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const LineDivider: FC<LineDividerProps> = (props) => <div {...props} className={styles.divider}></div>;
