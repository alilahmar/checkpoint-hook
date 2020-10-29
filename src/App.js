import React from "react";
import "./App.css";
import MovieList from "./components/Movielist";
import Navbar from "./components/Filter";
import list from "./data";
import { useState } from "react";
import Add from "./components/Add";

function App() {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("");

  const [newmovie, setNewmovie] = useState(list);
  //  functions:
 const handleMovie = (title,description,url,rate) => {
   if (title!='' && description!='' && url!='' && rate!='')
    setNewmovie([...newmovie, { title:title,description:description,url:url,rate:rate }]);
  };
  return (
    <div className="App">
      <Navbar setAli={setSearch} setRating={setRating} />
      <Add handleMovie={handleMovie} />
      <MovieList moviesData={newmovie} search={search} rating={rating} />
    </div>
  );
}

export default App;
