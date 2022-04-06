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
      <section className="mt-10 movies-layout page-container ">
        <h2 className="mt-5 mb-10 text-2xl font-semibold capitalize md:ml-4 lg:ml-4 ">
          Popular
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
      {/* ------------ Now Playing ---------------- */}
      <section className="mt-10 movies-layout page-container ">
        <h2 className="mt-5 mb-10 text-2xl font-semibold capitalize md:ml-4  lg:ml-4">
          Now playing
        </h2>
        <MovieList type="now_playing"></MovieList>
      </section>
      {/* ------------ Top Rating ---------------- */}
      <section className="mt-10 movies-layout page-container mb-20">
        <h2 className="mt-5 mb-10 text-2xl font-semibold capitalize md:ml-4 lg:ml-4 ">
          Top Rated
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      {/* ------------ End Top Rating ---------------- */}
    </Fragment>
  );
};

export default HomePage;
