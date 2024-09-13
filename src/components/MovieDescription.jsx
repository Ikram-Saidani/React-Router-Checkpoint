import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function MovieDescription({ movies }) {
  const params = useParams();
  const navigate=useNavigate();
  console.log(params);
  const movie = movies.find((movie) => movie.id === params.id);
  console.log(movie);
  if (!movie) {
    return <div>Movie not found</div>;
  } else {
    return (
      <div
        className="movie-description"
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          alignItems: "center",
          border: "4px solid gray",
          borderRadius: "10px",
          padding: "10px",
          margin: "10px",
        }}
      >
        <h1>Title : {movie.title}</h1>
        <img style={{ height: "300px" }} src={movie.posterURL} alt="poster" />
        <p style={{ fontSize: "17px" }}>Description : {movie.description}</p>
        <p style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}>
          Rating : {movie.rating}
        </p>

        <iframe
          width="560"
          height="315"
          title={movie.title}
          src={movie.trailerURL}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <Button style={{ color: "white" }} variant="danger" onClick={() => navigate(-1)}>
          
            Go Back
         
        </Button>
      </div>
    );
  }
}

export default MovieDescription;
