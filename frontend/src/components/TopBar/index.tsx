import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUser } from "../../store/reducers/userReducer";
import {
  ContentWrapper,
  ProfileInfoWrapper,
  ProfileImage,
  ProfileName,
} from "./styles";

export function TopBar() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(getUser);

  return (
    <ContentWrapper>
      <ProfileInfoWrapper>
        <ProfileImage />
        <ProfileName>{user.name}</ProfileName>
      </ProfileInfoWrapper>
    </ContentWrapper>
  );
}
