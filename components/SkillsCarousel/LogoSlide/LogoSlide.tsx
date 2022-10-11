import { IconButton, Tooltip } from '@mui/material';
import Image from 'next/image';
import AngularIcon from '../../../public/logos/angular.svg';
import { FC } from 'react';
import styles from './LogoSlide.module.scss';
import { SwiperSlide } from 'swiper/react';

type LogoSlideProps = {
    src: string;
    tooltip: string;
};

export const LogoSlide: FC<LogoSlideProps> = ({ tooltip, src }) => (
    <Tooltip title={tooltip}>
        <IconButton color="secondary">
            <Image src={src} />
        </IconButton>
    </Tooltip>
);
