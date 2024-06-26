import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?apikey=2c9f1410";

const App = () => {
  const [movies, setmovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState();

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setmovies(data.Search);
    } catch (error) {
      console.error("Error fetching the movies:", error);
    }
  };

  useEffect(() => {
    searchMovies("");
  }, []);

  return (
    <>
      <div className="app">
        <h1>FilmZone</h1>

        <div className="search">
          <input
            placeholder="Search for Movies"
            value={searchTerm}
            onChange={(e) => setsearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
