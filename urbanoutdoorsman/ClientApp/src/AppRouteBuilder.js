import { FetchData } from "./components/FetchData";
import WriteBlog from "./components/WriteBlog";
import HomeView from "./components/HomeView";
import FullPost from "./components/FullPost";

const AppRouteBuilder = async () => {
  async function fetchData() {
    try {
      const response = await fetch("blogpost"); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      return jsonData; // Update the state with the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const GetAllRoutes = async () => {
    const blogs = await fetchData();

    const blogRoutes = blogs.map((blog) => {
      const route = `/${blog.id}`;
      console.log(route);
      return {
        path: route,
        element: <FullPost blogPost={blog} />,
      };
    });

    const NavRoutes = [
      {
        index: true,
        element: <HomeView blogs={blogs} />,
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
    const wholeArray = NavRoutes.concat(blogRoutes);
    return wholeArray;
  };

  return await GetAllRoutes();
};

export default AppRouteBuilder;
