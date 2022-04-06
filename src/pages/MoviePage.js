import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import CardMovie from "../components/Movies/CardMovie";
import { v4 as uuidv4 } from "uuid";
import useDebounce from "../hooks/useDebounce";
const MoviePage = () => {
  const [filter, setFilter] = useState("");
  const filterDebounce = useDebounce(filter, 500);
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/movie/popular?api_key=599785b548051b03695ff20b291c6977"
  );
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  //https://api.themoviedb.org/3/search/movie?api_key=<<api_key>  //search
  const { data } = useSWR(url, fetcher);
  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=599785b548051b03695ff20b291c6977&query=${filterDebounce}`
      );
    } else {
      setUrl(
        "https://api.themoviedb.org/3/movie/popular?api_key=599785b548051b03695ff20b291c6977"
      );
    }
  }, [filterDebounce]);
  const movies = data?.results || [];
  return (
    <div className="py-28 page-container md:px-4 ">
      <div className="flex mb-10">
        <div className="flex-1 ">
          <input
            type="text"
            className="  w-full p-4 bg-white outline-none rounded-lg text-black"
            placeholder="Type here to search..."
            onChange={handleFilterChange}
          />
        </div>
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
