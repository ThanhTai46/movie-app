import React, { Fragment } from "react";
import MovieList from "../components/Movies/MovieList";
import Banner from "../components/banner/Banner";
import Intro from "../components/introVideo/Intro";
const HomePage = () => {
  return (
    <Fragment>
      {/* ------------ Intro ---------------- */}
      <Intro></Intro>

      {/* ------------ End Banner ---------------- */}
      {/* ------------ Now Playing ---------------- */}
      <section className="mt-10 movies-layout page-container xl:ml-4 ">
        <h2 className="mt-5 mb-10 text-2xl font-semibold capitalize ">
          Popular
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
      {/* ------------ Now Playing ---------------- */}
      <section className="mt-10 movies-layout page-container md:ml-2 xl:ml-4 ">
        <h2 className="mt-5 mb-10 text-2xl font-semibold capitalize ">
          Now playing
        </h2>
        <MovieList type="now_playing"></MovieList>
      </section>
      {/* ------------ Top Rating ---------------- */}
      <section className="mt-10 mb-20 movies-layout page-container md:ml-4 xl:ml-4">
        <h2 className="mt-5 mb-10 text-2xl font-semibold capitalize ">
          Top Rated
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      {/* ------------ End Top Rating ---------------- */}
    </Fragment>
  );
};

export default HomePage;
