import styles from './LineDivider.module.scss';
import React, { FC } from 'react';

interface LineDividerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const LineDivider: FC<LineDividerProps> = (props) => (
    <div {...props} className={styles.divider}></div>
);
