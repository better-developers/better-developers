import { StaticImageData } from 'next/image';

export type Case = {
    image: StaticImageData;
    title: string;
    content: JSX.Element;
};
