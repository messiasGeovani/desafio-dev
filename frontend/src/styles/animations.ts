import { keyframes } from "styled-components";

export const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const fadeAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  } to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const moveAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(35%);
  } to {
    opacity: 1;
    transform: translateX(0);
  }
`;
