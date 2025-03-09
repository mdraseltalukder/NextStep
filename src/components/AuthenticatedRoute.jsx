import { useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router";

export default function AuthenticatedRoute({ children }) {
  const { user, isLoaded } = useUser();
  const { pathname } = useLocation().pathname;
  const { isSignedIn } = useUser();
  // if (!isLoaded && !isSignedIn && isSignedIn !== undefined) {
  //   return <Navigate to="/?sign-in=true" />;
  // }
  if (isSignedIn === false) {
    return <Navigate to="/?sign-in=true" />;
  }

  // if role na pawa jai tahole onboard e jabe
  if (!user && !user?.unsafeMetadata?.role && pathname !== "/onboard") {
    return <Navigate to="/onboard" />;
  }

  return children;
}
