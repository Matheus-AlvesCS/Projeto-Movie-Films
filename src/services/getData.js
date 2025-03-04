import api from "./api";

export async function getMovies() {
  const {
    data: { results },
  } = await api.get("/movie/popular");

  return results;
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

export async function getMovieTrailer(movieId, main = false) {
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/videos`);

  return main ? results[1] : results;
}

export async function getDetailsById(movieId) {
  const { data } = await api.get(`/movie/${movieId}`);

  return data;
}

export async function getSimilars(movieId) {
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/similar`);

  return results;
}

export async function getCredtis(movieId) {
  const {
    data: { cast },
  } = await api.get(`/movie/${movieId}/credits`);

  return cast;
}
