import { useRef } from 'react';
import { useIsTop } from './useIsTop';

export type HexColor = `#${string}`;

export const useThemeColor = (color: HexColor) => {
    const isTop = useIsTop();
    const elementRef = useRef(document.querySelector('meta[name="theme-color"]'));

    if (isTop) elementRef.current?.setAttribute('content', color);
    else elementRef.current?.setAttribute('content', '#fff');
};
