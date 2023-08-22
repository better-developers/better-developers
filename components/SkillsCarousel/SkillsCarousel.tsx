import { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './SkillsCarousel.module.scss';

import AndroidIcon from '../../public/logos/android logo.svg';
import AngularIcon from '../../public/logos/angular.svg';
import CsharpIcon from '../../public/logos/csharp.svg';
import CssIcon from '../../public/logos/css.svg';
import DotnetIcon from '../../public/logos/dotnet.svg';
import GraphqlIcon from '../../public/logos/graphql.svg';
import HtmlIcon from '../../public/logos/html.svg';
import JavaIcon from '../../public/logos/java.svg';
import JavascriptIcon from '../../public/logos/javascript.svg';
import PythonIcon from '../../public/logos/python.svg';
import ReactIcon from '../../public/logos/react.svg';
import TypescriptIcon from '../../public/logos/typescript.svg';
import { LogoSlide } from './LogoSlide/LogoSlide';

export const SkillsCarousel = () => {
    return (
        <Swiper
            className={styles.swiperContainer}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            spaceBetween={50}
            modules={[Autoplay]}
            slidesPerView={'auto'}
        >
            <SwiperSlide className={styles.slide}>
                <LogoSlide src={ReactIcon} tooltip={'React'} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <LogoSlide src={AngularIcon} tooltip={'Angular'} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <LogoSlide src={DotnetIcon} tooltip={'.NET Core'} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <LogoSlide src={HtmlIcon} tooltip={'HTML'} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <LogoSlide src={CssIcon} tooltip={'CSS'} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <LogoSlide src={TypescriptIcon} tooltip={'Typescript'} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <LogoSlide src={JavascriptIcon} tooltip={'Javascript'} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <LogoSlide src={CsharpIcon} tooltip={'C#'} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <LogoSlide src={JavaIcon} tooltip={'Java'} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <LogoSlide src={PythonIcon} tooltip={'Python'} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <LogoSlide src={GraphqlIcon} tooltip={'GraphQL'} />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <LogoSlide src={AndroidIcon} tooltip={'Android'} />
            </SwiperSlide>
        </Swiper>
    );
};
