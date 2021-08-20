import { useContent } from "../../context/Content";
import { TransactionList } from "../TransactionList";
import { UploadFileForm } from "../UploadFileForm";
import { Container } from "./styles";

export function Content() {
  const { currentTab } = useContent();
  const CurrentTabContent = () => {
    if (currentTab === "upload") {
      return <UploadFileForm />;
    }

    if (currentTab === "list") {
      return <TransactionList />;
    }

    return <div>Em breve...</div>;
  };
  return (
    <Container>
      <CurrentTabContent />
    </Container>
  );
}
