import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import PostPreview from "./PostPreview";
import denaliMountain from "../images/denali_mountain_image_2023.JPG";
import FullBlog from "./FullBlog";

const HomeView = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogDictionary, setBlogDictionary] = useState({});
  const [previewing, setPreviewing] = useState(true);
  const [fullBlog, setFullBlog] = useState({});

  useEffect(() => {
    // Define an asynchronous function to fetch the data
    async function fetchData() {
      try {
        const response = await fetch("blogpost"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setBlogs(jsonData); // Update the state with the fetched data

        jsonData.map((blog) => {
          const blogId = blog.id;
          let updatedValue = { blogId: blog };
          setBlogDictionary((prevDictionary) => ({
            ...prevDictionary,
            [blogId]: blog,
          }));
          return blog;
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  const selectBlog = (id) => {
    setFullBlog(blogDictionary[id]);
    setPreviewing(false);
  };

  if (previewing) {
    return (
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          {blogs.map((blog) => {
            return (
              <PostPreview
                title={blog.title}
                text={blog.text}
                image={denaliMountain}
                author="Chat GPT"
                location={blog.location}
                id={blog.id}
                onClick={selectBlog}
              />
            );
          })}
        </Stack>
      </Box>
    );
  } else {
    return <FullBlog blog={fullBlog} />;
  }
};

export default HomeView;
