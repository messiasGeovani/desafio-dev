import Image from "next/image";
import styled from "styled-components";
import bannerImg from "../../assets/banner.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #edf7ff;
`;

export const ContentWrapper = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 40px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
  background: white;
`;

export const Banner = styled(Image).attrs({
  src: bannerImg,
})``;

export const FormWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
