import styled from "styled-components";

export const TextInput = styled.input`
  height: 40px;
  width: 100%;
  font-size: 15px;
  border: 1px solid #dde4ff;
  border-radius: 4px;
  margin-top: 5px;
  padding-left: 10px;

  &::placeholder {
    opacity: 0.5;
  }

  &:focus {
    outline-color: #a0afeb;
  }
`;

export const Title = styled.h2`
  align-self: flex-start;
  margin-bottom: 35px;
  font-size: 35px;
  color: #5a56a0;
`;

export const InputsWrapper = styled.div`
  width: 100%;
  > div + div {
    margin-top: 17px;
  }
`;

export const PasswordInput = styled(TextInput).attrs({
  type: "password",
})``;

export const LoginButton = styled.button`
  height: 40px;
  width: 100%;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  color: white;
  background: #798ad1;
  cursor: pointer;

  &:hover {
    background: #5666a5;
  }
`;

export const Description = styled.p`
  margin-top: 75px;
`;
