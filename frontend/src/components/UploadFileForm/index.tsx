import { useRouter } from "next/dist/client/router";
import { useCallback } from "react";
import { useState } from "react";
import { FileError, FileRejection, useDropzone } from "react-dropzone";
import { sendTransactionsFile } from "../../services/api";
import { Loading } from "../Loading";
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
  const [loading, setLoading] = useState<boolean>(false);

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

  const handleUploadFile = async (event) => {
    const filesArray = Object.values(files);

    event.preventDefault();
    setLoading(true);

    if (!filesArray.length) {
      return setLoading(false);
    }

    const { status, data } = await sendTransactionsFile(
      filesArray[filesArray.length - 1].file
    );

    if (status !== 200) {
      alert("Erro ao fazer upload");
    }

    setLoading(false);
    alert("Upload Realizado");
    setFiles([]);
  };

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
    const filesArray = Object.values(files);
    if (!filesArray.length) {
      return <span />;
    }

    return <UploadButton type="submit">Fazer Upload</UploadButton>;
  };

  return (
    <Container>
      <Loading isActive={loading} />
      <Title>Upload de Transações:</Title>
      <form onSubmit={handleUploadFile}>
        {FilesInfo()}
        <UploadArea {...getRootProps()} isDragActive={isDragActive}>
          <input {...getInputProps()} />
          <AddIcon />
          <strong>Arraste e solte</strong>
          <UploadMessage />
        </UploadArea>
        <SubmitButton />
      </form>
    </Container>
  );
}
