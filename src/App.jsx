import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { HeadphonesPage } from "./pages/headphones";
import { AboutUsPage } from "./pages/about-us";
import { Layout } from "./components/layout/component";
import { HomePage } from "./pages/home";
import { Headphone } from "./components/headphone/component";
import { Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "headphones",
        element: <HeadphonesPage />,
        children: [
          {
            path: ":headphoneId",
            element: <Headphone />,
          },
        ],
      },
    ],
  },
  {
    path: "/about-us",
    element: <AboutUsPage />,
  },
  {
    path: "/onlyForAuthorized",
    element: <Navigate to="/" replace />,
  },
]);

export const App = () => <RouterProvider router={router} />;
