import { useBreakpoint } from '@chakra-ui/react';

export const useIsMobile = () => {
    const breakpoint = useBreakpoint();
    const isMobile = breakpoint === 'sm' || breakpoint === 'md';

    return isMobile;
};
