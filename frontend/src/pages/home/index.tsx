import { SideBar } from "../../components/SideBar";
import { TopBar } from "../../components/TopBar";
import { Content } from "../../components/Content";

import ContentProvider from "../../context/Content";
import { AuthValidator } from "../../components/AuthValidator";

import { Grid } from "./styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUser } from "../../store/reducers/userReducer";
import { useEffect } from "react";
import { setAuthToken } from "../../services/api";

export default function Home() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(getUser);

  useEffect(() => {
    if (user.token) {
      setAuthToken(user.token);
    }
  }, [user.token]);

  return (
    <>
      <AuthValidator />
      <ContentProvider>
        <Grid>
          <SideBar />
          <TopBar />
          <Content />
        </Grid>
      </ContentProvider>
    </>
  );
}
