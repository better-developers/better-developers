import { Box, ColorProps } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';
import { Section } from '../Section/Section';
import { SectionItem } from '../SectionItem/SectionItem';

type HeroSectionProps = {
    colors: {
        base: ColorProps['color'];
        primary: ColorProps['color'];
        secondary: ColorProps['color'];
        tertiary: ColorProps['color'];
    };
    backgroundElement?: React.ReactElement;
};

export const HeroSection: FC<PropsWithChildren<HeroSectionProps>> = ({ colors, backgroundElement, children }) => (
    <>
        <Section>
            <SectionItem px={0} colSpan={6} h="100%" zIndex={-1}>
                <Box
                    top={54}
                    bgColor={colors.primary}
                    height="100%"
                    position="absolute"
                    clipPath="polygon(0px 0px, 100% 0px, 100% calc(100% - 250px), 0px 100%)"
                />
            </SectionItem>

            <SectionItem px={0} colStart={3} colSpan={3} h="100%" zIndex={-1}>
                <Box
                    top={-50}
                    bgColor={colors.secondary}
                    height="100%"
                    position="absolute"
                    clipPath="polygon(0px 0px, 100% 0px, 100% calc(100% - 250px), 0px 100%)"
                />
            </SectionItem>

            <SectionItem px={0} colStart={5} colSpan={1} h="100%" zIndex={-1}>
                <Box
                    top={-90}
                    bgColor={colors.tertiary}
                    height="100%"
                    position="absolute"
                    clipPath="polygon(0px 0px, 100% 0px, 100% calc(100% - 250px), 0px 100%)"
                />
            </SectionItem>

            <SectionItem paddingTop={[0, 0, 48]} px={0} colSpan={6} h="100%" zIndex={-1}>
                <Box
                    top={0}
                    bgColor={colors.base}
                    height="100%"
                    position="absolute"
                    clipPath="polygon(0px 0px, 100% 0px, 100% calc(100% - 250px), 0px 100%)"
                />
            </SectionItem>

            {backgroundElement && (
                <SectionItem px={0} colSpan={6} h="100%" zIndex={-1}>
                    <Box
                        top={0}
                        bgColor={colors.base}
                        height="100%"
                        position="absolute"
                        clipPath="polygon(0px 0px, 100% 0px, 100% calc(100% - 250px), 0px 100%)">
                        {backgroundElement}
                    </Box>
                </SectionItem>
            )}

            {children}
        </Section>
    </>
);
