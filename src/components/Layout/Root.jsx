import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

export default function Root() {
  return (
    <div>
      <main>
        <Header />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
