import { useState } from "react";
import { useContent } from "../../context/Content";
import {
  Container,
  Logo,
  CenterIconsWrapper,
  Option,
  FileIcon,
  ListIcon,
  ProfileIcon,
  MenuIcon,
} from "./styles";

export function SideBar() {
  const { currentTab, setCurrentTab } = useContent();

  return (
    <Container>
      <Logo />

      <CenterIconsWrapper>
        <Option
          isActive={currentTab === "upload"}
          onClick={() => setCurrentTab("upload")}
        >
          <FileIcon />
        </Option>
        <Option
          isActive={currentTab === "list"}
          onClick={() => setCurrentTab("list")}
        >
          <ListIcon />
        </Option>
        <Option
          isActive={currentTab === "profile"}
          onClick={() => setCurrentTab("profile")}
        >
          <ProfileIcon />
        </Option>
      </CenterIconsWrapper>

      <Option
        isActive={currentTab === "menu"}
        onClick={() => setCurrentTab("menu")}
      >
        <MenuIcon />
      </Option>
    </Container>
  );
}
