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

          <PostPreview
            title={"Yellowstone 2019"}
            text={
              "Car camping in Yellowstone National Park is a gateway to experiencing the unparalleled natural beauty and captivating wilderness of this iconic destination. Nestled amidst the Rocky Mountains, Yellowstone offers car campers a front-row seat to the park's breathtaking geothermal wonders, pristine lakes, lush forests, and abundant wildlife. With well-maintained campgrounds scattered throughout the park, visitors can easily access the park's main attractions, including the renowned Old Faithful geyser, colorful hot springs like Grand Prismatic, and the awe-inspiring Grand Canyon of the Yellowstone. As the sun sets, campers gather around crackling campfires to share stories beneath the starry skies, immersing themselves in the sights and sounds of this untamed wilderness. Car camping in Yellowstone is not just a convenient way to explore the park; it's a chance to connect with nature in one of the most extraordinary settings on Earth, where bison roam freely, and the landscape is a testament to the wonders of the natural world."
            }
            author={"Chat GPT"}
            image={yellowstone}
          />

          <PostPreview
            title={"Glacier 2021"}
            text={
              "Backpacking in Glacier National Park is a true wilderness adventure that transports hikers into a pristine and rugged landscape of unparalleled beauty. As you venture deep into the heart of the park's million-acre expanse, you'll find yourself surrounded by towering, glacier-carved peaks, crystalline alpine lakes, and lush, untouched forests. The park's extensive trail system offers backpackers a chance to explore its diverse ecosystems, from the rich valleys filled with wildflowers to the starkly beautiful high alpine tundra. Along the way, encounters with the park's resident wildlife, including grizzly bears, mountain goats, and elk, add an element of awe and exhilaration to the journey. Glacier National Park is a sanctuary for those seeking solitude and serenity, with backcountry campsites tucked away in pristine locations where the only sounds you'll hear are the rush of mountain streams and the whisper of the wind through the trees. Backpacking here is not just a physical challenge; it's an opportunity to forge a deep connection with nature and to experience one of the last remaining intact ecosystems in the lower 48 states."
            }
            author={"Chat GPT"}
            image={glacier}
          />
        </Stack>
      </Box>
    );
  }
}
