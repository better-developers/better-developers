'use client';

import { Button, Link } from '@chakra-ui/react';

export const ContactButton: React.FC = () => {
    return (
        <Link href="/contact">
            <Button variant="brand">Kontakt os</Button>
        </Link>
    );
};
