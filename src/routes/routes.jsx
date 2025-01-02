import { Route, Routes } from "react-router";

import Home from "../containers/Home";
import Movies from "../containers/Movies";
import Series from "../containers/Series";
import Details from "../containers/Details";

import DefaultLayout from "../Layout";

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default Router;
