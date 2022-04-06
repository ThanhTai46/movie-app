import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import CardMovie from "../components/Movies/CardMovie";
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
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=599785b548051b03695ff20b291c6977&page=${nextPage}`
  );
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  //https://api.themoviedb.org/3/search/movie?api_key=<<api_key>  //search
  const { data, error } = useSWR(url, fetcher);

  const loadding = !data && !error;
  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=599785b548051b03695ff20b291c6977&query=${filterDebounce}&page=${nextPage}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=599785b548051b03695ff20b291c6977&page=${nextPage}`
      );
    }
  }, [filterDebounce, nextPage]);
  // const { page, total_pages } = data;
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
            className="  w-full p-4 bg-white outline-none rounded-lg text-black"
            placeholder="Type here to search..."
            onChange={handleFilterChange}
          />
        </div>
      </div>
      {loadding && (
        <div className="w-10 h-10 rounded-full border-4 border-blue-500 border-t-transparent border-t-4 animate-spin mx-auto"></div>
      )}

      <div className="grid grid-cols-4 gap-10 md:grid md:grid-cols-1 lg:grid lg:grid-cols-2 lg:gap-5">
        {!loadding &&
          movies.length > 0 &&
          movies.map((movie) => (
            <CardMovie key={uuidv4()} data={movie}></CardMovie>
          ))}
      </div>
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
