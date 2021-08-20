import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-template-rows: 60px auto;
  // SB = side bar
  // TP = top bar
  // C = content
  grid-template-areas:
    "SB TB"
    "SB C";
  height: 100vh;
`;
