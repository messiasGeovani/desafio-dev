import styled from "styled-components";
import { fadeAnimation, spinAnimation } from "../../styles/animations";

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;

  z-index: 9;

  background: rgba(0, 0, 0, 0.7);
  animation: ${fadeAnimation} 0.15s;
`;

export const LoadingAnimation = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #5666a5;
  width: 120px;
  height: 120px;
  -webkit-animation: ${spinAnimation} 2s linear infinite; /* Safari */
  animation: ${spinAnimation} 2s linear infinite;
`;
