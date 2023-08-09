import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./modules/home";
import { FeedPage } from "./modules/home/feed";
import { AboutPage } from "./modules/home/about";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <FeedPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);
