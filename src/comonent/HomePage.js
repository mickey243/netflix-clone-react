import React from "react";
import requests from "./requests";
import Row from "./Row";
import Banner from "./Banner";

function HomePage() {
  return (
    <div>
        {/* Navbar. */}
        {/* for Header Banner. */}
        <Banner />
      {/* <Row title="Trending" fetchUrl="https://api.themoviedb.org/3/discover/tv?api_key=782f819e96e3592001258ed496d64dc5&with_networks=213"/> */}
      <Row title="Netflix original" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movie" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romace Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documenaties" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomePage;
