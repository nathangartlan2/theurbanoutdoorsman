import { FetchData } from "./components/FetchData";
import WriteBlog from "./components/WriteBlog";
import HomeView from "./components/HomeView";

const AppRoutes = [
  {
    index: true,
    element: <HomeView />,
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
