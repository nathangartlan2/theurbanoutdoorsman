import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AppRouteBuilder from "./AppRouteBuilder";
import { Layout } from "./components/Layout";
import "./custom.css";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const routes = await AppRouteBuilder();
      setBlogs(routes);
    }

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  return (
    <Layout>
      <Routes>
        {blogs.map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        })}
      </Routes>
    </Layout>
  );
};
export default App;
