import { SignForm } from "../../components/SignForm";
import { Container, ContentWrapper, Banner, FormWrapper } from "./styles";

export default function Login() {
  return (
    <Container>
      <ContentWrapper>
        <Banner />

        <FormWrapper>
          <SignForm currentPath="login" />
        </FormWrapper>
      </ContentWrapper>
    </Container>
  );
}
