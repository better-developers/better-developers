import { Flex, Input, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';

export const Dropzone: React.FC = () => {
    const fileRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File[]>();

    const onDrop = (ev: React.DragEvent<HTMLDivElement>) => setFiles([...(ev.dataTransfer?.files || [])]);
    const onBrowse = (ev: React.ChangeEvent<HTMLInputElement>) => setFiles([...(ev.target.files || [])]);

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: [NativeTypes.FILE],
        drop: onDrop,
        collect: (monitor) => ({ isOver: monitor.isOver(), canDrop: monitor.canDrop() }),
    }));

    const text = useMemo(() => {
        if (isOver) return 'Yes, right here';
        if (canDrop) return 'Drop it here';
        return 'Drag & drop files or Browse';
    }, [canDrop, isOver]);

    useEffect(() => {
        console.log(files);
    }, [files]);

    return (
        <Flex
            borderRadius={6}
            bgColor="white"
            h={200}
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
    );
};
