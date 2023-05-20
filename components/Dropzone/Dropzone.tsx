import { Box, Flex, Input, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import styles from './Dropzone.module.scss';

export interface DropzoneProps {
    onFilesChanged?: (files: File[]) => void;
}

export const Dropzone: React.FC<DropzoneProps> = ({ onFilesChanged }) => {
    const fileRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File[]>([]);

    const onDrop = (ev: React.DragEvent<HTMLDivElement>) => setFiles([...(ev.dataTransfer?.files || [])]);
    const onBrowse = (ev: React.ChangeEvent<HTMLInputElement>) => setFiles([...(ev.target.files || [])]);
    useEffect(() => onFilesChanged?.(files), [files, onFilesChanged]);

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: [NativeTypes.FILE],
        drop: onDrop,
        collect: (monitor) => ({ isOver: monitor.isOver(), canDrop: monitor.canDrop() }),
    }));

    const text = useMemo(() => {
        if (isOver) return '👇 Yes, right here 👇';
        if (canDrop) return '👉 Drop it here 👈';
        return 'Drag & drop files or Browse';
    }, [canDrop, isOver]);

    const animationState = canDrop ? 'running' : 'paused';
    const borderBg = `
        linear-gradient(90deg, rgba(56, 78, 183, 30%) 50%, transparent 50%), 
        linear-gradient(90deg, rgba(56, 78, 183, 30%) 50%, transparent 50%), 
        linear-gradient(0deg, rgba(56, 78, 183, 30%) 50%, transparent 50%), 
        linear-gradient(0deg, rgba(56, 78, 183, 30%) 50%, transparent 50%), 
        #f8f8ff`;

    return (
        <Box
            h={200}
            w="100%"
            borderRadius={6}
            background={borderBg}
            backgroundRepeat="repeat-x, repeat-x, repeat-y, repeat-y"
            backgroundSize="8px 2px, 8px 2px, 2px 8px, 2px 8px"
            animation="7s infinite linear"
            style={{ animationName: styles.borderDance, animationPlayState: animationState }}>
            <Flex
                h="100%"
                w="100%"
                alignItems="center"
                justifyContent="center"
                direction="column"
                gap={4}
                cursor="pointer"
                onClick={() => fileRef.current?.click()}
                ref={drop}>
                <Image src="upload-icon.svg" alt="Upload" width={96} height={96}></Image>
                <Text>{text}</Text>

                <Input type="file" multiple display="none" ref={fileRef} onChangeCapture={onBrowse} />
            </Flex>
        </Box>
    );
};
