import { SideBar } from "../../components/SideBar";
import { TopBar } from "../../components/TopBar";
import { Content } from "../../components/Content";

import { Grid } from "./styles";
import ContentProvider from "../../context/Content";

export default function Home() {
  return (
    <ContentProvider>
      <Grid>
        <SideBar />
        <TopBar />
        <Content />
      </Grid>
    </ContentProvider>
  );
}
