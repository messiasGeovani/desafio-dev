import { SignForm } from "../../components/SignForm";
import { Container, ContentWrapper, Banner, FormWrapper } from "./styles";

export default function SignUp() {
  return (
    <Container>
      <ContentWrapper>
        <Banner />

        <FormWrapper>
          <SignForm currentPath="signup" />
        </FormWrapper>
      </ContentWrapper>
    </Container>
  );
}
