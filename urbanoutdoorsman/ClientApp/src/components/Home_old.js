import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import PostPreview from "./PostPreview";
import denaliMountain from "../images/denali_mountain_image_2023.JPG";
import yellowstone from "../images/yellowstone_2019.jpeg";
import glacier from "../images/glacier_2021.jpeg";
import { yellow } from "@mui/material/colors";

export class Home extends React.Component {
  static displayName = Home.name;

  render() {
    return (
      // <h1>Hello world</h1>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <PostPreview
            title={"Denali 2023"}
            text={
              "Embarking on a backpacking adventure in the untamed wilderness of Alaska is an experience that defies description. As you lace up your hiking boots and hoist your trusty backpack onto your shoulders, you become one with the rugged, pristine landscapes that stretch endlessly before you. Alaska, with its vast and untouched beauty, offers a backpacker a unique blend of challenges and rewards. Towering mountains, sprawling glaciers, dense forests, and pristine rivers create a breathtaking backdrop for every step of the journey. The sheer expanse of this wilderness can be humbling, as you find yourself surrounded by towering peaks that seem to touch the heavens and immense glaciers that glisten in the sunlight. Each day presents a new adventure, whether it's encountering a majestic moose grazing along the trail, witnessing the mesmerizing dance of the Northern Lights, or camping beneath the midnight sun."
            }
            author={"Chat GPT"}
            image={denaliMountain}
          />
        </Stack>
      </Box>
    );
  }
}
