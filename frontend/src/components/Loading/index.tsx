import { LoadingContainer, LoadingAnimation } from "./styles";

interface Props {
  isActive: boolean;
}

export function Loading({ isActive }: Props) {
  return (
    isActive && (
      <LoadingContainer>
        <LoadingAnimation />
      </LoadingContainer>
    )
  );
}
