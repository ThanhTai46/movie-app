import React, { Fragment } from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <Fragment>
      <Header></Header>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Main;
