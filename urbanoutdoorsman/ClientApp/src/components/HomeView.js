import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import PostPreview from "./PostPreview";
import denaliMountain from "../images/denali_mountain_image_2023.JPG";

const HomeView = () => {
  const [blogs, setBlogs] = useState([]);

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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

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
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default HomeView;
