import { Card } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FC } from 'react';

export type TechCardProps = {
    layoutId: string;
    onClose: () => void;
};

export const TechCard: FC<TechCardProps> = ({ layoutId, onClose }) => {
    return (
        <motion.div layoutId={layoutId} onClick={onClose} style={{ height: '100%' }}>
            <Card height="100%" boxShadow="2xl">
                Hejaeasj
            </Card>
        </motion.div>
    );
};
