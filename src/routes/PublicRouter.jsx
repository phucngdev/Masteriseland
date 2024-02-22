import React from "react";
import Header from "../layout/user/Header";
import { Outlet } from "react-router-dom";

const PublicRouter = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
};

export default PublicRouter;
