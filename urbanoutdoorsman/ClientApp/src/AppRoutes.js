import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./components/Counter";
import WriteBlog from "./components/WriteBlog";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/write-blog',
    element: <WriteBlog />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
