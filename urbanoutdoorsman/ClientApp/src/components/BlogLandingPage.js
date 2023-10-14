import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import PostPreview from "./PostPreview";
import denaliMountain from "../images/denali_mountain_image_2023.JPG";
import FullBlog from "./FullBlog";
import { Outlet, Link, useLoaderData } from "react-router-dom";

export async function BlogsLoader() {
  const response = await fetch("blogpost"); // Replace with your API endpoint
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const jsonData = await response.json();

  return jsonData;
}

const BlogLandingPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogDictionary, setBlogDictionary] = useState({});
  const [previewing, setPreviewing] = useState(true);
  const [fullBlog, setFullBlog] = useState({});

  const jsonData = useLoaderData();

  useEffect(() => {
    setBlogs(jsonData);
  }, [jsonData]);

  if (previewing) {
    return (
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          {blogs.map((blog) => {
            return (
              <PostPreview
                key={blog.id}
                title={blog.title}
                text={blog.text}
                image={denaliMountain}
                author="Chat GPT"
                location={blog.location}
                id={blog.id}
                onClick={() => {
                  setFullBlog(blog);
                  setPreviewing(false);
                }}
              />
            );
          })}
        </Stack>
      </Box>
    );
  } else {
    return <Outlet context={[fullBlog, setFullBlog]} />;
  }
};

export default BlogLandingPage;
