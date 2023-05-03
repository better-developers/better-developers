import { Card, CardHeader, Grid, Heading, Stack } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import { FC, PropsWithChildren } from 'react';

type CaseCardProps = {
    image: StaticImageData;
    title: string;
};

export const CaseCard: FC<PropsWithChildren<CaseCardProps>> = ({ image, title, children }) => (
    <Card variant="caseCard" h="100%">
        <Grid gridTemplateRows="0.25fr 0.75fr" gap={4}>
            <Image src={image} alt={title} />
            <Stack gap={2} px={4}>
                <Heading fontSize="xl">{title}</Heading> {children}
            </Stack>
        </Grid>
    </Card>
);
