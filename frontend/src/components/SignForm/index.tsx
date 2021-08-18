import Link from "next/link";

import {
  Title,
  InputsWrapper,
  PasswordInput,
  LoginButton,
  Description,
  TextInput,
} from "./styles";

interface Props {
  currentPath: "login" | "signup";
}

export function SignForm({ currentPath }: Props): JSX.Element {
  const currentPageName = currentPath === "login" ? "Login" : "Cadastrar";

  const footerDescription =
    currentPath === "signup" ? "Ja tem uma conta?" : "Ainda não tem uma conta?";

  const footerLinkPath = currentPath === "signup" ? "login" : "signup";

  const linkText = currentPath === "login" ? "Cadastre-se" : "Login";

  const OptionalNameInput = () =>
    currentPath === "signup" && (
      <div>
        <label>Nome</label>
        <TextInput placeholder="Messias Geovani" />
      </div>
    );

  return (
    <>
      <Title>{currentPageName}</Title>

      <InputsWrapper>
        <OptionalNameInput />

        <div>
          <label>Email</label>
          <TextInput placeholder="messias@bycoders.com.br" />
        </div>

        <div>
          <label>Senha</label>
          <PasswordInput placeholder="Digite uma senha segura" />
        </div>

        <div>
          <LoginButton>{currentPageName}</LoginButton>
        </div>
      </InputsWrapper>

      <Description>
        {footerDescription + " "}
        <Link href={`/${footerLinkPath}`}>{linkText}</Link>
      </Description>
    </>
  );
}
