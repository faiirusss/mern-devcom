import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import { Loading } from "./Loading";
import { useAtom } from "jotai";
import { createdAt } from "../../jotai/atoms";
import { useEffect } from "react";

const AuthRoute = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [, setDate] = useAtom(createdAt);

  useEffect(() => {
    if (user) {
      const date = new Date(user?.metadata?.creationTime);
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = date.toLocaleDateString("en-US", options);
      setDate(formattedDate);
    }
  }, [user, setDate]);

  if (loading) return <Loading />;

  if (error) return <p>Error...</p>;

  if (!user) return location.replace("/");

  return <div>{children}</div>;
};

export default AuthRoute;
