import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUser } from "../../store/reducers/userReducer";

export function AuthValidator() {
  const dicpatch = useAppDispatch();
  const { user } = useAppSelector(getUser);
  const router = useRouter();

  useEffect(() => {
    const { id, email, token } = user;

    if (!id || !email || !token) {
      router.push("/login");
      return;
    }

    router.push("/home");
  }, []);

  return <span />;
}
