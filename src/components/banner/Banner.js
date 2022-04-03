import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import useSWR from "swr";
import { fetcher } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=599785b548051b03695ff20b291c6977`,
    fetcher
  );
  const movies = data?.results || [];

  return (
    <section className="banner page-container h-[580px] md:h-[300px] overflow-hidden">
      <Swiper
      // modules={[Autoplay, Navigation, Pagination]}
      // slidesPerView={1}
      // navigation
      // pagination={{ clickable: true }}
      // autoplay={{ delay: 3000 }}
      >
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  return (
    <div className="relative w-full h-full rounded-2xl ">
      <div className="overlay absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-2xl"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
        alt=""
        className="object-cover w-full h-full rounded-2xl z"
      />
      <div className="absolute w-full bottom-1/2 translate-y-72 left-5 flex flex-col h-[400px] ml-5 md:ml-1">
        <h2 className="mb-10 text-3xl font-bold">{item.title}</h2>
        <div className="flex items-center gap-x-3">
          <span className="px-4 py-2 border border-white rounded-md">
            Action
          </span>
          <span className="px-4 py-2 border border-white rounded-md">
            Adventure
          </span>
          <span className="px-4 py-2 border border-white rounded-md">
            Drama
          </span>
        </div>
        <button className="bg-[#FF3D71] w-[160px] h-[50px] rounded-md mt-10 flex items-center justify-center gap-x-3 shadow-red-500">
          <span className="text-xl font-medium">Watch</span>
          <BsFillPlayCircleFill className="text-3xl" />
        </button>
      </div>
    </div>
  );
}
export default Banner;
