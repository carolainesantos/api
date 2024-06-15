import { useEffect, useState } from "react";
import { Container, MovieList, Movie } from "../components/styles.js";

const img_path = "http://image.tmdb.org/t/p/w500";

function Filmes() {
  const [movies, setMovies] = useState([]);
  async function getAllMovies() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=9952f27613016fb0735bf4cd5807bb0c",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const resultParse = JSON.parse(result);
        setMovies(resultParse.results);
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    function getConteudo() {
      getAllMovies();
    }
    getConteudo();
  }, []);

  return (
    <Container>
      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <a href={`${img_path}${movie.poster_path}`}>
                <img
                  src={`${img_path}${movie.poster_path}`}
                  alt={movie.title}
                />
              </a>
              <span
                style={{
                  color: "white",
                }}
              >
                {movie.title}
              </span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
}

export default Filmes;
