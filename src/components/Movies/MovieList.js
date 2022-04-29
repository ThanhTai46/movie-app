import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardMovie, { MovieCardSkeleton } from "./CardMovie";
import "swiper/scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";

const MovieList = ({ type }) => {
  const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const isLoading = !data && !error;
  const movies = data?.results || [];

  return (
    <div>
      <div className="movie-list md:ml-4 lg:ml-2">
        {isLoading && (
          <>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              pagination={{ clickable: true }}
              grabCursor={"true"}
              spaceBetween={40}
              slidesPerView={"auto"}
            >
              {new Array(10).fill(0).map(() => (
                <SwiperSlide>
                  <MovieCardSkeleton></MovieCardSkeleton>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
        {!isLoading && (
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
        )}
      </div>
    </div>
  );
};

export default MovieList;
