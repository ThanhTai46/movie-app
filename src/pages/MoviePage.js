import React from "react";
import MovieList from "../components/Movies/MovieList";
import useSWR from "swr";
import { fetcher } from "../config";
import { BsFillPlayCircleFill, BsStarFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

import CardMovie from "../components/Movies/CardMovie";
import { v4 as uuidv4 } from "uuid";
const MoviePage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=599785b548051b03695ff20b291c6977`,
    fetcher
  );

  const movies = data?.results || [];
  return (
    <div className="py-28 page-container md:px-4 ">
      <div className="flex mb-10">
        <div className="flex-1 ">
          <input
            type="text"
            className="  w-full p-4 bg-white outline-none rounded-lg text-black"
            placeholder="Type here to search..."
          />
        </div>
        {/* <button className="p-4 bg-primary text-white ">
          <BiSearch></BiSearch>
        </button> */}
      </div>
      <div className="grid grid-cols-4 gap-10 md:grid md:grid-cols-1">
        {movies.length > 0 &&
          movies.map((movie) => (
            <CardMovie key={uuidv4()} data={movie}></CardMovie>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;
