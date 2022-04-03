import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layouts/main/Main";
import FAQ from "./pages/FAQ";
import HomePage from "./pages/HomePage";
import MovieDetails from "./pages/MovieDetails";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
          <Route path="/faq" element={<FAQ></FAQ>}></Route>
          <Route
            path="/movie/:movieId"
            element={<MovieDetails></MovieDetails>}
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
