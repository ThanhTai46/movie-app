import { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layouts/main/Main";
import FAQ from "./pages/FAQ";
// import HomePage from "./pages/HomePage";
// import MovieDetails from "./pages/MovieDetails";
// import MoviePage from "./pages/MoviePage";
// import MovieWatch from "./pages/MovieWatch";

const HomePage = lazy(() => import("./pages/HomePage"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
const MovieWatch = lazy(() => import("./pages/MovieWatch"));
function App() {
  return (
    <Fragment>
      <Suspense
        fallback={
          <div className="flex items-center justify-center w-10 h-10 mx-auto border-4 border-t-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
        }
      >
        <Routes>
          <Route element={<Main></Main>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
            <Route path="/faq" element={<FAQ></FAQ>}></Route>
            <Route
              path="/movie/:movieId"
              element={<MovieDetails></MovieDetails>}
            ></Route>
            <Route
              path="/watch/:movieId"
              element={<MovieWatch></MovieWatch>}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
