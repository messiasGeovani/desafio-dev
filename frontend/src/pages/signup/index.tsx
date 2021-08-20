import { useRouter } from "next/router";
import { SignForm } from "../../components/SignForm";
import { login, signUp } from "../../services/api";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUser, setUser } from "../../store/reducers/userReducer";
import { Container, ContentWrapper, Banner, FormWrapper } from "./styles";

export default function SignUp() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(getUser);
  const routes = useRouter();

  const handleSignUp = async (
    email: string,
    password: string,
    name: string
  ) => {
    const { status, data } = await signUp({ name, email, password });

    if (status !== 200) {
      return alert("Erro ao cadastrar!");
    }

    const auth = await login({ email, password });

    if (auth.status !== 200) {
      return alert("Erro ao autenticar, tente fazer login");
    }

    await dispatch(setUser({ ...auth.data.user, token: auth.data.token }));
    return routes.push("/home");
  };

  return (
    <Container>
      <ContentWrapper>
        <Banner />

        <FormWrapper>
          <SignForm currentPath="signup" handleSubmit={handleSignUp} />
        </FormWrapper>
      </ContentWrapper>
    </Container>
  );
}
