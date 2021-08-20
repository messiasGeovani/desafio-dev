import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { SignForm } from "../../components/SignForm";
import { login } from "../../services/api";
import { useAppSelector } from "../../store/hooks";
import { getUser, setUser } from "../../store/reducers/userReducer";
import {
  Container,
  ContentWrapper,
  Banner,
  FormWrapper,
} from "../../styles/pages/loginStyles";

export default function Login() {
  const dispatch = useDispatch();
  const { user } = useAppSelector(getUser);
  const routes = useRouter();

  const handleLogin = async (email: string, password: string) => {
    const { status, data } = await login({ email, password });

    if (status !== 200) {
      return alert("Erro ao fazer login!");
    }

    await dispatch(setUser({ ...data.user, token: data.token }));
    return routes.push("/home");
  };

  return (
    <Container>
      <ContentWrapper>
        <Banner />

        <FormWrapper>
          <SignForm currentPath="login" handleSubmit={handleLogin} />
        </FormWrapper>
      </ContentWrapper>
    </Container>
  );
}
