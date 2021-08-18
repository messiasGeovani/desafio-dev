import styled from "styled-components";

import { NoteAdd } from "@styled-icons/material/NoteAdd";
import { ContentCopy } from "@styled-icons/material-outlined/ContentCopy";

interface StyleProps {
  isDragActive: boolean;
}

const activeUploadAreaStyle = `
  border-color: #a0afeb;

  > strong, > svg {
    color: #a0afeb;
  }

  > p {
    color: #798ad1;
  }
`;

export const Container = styled.div`
  width: 500px;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 2px 2px 6px #dbdbdb;

  background: #fff;
`;

export const Title = styled.h3`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 30px;
  text-align: center;
`;

export const UploadArea = styled.div`
  width: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 2px dashed lightgray;

  > strong,
  > p {
    margin-top: 10px;
    color: #a5a5a5;
  }

  > p > span {
    color: blue;
    cursor: pointer;
  }

  ${({ isDragActive }) => isDragActive && activeUploadAreaStyle}
`;

export const AddIcon = styled(NoteAdd)`
  height: 50px;
  width: 50px;

  color: lightgray;
`;

export const FileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  > p {
    font-weight: 600;
  }
`;

export const FileIcon = styled(ContentCopy)`
  height: 37px;
  width: 37px;

  margin-right: 15px;

  color: #5a56a0;
`;
