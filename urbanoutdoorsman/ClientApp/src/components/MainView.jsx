import React from "react";
import NavBar from "./NavBar";
import BlogLandingPage from "./BlogLandingPage";
import { Outlet } from "react-router-dom";

const MainView = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default MainView;
