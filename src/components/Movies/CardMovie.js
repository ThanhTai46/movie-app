import React from "react";
import { BsFillPlayCircleFill, BsStarFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import LoadingSkeleton from "../loading/LoadingSkeleton";

const CardMovie = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      className="h-full p-3 rounded-lg select-none movie-card bg-slate-800"
      onClick={() => navigate(`/movie/${data.id}`)}
    >
      <img
        className="w-full h-[250px] object-cover rounded-lg mb-5"
        src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path} `}
        alt=""
      />
      <h3 className="mb-3 font-semibold ">{data.title} </h3>
      <div className="flex items-center justify-between mb-10 text-sm font-semibold text-slate-400">
        <span>{new Date(data.release_date).getFullYear()}</span>
        <span className="flex items-center justify-center gap-x-2">
          {data.vote_average}
          <span className="text-[#FFAA01] text-2xl">
            <BsStarFill />
          </span>
        </span>
      </div>
      <Button onClick={() => navigate(`/movie/${data.id}`)}>
        <span className="text-lg font-medium">Watch now</span>
        <BsFillPlayCircleFill className="text-3xl" />
      </Button>
    </div>
  );
};

export const MovieCardSkeleton = () => {
  return (
    <div className="h-full p-3 rounded-lg select-none movie-card bg-slate-800">
      <LoadingSkeleton
        width="100%"
        height="250px"
        radius="8px"
        className="mb-5 bg-white"
      ></LoadingSkeleton>
      <h3 className="mb-3 font-semibold ">
        {" "}
        <LoadingSkeleton
          width="100%"
          height="20px"
          className="bg-white"
          radius="2px"
        ></LoadingSkeleton>
      </h3>
      <div className="flex items-center justify-between mb-10 text-sm font-semibold text-slate-400">
        <span>
          {" "}
          <LoadingSkeleton
            width="50px"
            height="15px"
            className="bg-white"
            radius="2px"
          ></LoadingSkeleton>
        </span>
        <span className="flex items-center justify-center gap-x-2">
          <span className="text-[#FFAA01] text-2xl">
            <BsStarFill />
          </span>
        </span>
      </div>
      <LoadingSkeleton
        width="100%"
        height="50px"
        className="bg-white"
        radius="6px"
      ></LoadingSkeleton>
    </div>
  );
};
export default CardMovie;
