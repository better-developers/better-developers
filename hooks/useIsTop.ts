import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';

export const useIsTop = () => {
    const [isTop, setIsTop] = useState<boolean>(true);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (y) => setIsTop(y <= 0));

    return isTop;
};
