import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import appAxios from "./utils/axiosConfig";
import Filter from "./components/Filter";
import { Route, Routes } from "react-router-dom";
import MovieDescription from "./components/MovieDescription";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState(0);
  const [search, setSearch] = useState("");
  //fetch data
  useEffect(() => {
    appAxios
      .get("/movies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavBar
        movies={movies}
        setMovies={setMovies}
        setSearch={setSearch}
        setRating={setRating}
      />
      <Routes>
        <Route
          path="/"
          element={
            <div className="movie-card">
              <Filter movies={movies} search={search} rating={rating} />
            </div>
          }
        />
        <Route
          path="/movies/:id"
          element={<MovieDescription movies={movies} />}
        />
        <Route
          path="/addMovie"
          element={<AddMovie movies={movies} setMovies={setMovies} />}
        />

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
