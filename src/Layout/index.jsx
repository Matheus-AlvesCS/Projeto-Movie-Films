import { Outlet } from "react-router";

import Header from "../components/Header";

function DefaultLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default DefaultLayout;
