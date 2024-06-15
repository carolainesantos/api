import { useEffect, useState } from "react";
import getAllMovies from "../api/getMovies";
import { Container, MovieList, Movie, MovieTitle } from "../styles";

const img_path = "http://image.tmdb.org/t/p/w500";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies(setMovies);
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
              <MovieTitle>{movie.title}</MovieTitle>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
}

export default Movies;
