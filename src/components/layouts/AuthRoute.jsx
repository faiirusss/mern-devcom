import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import { Loading } from "./Loading";

const AuthRoute = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <Loading />;

  if (error) return <p>Error...</p>;

  if (!user) return location.replace("/");

  return <div>{children}</div>;
};

export default AuthRoute;
