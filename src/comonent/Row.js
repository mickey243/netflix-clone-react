import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

//url for image that fetching.
const baseUrl = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchUrl,isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl] = useState("");

  //a code with run on specific condition.
  useEffect(() => {
    const fetchRequest = async () => {
      const request = await Axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchRequest();
  }, [fetchUrl]);
  // console.log(movies);
//   console.table(movies);

//taking from npm react-youTube.
const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const handleClick = (movie) => {
  if (trailerUrl){
    setTrailerUrl("");
  } else {
    movieTrailer(movie?.name || "");
  }
};
  return (
    <div className="row">
      <h1>{title}</h1>
      {/* for the poster of all the movies. */}
      <div className="row__posters">
        {movies.map((movie) => (
          <img
          key={movie.id}
          onClick={() =>handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}  />}
    </div>
  );
};

export default Row;
