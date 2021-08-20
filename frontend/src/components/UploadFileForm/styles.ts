import styled from "styled-components";

import { NoteAdd } from "@styled-icons/material/NoteAdd";
import { ContentCopy } from "@styled-icons/material-outlined/ContentCopy";
import { fadeAnimation, moveAnimation } from "../../styles/animations";

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

  animation: ${fadeAnimation} linear 0.2s, ${moveAnimation} 0.2s backwards;
`;

export const Title = styled.h3`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 30px;
  text-align: center;
`;

export const UploadArea = styled.div<StyleProps>`
  width: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 2px dashed lightgray;
  cursor: pointer;

  > strong,
  > p {
    margin-top: 10px;
    color: #a5a5a5;
  }

  > p > span {
    color: blue;
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
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
  }
`;

export const FileIcon = styled(ContentCopy)`
  height: 37px;
  width: 37px;

  margin-right: 15px;

  color: #5a56a0;
`;

export const UploadButton = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  margin-top: 20px;
  color: white;
  background: #798ad1;
  cursor: pointer;

  &:hover {
    background: #5666a5;
  }
`;
