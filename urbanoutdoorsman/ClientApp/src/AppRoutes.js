import WriteBlog from "./components/WriteBlog/WriteBlog";
import MainView from "./components/MainView";
import Home from "./routes/Home";
import BlogLandingPage, { BlogsLoader } from "./components/BlogLandingPage";
import FullBlog from "./components/FullBlog";

const AppRoutes = [
  {
    path: "/",
    element: <MainView />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "blogs",
        element: <BlogLandingPage />,
        loader: BlogsLoader,
        children: [
          { path: "/blogs/:id", element: <FullBlog />, loader: BlogsLoader },
        ],
      },
      {
        path: "/write-blog",
        element: <WriteBlog />,
      },
    ],
  },
];

export default AppRoutes;
