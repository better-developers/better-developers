import { Box } from '@chakra-ui/react';
import Script from 'next/script';
import { FC } from 'react';

type VimeoVideoProps = {
    id: string;
};

export const VimeoVideo: FC<VimeoVideoProps> = ({ id }) => (
    <>
        <Box p="56.25% 0 0 0" position="relative" w="100%" h="100%">
            <iframe
                src={`https://player.vimeo.com/video/${id}?h=133e704146&badge=0&autopause=0&player_id=0&app_id=58479&title=0&sidedock=0&portrait=0&byline=0&player_id=0`}
                allow="autoplay; fullscreen; picture-in-picture"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    filter: 'drop-shadow(rgba(0, 0, 0, 0.24) 0px 3px 8px)',
                }}
                title="Better Developers"
            ></iframe>
        </Box>

        <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload"></Script>
    </>
);
