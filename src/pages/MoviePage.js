import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../config";
import CardMovie, { MovieCardSkeleton } from "../components/Movies/CardMovie";
import { v4 as uuidv4 } from "uuid";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";
const itemsPerPage = 20;
const MoviePage = () => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const filterDebounce = useDebounce(filter, 500);
  const [url, setUrl] = useState(tmdbAPI.getMovieList("popular", nextPage));
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const { data, error } = useSWR(url, fetcher);
  const loadding = !data && !error;
  useEffect(() => {
    if (filterDebounce) {
      setUrl(tmdbAPI.getMovieSearch(filterDebounce, nextPage));
    } else {
      tmdbAPI.getMovieList("popular", nextPage);
    }
  }, [filterDebounce, nextPage]);
  const movies = data?.results || [];
  useEffect(() => {
    if (!data || !data.total_results) return;

    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;

    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

  return (
    <div className="py-28 page-container md:px-4 lg:m-5">
      <div className="flex mb-10">
        <div className="flex-1 ">
          <input
            type="text"
            className="w-full p-4 text-black bg-white rounded-lg outline-none "
            placeholder="Type here to search..."
            onChange={handleFilterChange}
          />
        </div>
      </div>
      {/* {loadding && (
        <div className="w-10 h-10 mx-auto border-4 border-t-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
      )} */}
      {/* Loadding Skeleton */}

      {loadding && (
        <div className="grid grid-cols-4 gap-10 md:grid md:grid-cols-1 lg:grid lg:grid-cols-2 lg:gap-5">
          {new Array(8).fill(0).map(() => (
            <MovieCardSkeleton key={uuidv4()}></MovieCardSkeleton>
          ))}
        </div>
      )}
      {!loadding && (
        <div className="grid grid-cols-4 gap-10 md:grid md:grid-cols-1 lg:grid lg:grid-cols-2 lg:gap-5">
          {!loadding &&
            movies.length > 0 &&
            movies.map((movie) => (
              <CardMovie key={uuidv4()} data={movie}></CardMovie>
            ))}
        </div>
      )}
      <div className="mt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </div>
  );
};

export default MoviePage;
