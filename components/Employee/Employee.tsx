import { Box, Text } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';

type EmployeeProps = {
    name: string;
    title?: string;
    image: StaticImageData;
};

export const Employee: React.FC<EmployeeProps> = ({ name, title, image }) => {
    return (
        <>
            <Image src={image} alt={name} />

            <Box color="white" textAlign="center" marginTop={2}>
                {title && (
                    <Text variant="brandHighlight" display="inline" marginRight={1}>
                        {title}
                    </Text>
                )}

                <Text color="white" display="inline">
                    {name}
                </Text>
            </Box>
        </>
    );
};
