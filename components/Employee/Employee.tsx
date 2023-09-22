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
            <Box borderRadius={12} overflow="hidden">
                <Image src={image} alt={name} />
            </Box>

            <Box color="white" textAlign="center" marginTop={2}>
                {/* {title && (
                    <Text variant="brandHighlight" display="inline" marginRight={1}>
                        {title}
                    </Text>
                )} */}

                <Text color="white" display="inline" fontWeight="bold">
                    {name}
                </Text>
            </Box>
        </>
    );
};
