import Head from 'next/head';
import { useIsTop } from '../../hooks/useIsTop';
import { HexColor } from '../../types/hex-color';

type DynamicThemeColorProps = {
    color: HexColor;
};

export const DynamicThemeColor: React.FC<DynamicThemeColorProps> = ({ color }) => {
    const isTop = useIsTop();
    const themeColor = isTop ? color : '#FFF';

    return (
        <Head>
            <meta name="theme-color" content={themeColor}></meta>
        </Head>
    );
};
