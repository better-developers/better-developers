import { Card, CardBody, CardHeader, Flex, Heading, Icon } from '@chakra-ui/react';
import { FC } from 'react';
import { IconType } from 'react-icons/lib';

export type Sector = {
    icon: IconType;
    sectorName: string;
    content: JSX.Element;
};

type SectorCardProps = {
    active: boolean;
    side: 'top' | 'left' | 'right' | 'bottom';
    alignment: 'left' | 'middle' | 'right';
    sector: Sector;
    onClick: () => void;
};

export const SectorCard: FC<SectorCardProps> = ({ active, alignment, side, sector, onClick }) => {
    const activeVariant = getVariant(side, alignment);

    return (
        <Card variant={active ? activeVariant : 'sectorCard'} onClick={onClick}>
            <CardHeader>
                <Flex alignItems="center" gap={4}>
                    <Icon as={sector.icon} fontSize="3xl" color={'primaryFontColor'} />

                    <Heading fontSize="xl">{sector.sectorName}</Heading>
                </Flex>
            </CardHeader>
            <CardBody>{sector.content}</CardBody>
        </Card>
    );
};

const getVariant = (side: 'top' | 'left' | 'right' | 'bottom', alignment: 'left' | 'middle' | 'right') => {
    if (side === 'right' && alignment === 'middle') return 'sectorCardRightActive';
    if (side === 'left' && alignment === 'middle') return 'sectorCardLeftActive';
    if (side === 'top' && alignment === 'middle') return 'sectorCardTopMiddleActive';
    if (side === 'top' && alignment === 'right') return 'sectorCardTopRightActive';
    if (side === 'top' && alignment === 'left') return 'sectorCardTopLeftActive';
    return 'sectorCard';
};
