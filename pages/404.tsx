import { Builder, BuilderComponent } from '@builder.io/react';

export default function NotFoundPage() {
    if (Builder.isPreviewing || Builder.isEditing) {
        return <BuilderComponent model="page" />;
    }

    return <h1>404 - Page Not Found</h1>;
}
