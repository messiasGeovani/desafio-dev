import { useCallback } from "react";
import { useState } from "react";
import { FileError, FileRejection, useDropzone } from "react-dropzone";
import {
  Container,
  Title,
  UploadArea,
  AddIcon,
  FileWrapper,
  FileIcon,
  UploadButton,
} from "./styles";

export interface UplodableFile {
  file: File;
  errors: FileError[];
}

export function UploadFileForm() {
  const [files, setFiles] = useState<UplodableFile[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      const mappedAccepted = acceptedFiles.map((file) => ({
        file,
        errors: [],
      }));
      setFiles((currentFiles) => ({
        ...currentFiles,
        ...mappedAccepted,
        ...rejectedFiles,
      }));
    },
    []
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ".txt",
    multiple: false,
  });

  const FilesInfo = () => {
    const filesArray = Object.values(files);
    if (!filesArray.length) {
      return;
    }

    return (
      <>
        {filesArray?.map((fileWrapper, index) => (
          <FileWrapper key={index}>
            <FileIcon />
            <p>{fileWrapper.file.name}</p>
          </FileWrapper>
        ))}
      </>
    );
  };

  const UploadMessage = () => {
    if (isDragActive) {
      return <p>Solte o arquivo aqui</p>;
    }

    return (
      <p>
        ou <span>importe manualmente</span>
      </p>
    );
  };

  const SubmitButton = () => {
    if (!Object.values(files)?.length) {
      return <span />;
    }

    return <UploadButton>Enviar arquivo</UploadButton>;
  };

  return (
    <Container>
      <Title>Upload de Transações:</Title>
      <div>
        {FilesInfo()}

        <UploadArea {...getRootProps()} isDragActive={isDragActive}>
          <input {...getInputProps()} />
          <AddIcon />
          <strong>Arraste e solte</strong>
          <UploadMessage />
        </UploadArea>
        <SubmitButton />
      </div>
    </Container>
  );
}
