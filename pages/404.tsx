import { Builder, BuilderComponent } from '@builder.io/react';
import { Code, Flex, Text } from '@chakra-ui/react';

export default function NotFoundPage() {
    if (Builder.isPreviewing || Builder.isEditing) {
        return <BuilderComponent model="page" />;
    }

    return (
        <Flex height="100vh" width="100vw" alignItems="center" justifyContent="center">
            <Code fontSize="4xl" marginRight="8">
                404
            </Code>
            <Text fontSize="2xl">Page Not Found</Text>
        </Flex>
    );
}
