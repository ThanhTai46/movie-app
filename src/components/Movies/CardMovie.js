import React from "react";
import { BsFillPlayCircleFill, BsStarFill } from "react-icons/bs";

const CardMovie = ({ data }) => {
  return (
    <div className="p-3 rounded-lg movie-card bg-slate-800 h-full select-none">
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
      <button className="bg-[#FF3D71] w-full h-[50px] rounded-md mt-10 flex items-center justify-center gap-x-3 shadow-red-500">
        <span className="text-lg font-medium">Watch now</span>
        <BsFillPlayCircleFill className="text-3xl" />
      </button>
    </div>
  );
};

export default CardMovie;