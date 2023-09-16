import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import StyledButton from "./StyledButton";
import customStyles from "../css/WriteBlog.module.css";

const WriteBlog = () => {
  const [previewing, setPreviewing] = useState(false);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");

  const requestLocatonOptions = () => {
    return [
      "Acadia National Park",
      "American Samoa National Park",
      "Arches National Park",
      "Badlands National Park",
      "Big Bend National Park",
      "Biscayne National Park",
      "Black Canyon of the Gunnison National Park",
      "Bryce Canyon National Park",
      "Canyonlands National Park",
      "Capitol Reef National Park",
      "Carlsbad Caverns National Park",
      "Channel Islands National Park",
      "Congaree National Park",
      "Crater Lake National Park",
      "Cuyahoga Valley National Park",
      "Death Valley National Park",
      "Denali National Park and Preserve",
      "Dry Tortugas National Park",
      "Everglades National Park",
      "Gates of the Arctic National Park and Preserve",
      "Gateway Arch National Park",
      "Glacier National Park",
      "Glacier Bay National Park and Preserve",
      "Grand Canyon National Park",
      "Grand Teton National Park",
      "Great Basin National Park",
      "Great Sand Dunes National Park and Preserve",
      "Great Smoky Mountains National Park",
      "Guadalupe Mountains National Park",
      "Haleakalā National Park",
      "Hawaii Volcanoes National Park",
      "Hot Springs National Park",
      "Indiana Dunes National Park",
      "Isle Royale National Park",
      "Joshua Tree National Park",
      "Katmai National Park and Preserve",
      "Kenai Fjords National Park",
      "Kings Canyon National Park",
      "Kobuk Valley National Park",
      "Lake Clark National Park and Preserve",
      "Lassen Volcanic National Park",
      "Mammoth Cave National Park",
      "Mesa Verde National Park",
      "Mount Rainier National Park",
      "North Cascades National Park",
      "Olympic National Park",
      "Petrified Forest National Park",
      "Pinnacles National Park",
      "Redwood National and State Parks",
      "Rocky Mountain National Park",
      "Saguaro National Park",
      "Sequoia and Kings Canyon National Parks",
      "Shenandoah National Park",
      "Theodore Roosevelt National Park",
      "Virgin Islands National Park",
      "Voyageurs National Park",
      "Wind Cave National Park",
      "Wrangell-St. Elias National Park and Preserve",
      "Yellowstone National Park",
      "Yosemite National Park",
      "Zion National Park",
    ];
  };

  const locationPicker = (
    <Autocomplete
      disablePortal
      id="location-picker"
      options={requestLocatonOptions()}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Location" />}
    />
  );

  const inputView = (
    <form className={customStyles.Form}>
      {locationPicker}
      <StyledButton
        text="Request a new Location"
        onClick={() => alert("Adding a new location")}
      />
      <TextField
        value={blogTitle}
        onChange={(e) => setBlogTitle(e.target.value)}
        id="standard-basic"
        label="Title"
        variant="standard"
      />

      <textArea
        value={blogContent}
        onChange={(e) => setBlogContent(e.target.value)}
        className={customStyles.BlogInput}
        type="text"
      ></textArea>
    </form>
  );

  const previewView = (
    <div>
      <h1>{blogTitle}</h1>
      <p>{blogContent}</p>
    </div>
  );

  const sumbitPost = () => {
    alert("Your post was submitted");
  };

  const submitButton = <StyledButton text="Submit Post" onClick={sumbitPost} />;

  return (
    <div>
      {previewing ? previewView : inputView}
      <StyledButton
        text={previewing ? "Edit" : "Preview Your Post"}
        onClick={() => setPreviewing(!previewing)}
      />
      {previewing ? submitButton : <></>}
    </div>
  );
};

export default WriteBlog;
