import React from "react";
import "./App.css";
import MovieList from "./components/Movielist";
import Navbar from "./components/Filter";
import list from "./data";
import { useState } from "react";
import Add from "./components/Add";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Trailer from './components/Trailer';

function App() {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("");

  const [newmovie, setNewmovie] = useState(list);
  //  functions:
 const handleMovie = (title,description,url,rate) => {
   if (title!=='' && description!=='' && url!=='' && rate!=='')
    setNewmovie([...newmovie, { title:title,description:description,url:url,rate:rate }]);
  };
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar setAli={setSearch} setRating={setRating} />
      <Add handleMovie={handleMovie} />
      <Switch>
      <Route path='/' exact render={()=><MovieList moviesData={newmovie} search={search} rating={rating} />} />
      <Route path='/:id' render={(props)=><Trailer newmovie={newmovie}{...props}/>}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
