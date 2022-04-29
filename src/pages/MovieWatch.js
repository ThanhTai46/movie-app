import React from "react";
import { useParams } from "react-router-dom";


const MovieWatch = () => {
  const { movieId } = useParams();


  return (
    <div className="py-20">
      <div className="responsive-video page-container">
        <iframe
          width="1904"
          height="768"
          src={`https://www.2embed.ru/embed/tmdb/movie?id=${movieId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
          allowFullScreen
          className="w-full h-full mt-8"
        ></iframe>
      </div>
    </div>
  );
};

export default MovieWatch;
