import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./custom.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default class App extends Component {
  static displayName = App.name;

  render() {
    const theme = createTheme({
      palette: {
        primary: {
          main: "#442D0F",
        },
        secondary: {
          main: "#ABBD8A",
        },
      },
      typography: {
        fontFamily: "Lato",
      },
      link: {
        hover: "#ABBD8A",
      },
    });

    return (
      <ThemeProvider theme={theme}>
        <RouterProvider router={createBrowserRouter(AppRoutes)} />
      </ThemeProvider>
    );
  }
}
