import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router";

export default function AuthenticatedRoute({ children }) {
  const { isSignedIn } = useUser();
  // if (!isLoaded && !isSignedIn && isSignedIn !== undefined) {
  //   return <Navigate to="/?sign-in=true" />;
  // }
  if (isSignedIn === false) {
    return <Navigate to="/?sign-in=true" />;
  }
  return children;
}
