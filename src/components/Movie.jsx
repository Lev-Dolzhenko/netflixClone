import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Movie({ movie }) {
  const [like, setLike] = useState(false);

  return (
    <div
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] relative inline-block cursor-pointer p-2"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="flex items-center justify-center text-xs md:text-sm font-bold h-full">
          {movie?.title}
        </p>
        <p>
          {like ? (
            <FaHeart className="top-4 left-4 absolute text-gray-300" />
          ) : (
            <FaRegHeart className="top-4 left-4 absolute text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
}

export default Movie;
