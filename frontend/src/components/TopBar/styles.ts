import Image from "next/image";
import styled from "styled-components";
import profileImg from "../../assets/profile-img.jpeg";

export const ContentWrapper = styled.div`
  grid-area: TB;

  display: flex;
  justify-content: flex-end;

  box-shadow: 2px 3px 6px lightgray;

  z-index: 2;

  background: #fff;
`;

export const ProfileInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
`;

export const ProfileImage = styled(Image).attrs({
  src: profileImg,
  height: 40,
  width: 40,
})`
  border-radius: 50px;
`;

export const ProfileName = styled.p`
  opacity: 0.6;
  font-size: 15px;
  margin-left: 20px;
`;
