import React from "react";
import CardTrailer from "./CardTrailler";

function Trailer({ newmovie, match }) {
  console.log(match.params.id);
  console.log(newmovie[5]);
  var MovieData;
  for (let i = 0; i < newmovie.length; i++) {
    if (newmovie[i].id == match.params.id) {
      MovieData = (
        <CardTrailer
          videoUrl={newmovie[i].urlvideo}
          description={newmovie[i].description}
        />
      );
    }
  }

  return <div>{MovieData}</div>;
}

export default Trailer;
