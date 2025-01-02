import api from "./api";

export async function getMovies(main = false) {
  const {
    data: { results },
  } = await api.get("/movie/popular");

  return main ? results[0] : results;
}

export async function getTopMovies() {
  const {
    data: { results },
  } = await api.get("/movie/top_rated");

  return results;
}

export async function getTopSeries() {
  const {
    data: { results },
  } = await api.get("/tv/top_rated");

  return results;
}

export async function getSeries() {
  const {
    data: { results },
  } = await api.get("/tv/popular");

  return results;
}

export async function getArtists() {
  const {
    data: { results },
  } = await api.get("/person/popular");

  return results;
}

export async function getMovieTrailer(movieId) {
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/videos`);

  return results[1];
}
