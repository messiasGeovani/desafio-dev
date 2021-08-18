import { Dispatch, SetStateAction, useState } from "react";
import { createContext, useContext } from "react";

type TContextValues = {
  currentTab: string;
  setCurrentTab: (value: "upload" | "list" | "profile" | "menu") => void;
};

interface Props {
  children: JSX.Element | Node | any;
}

const ContentContext = createContext<TContextValues>(null);

function ContentProvider({ children }: Props) {
  const [currentTab, setCurrentTab] = useState<
    "upload" | "list" | "profile" | "menu"
  >("upload");

  return (
    <ContentContext.Provider value={{ currentTab, setCurrentTab }}>
      {children}
    </ContentContext.Provider>
  );
}

function useContent() {
  const context = useContext(ContentContext);
  if (!context)
    throw new Error("useContent must be used within a ContentProvider");

  return context;
}

export default ContentProvider;
export { useContent };
