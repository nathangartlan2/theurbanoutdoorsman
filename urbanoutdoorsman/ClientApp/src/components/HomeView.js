import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import PostPreview from "./PostPreview";
import denaliMountain from "../images/denali_mountain_image_2023.JPG";

const HomeView = ({ blogs }) => {
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
