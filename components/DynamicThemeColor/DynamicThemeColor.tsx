import { useToken } from '@chakra-ui/react';
import Head from 'next/head';
import { useIsTop } from '../../hooks/useIsTop';
import { HexColor } from '../../types/hex-color';
import { ThemeColor } from '../../types/theme-color';

type DynamicThemeColorProps = {
    color: HexColor | ThemeColor;
};

export const DynamicThemeColor: React.FC<DynamicThemeColorProps> = ({ color }) => {
    const [themeColor] = useToken('colors', color);
    const isTop = useIsTop();

    const isHexColor = color.startsWith('#');

    // if provided color is a hex color, use it - otherwise get computed theme color
    const computedColor = isHexColor ? color : themeColor;

    const resultColor = isTop ? computedColor : '#FFF';

    return (
        <Head>
            <meta name="theme-color" content={resultColor}></meta>
        </Head>
    );
};
