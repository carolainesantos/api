async function getAllMovies(setMovies) {
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

export default getAllMovies;
