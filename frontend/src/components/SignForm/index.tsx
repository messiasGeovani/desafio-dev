import Link from "next/link";
import { useState } from "react";

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
  handleSubmit: (
    email: string,
    password: string,
    name: string
  ) => Promise<void | boolean>;
}

export function SignForm({ currentPath, handleSubmit }: Props): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const currentPageName = currentPath === "login" ? "Login" : "Cadastrar";

  const footerDescription =
    currentPath === "signup" ? "Ja tem uma conta?" : "Ainda não tem uma conta?";

  const footerLinkPath = currentPath === "signup" ? "login" : "signup";

  const linkText = currentPath === "login" ? "Cadastre-se" : "Login";

  const submitData = (event) => {
    event.preventDefault();

    handleSubmit(email, password, name);
  };

  return (
    <>
      <Title>{currentPageName}</Title>

      <InputsWrapper onSubmit={submitData}>
        {currentPath === "signup" && (
          <div>
            <label>Nome</label>
            <TextInput
              value={name}
              onChange={({ target }) => setName(target.value)}
              placeholder="Messias Geovani"
            />
          </div>
        )}

        <div>
          <label>Email</label>
          <TextInput
            required
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="messias@bycoders.com.br"
          />
        </div>

        <div>
          <label>Senha</label>
          <PasswordInput
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            placeholder="Digite uma senha segura"
          />
        </div>

        <div>
          <LoginButton type="submit">{currentPageName}</LoginButton>
        </div>
      </InputsWrapper>

      <Description>
        {footerDescription + " "}
        <Link href={`/${footerLinkPath}`}>{linkText}</Link>
      </Description>
    </>
  );
}
