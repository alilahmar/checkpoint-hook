import React from "react";

function CardTrailler({videoUrl, description}) {
  return (
    <div>
      <iframe
        title='ali'
        width="70%"
        height="500"
        src={videoUrl}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
       <p>{description}</p>
    </div>
  );
}

export default CardTrailler;
