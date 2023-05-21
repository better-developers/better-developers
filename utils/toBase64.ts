/**
 * Convert a file to base64 encoded string
 */
export const toBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve((reader.result as string).replace(/^.+?;base64,/, ''));
        reader.onerror = reject;
    });
