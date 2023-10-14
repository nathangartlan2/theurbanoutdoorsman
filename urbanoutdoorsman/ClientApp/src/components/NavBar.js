import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Link from "@mui/material/Link";

import {
  MemoryRouter,
  Route,
  Routes,
  Link as RouterLink,
  matchPath,
  useLocation,
} from "react-router-dom";

const NavBar = () => {
  const params = ["Skiing", "Hiking", "Camping"];

  let location = useLocation();

  React.useEffect(() => {
    // Google Analytics
    console.log(`Location log: ${location}`);
  }, [location]);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            <Link
              to="/"
              component={RouterLink}
              color="inherit"
              underline="none"
            >
              The Urban Outdoorsman
            </Link>
          </Typography>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={params}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search" />}
          />

          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="Blogs"
              {...a11yProps(1)}
              to="/blogs"
              component={RouterLink}
            />
            <Tab
              label="Write a Blog"
              {...a11yProps(2)}
              to="/write-blog"
              component={RouterLink}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
