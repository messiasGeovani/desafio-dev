import styled from "styled-components";

import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { File } from "@styled-icons/boxicons-regular/File";
import { ListUl } from "@styled-icons/boxicons-regular/ListUl";
import { User } from "@styled-icons/boxicons-regular/User";
import { Menu } from "@styled-icons/boxicons-regular/Menu";

interface StyleProps {
  isActive?: boolean;
}

const activeAttrs = `  
  &::before {
    content: '';
    width: 3px;
    height: 25px;
    background: #5a56a0;
    position: absolute;
    left: 0;
  }
`;

export const Container = styled.div`
  grid-area: SB;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0 30px;

  box-shadow: 0 2px 5px lightgray;

  background: #fff;
`;

export const Logo = styled(ReactLogo)`
  height: 40px;
  width: 40px;
  color: #5a56a0;
  cursor: pointer;
`;

export const CenterIconsWrapper = styled.div`
  width: 100%;
`;

export const Option = styled.div<StyleProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;

  + div {
    margin-top: 50px;
  }

  ${({ isActive }) => isActive && activeAttrs}
`;

export const FileIcon = styled(File)`
  height: 25px;
  width: 25px;
  color: #5a56a0;
`;

export const ListIcon = styled(ListUl)`
  height: 25px;
  width: 25px;
  color: #5a56a0;
`;

export const ProfileIcon = styled(User)`
  height: 25px;
  width: 25px;
  color: #5a56a0;
`;

export const MenuIcon = styled(Menu)`
  height: 25px;
  width: 25px;
  color: #5a56a0;
  cursor: pointer;
`;
