import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost, { action as newPostAction } from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import Posts, { loader as postLoader } from "./routes/Posts.jsx";
import PostDetails, {
  loader as postDetailsLoader,
} from "./components/PostDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postLoader,
        children: [
          { path: "create-post", element: <NewPost />, action: newPostAction },
          { path: ":id", element: <PostDetails />, loader: postDetailsLoader },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
