import { AccordionButton, AccordionIcon, AccordionItem, AccordionItemProps, AccordionPanel, Box } from '@chakra-ui/react';

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
                <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                        {props.heading}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{props.children}</AccordionPanel>
        </AccordionItem>
    );
};

export default FAQItem;
