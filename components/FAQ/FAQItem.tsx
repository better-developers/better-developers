import { AccordionButton, AccordionIcon, AccordionItem, AccordionItemProps, AccordionPanel, Text } from '@chakra-ui/react';

interface FAQItemProps {
    heading: string;
    borderTop?: AccordionItemProps['borderTop'];
    borderBottom?: AccordionItemProps['borderBottom'];
    children?: any;
}

const FAQItem: React.FC<FAQItemProps> = (props) => {
    return (
        <AccordionItem {...props}>
            <h2>
                <AccordionButton justifyContent="space-between">
                    <Text fontSize="md" fontWeight="semibold" textAlign="left">
                        {props.heading}
                    </Text>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Text fontSize="sm">{props.children}</Text>
            </AccordionPanel>
        </AccordionItem>
    );
};

export default FAQItem;
