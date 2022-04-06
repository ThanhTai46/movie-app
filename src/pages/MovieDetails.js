import React from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import useSWR from "swr";
import { fetcher } from "../config";
import CardMovie from "../components/Movies/CardMovie";
import { useNavigate } from "react-router-dom";
const MovieDetails = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=599785b548051b03695ff20b291c6977`,
    fetcher
  );
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;

  // console.log(genres);
  return (
    <div>
      <div className="w-full h-[600px] ">
        <div className="w-full h-[600px] absolute inset-0 bg-[rgba(2,13,24,.75)] z-0 "></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="max-w-[400px] h-[600px] mx-auto -mt-[200px] relative z-10 mb-10 md:-mt-[500px]">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=""
          className="object-cover w-full h-full rounded-xl hover:scale-105 transition-all"
        />
        <button
          className=" bg-[#FF3D71] md:w-[300px] md:mx-auto md:my-10 w-full h-[50px] rounded-md mt-10  flex items-center justify-center gap-x-3 shadow-red-500"
          onClick={() => navigate(`/watch/${data.id}`)}
        >
          <span className="text-lg font-medium">Watch now</span>
          <BsFillPlayCircleFill className="text-3xl" />
        </button>
      </div>
      <h1 className="mt-32 mb-10 text-2xl font-semibold text-center ">
        {title}
      </h1>
      {genres.length > 0 && (
        <div className="flex items-center justify-center mb-10 gap-x-4 md:text-sm ">
          {genres.map((item) => (
            <span
              key={item.id}
              className="rounded-lg px-4 py-2 md:px-2 md:py-1 border border-blue-500 hover:bg-[#9900F0] hover:border-none hover:transition-all"
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <h1 className="text-center leading-relaxed max-w-[600px] mx-auto py-10 mb-10 md:ml-1">
        {overview}
      </h1>
      <MovieCast></MovieCast>
      <TrailerVideo></TrailerVideo>
      <MovieSimilar></MovieSimilar>
    </div>
  );
};
function MovieCast() {
  const { movieId } = useParams();
  const { data } = useSWR(
    //https://api.themoviedb.org/3/movie/634649/videos?api_key=599785b548051b03695ff20b291c6977
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=599785b548051b03695ff20b291c6977`,
    fetcher
  );
  if (!data) return null;
  const { cast } = data;
  // console.log(cast);

  return (
    <div className="page-container mb-10">
      <h1 className="mb-10 text-3xl font-semibold text-center">Cast</h1>
      <div className="grid grid-cols-6 gap-5  md:grid md:grid-cols-2 md:gap-y-10 md:m-3 ">
        {cast.length > 0 &&
          cast.slice(0, 6).map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                alt=""
                className="object-cover w-full h-full rounded-md hover:scale-105 transition-all"
              />
              <h3 className="mt-3">{item.name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}
function TrailerVideo() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=599785b548051b03695ff20b291c6977`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  return (
    <div className="">
      {results.length > 0 &&
        results.slice(1, 2).map((item) => (
          <div key={item.id} className="responsive-video page-container mt-20 ">
            <iframe
              width="1904"
              height="768"
              src={`https://www.youtube.com/embed/${item.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        ))}
    </div>
  );
}

function MovieSimilar() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=599785b548051b03695ff20b291c6977`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  return (
    <div className="mb-10">
      <h1 className=" text-3xl font-semibold text-center mb-10">
        Similar Movie
      </h1>
      <div className="movie-list ml-3 md:ml-7 lg:ml-2">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}
          grabCursor={"true"}
          spaceBetween={40}
          slidesPerView={"auto"}
        >
          {results.length > 0 &&
            results.map((item) => (
              <SwiperSlide key={item.id}>
                <CardMovie data={item}></CardMovie>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieDetails;
