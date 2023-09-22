import { FetchData } from "./components/FetchData";
import WriteBlog from "./components/WriteBlog";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/fetch-data",
    element: <FetchData />,
  },
  {
    path: "/write-blog",
    element: <WriteBlog />,
  },
];

export default AppRoutes;
