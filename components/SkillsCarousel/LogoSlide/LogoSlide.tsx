import { IconButton, Tooltip } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';

type LogoSlideProps = {
    src: string;
    tooltip: string;
};

export const LogoSlide: FC<LogoSlideProps> = ({ tooltip, src }) => (
    <Tooltip title={tooltip}>
        <IconButton aria-label="" color="secondary">
            <Image src={src} alt="" />
        </IconButton>
    </Tooltip>
);
