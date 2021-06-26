import React, { useEffect, useState } from "react";
import Axios from "axios";
import requests from "./requests";
import "./Banner.css";


function Banner() {
  const [movies, setMovies] = useState([]);
  

  //a code with run on specific condition.
  useEffect(() => {
    const fetchRequest = async () => {
      const request = await Axios.get(requests.fetchNetflixOriginals);
      //   console.table(request.data.results[
      //       Math.floor(Math.random() * request.data.results.length -1)
      //   ]);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    };
    fetchRequest();
  }, []);
  // console.log(movies);
  //taking from npm react-youTube.
const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

//   function to show ... if text is bigger than 150 characters.
  function truncate(str,n) {
      return str?.length > n ? str.substr(0,n,-1) + "..." : str;
  }


  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movies?.backdrop_path}"
            )`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner__contents">
        {/* title */}
        <h1 className="banner__title">{movies?.name || movies?.title || movies?.original_name}</h1>
        {/* div -> 2 button . */}
        <div className="banner__buttons">
          <button className="banner__button" >Play</button>
          <button className="banner__button">My List</button>
        </div>
        {/* descriptions. */}
        <h1 className="banner__discription">
            {truncate(movies?.overview,150)}</h1>
      </div>
      <div className="banner__fadeBottom" />
      
    </header>
  );
}

export default Banner;
