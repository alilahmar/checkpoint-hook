import React from "react";
import MovieCard from "./Moviecard";

import "../css/movielist.css";

const Movielist = (props) => {
  return (
    <div className="listofcard">
      {props.moviesData.filter((movie) =>
        movie.title.toLowerCase().includes(props.search.toLowerCase()) &&  movie.rate >= props.rating
      )
        
        .map((movies) => {
          return (
            <MovieCard
              id={movies.id}
              key={movies.id}
              title={movies.title}
              description={movies.description}
              url={movies.url}
              rate={movies.rate}
            />
          );
        })}
    </div>
  );
};

export default Movielist;
