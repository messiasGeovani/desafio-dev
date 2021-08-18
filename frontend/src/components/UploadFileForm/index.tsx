import { useState } from "react";
import {
  Container,
  Title,
  UploadArea,
  AddIcon,
  FileWrapper,
  FileIcon,
} from "./styles";

export function UploadFileForm() {
  const [file, setFile] = useState({ name: "teste.pdf" });

  const FileInfo = () =>
    file.name && (
      <FileWrapper>
        <FileIcon />
        <p>{file.name}</p>
      </FileWrapper>
    );

  return (
    <Container>
      <Title>Upload de Transações:</Title>
      <div>
        <FileInfo />

        <UploadArea>
          <AddIcon />
          <strong>Arraste e solte</strong>
          <p>
            ou <span>importe manualmente</span>
          </p>
        </UploadArea>
      </div>
    </Container>
  );
}
