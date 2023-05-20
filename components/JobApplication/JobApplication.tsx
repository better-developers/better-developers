import { Card, Flex, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { Dropzone } from '../Dropzone/Dropzone';

export const JobApplication: React.FC = () => {
    return (
        <Card px={8} pt={6} pb={8} bgColor="white" color="white" w="80%">
            <Flex direction="column">
                <FormControl>
                    <FormLabel>Fulde navn</FormLabel>
                    <Input type="email" placeholder="John Doe" bgColor="white" />
                </FormControl>

                <FormControl marginTop={4}>
                    <FormLabel>Om dig</FormLabel>
                    <Textarea placeholder="Sæt nogle ord på, hvorfor vi er et godt match" bgColor="white" />
                </FormControl>

                <FormControl marginTop={10}>
                    <Dropzone></Dropzone>
                </FormControl>
            </Flex>
        </Card>
    );
};
