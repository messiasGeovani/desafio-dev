import {
  ContentWrapper,
  ProfileInfoWrapper,
  ProfileImage,
  ProfileName,
} from "./styles";

export function TopBar() {
  return (
    <ContentWrapper>
      <ProfileInfoWrapper>
        <ProfileImage />
        <ProfileName>Messias Geovani</ProfileName>
      </ProfileInfoWrapper>
    </ContentWrapper>
  );
}
