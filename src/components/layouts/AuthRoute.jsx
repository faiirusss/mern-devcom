import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import { Loading } from "./Loading";
import { useAtom } from "jotai";
import { createdAt } from "../../jotai/atoms";

const AuthRoute = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [, setDate] = useAtom(createdAt);

  if (loading) return <Loading />;
  const date = new Date(user.metadata.creationTime);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  setDate(formattedDate);

  if (error) return <p>Error...</p>;

  if (!user) return location.replace("/");

  return <div>{children}</div>;
};

export default AuthRoute;
