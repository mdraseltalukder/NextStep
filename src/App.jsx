// @ts-nocheck
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Layout/Root";

import AuthenticatedRoute from "./components/AuthenticatedRoute";
import { ThemeProvider } from "./components/theme-provider";
import About from "./Pages/About";
import AllJobs from "./Pages/AllJobs";
import Applicants from "./Pages/Applicants";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import JobDetails from "./Pages/JobDetails";
import MyJobs from "./Pages/MyJobs";
import Onboard from "./Pages/Onboard";
import Postjob from "./Pages/Postjob";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/myjobs",
        element: (
          <AuthenticatedRoute>
            <MyJobs />,
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/postjob",
        element: (
          <AuthenticatedRoute>
            <Postjob />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/alljobs",
        element: (
          <AuthenticatedRoute>
            <AllJobs />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/jobdetails/:id",
        element: (
          <AuthenticatedRoute>
            <JobDetails />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/onboard",
        element: (
          <AuthenticatedRoute>
            <Onboard />
          </AuthenticatedRoute>
        ),
      },
      {
        path: "/applicants",
        element: (
          <AuthenticatedRoute>
            <Applicants />
          </AuthenticatedRoute>
        ),
      },
    ],
  },
]);
export default function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}
