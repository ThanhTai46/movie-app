import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardMovie from "./CardMovie";
import "swiper/scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import useSWR from "swr";
import { fetcher } from "../../config";

const MovieList = ({ type }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=599785b548051b03695ff20b291c6977`,
    fetcher
  );

  const movies = data?.results || [];

  return (
    <div>
      <div className="movie-list md:ml-7 lg:ml-2">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}
          grabCursor={"true"}
          spaceBetween={40}
          slidesPerView={"auto"}
        >
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <CardMovie data={item}></CardMovie>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieList;
