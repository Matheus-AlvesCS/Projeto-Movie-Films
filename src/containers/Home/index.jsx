import { useState, useEffect } from "react";

import api from "../../services/api.js";
import getImage from "../../utils/getImage.js";

import { Background, Main, Info, Poster } from "./styles.js";
import Button from "../../components/Button";
import Slider from "../../components/Slider";

function Home() {
  const [popMovies, setPopMovies] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popSeries, setPopSeries] = useState();
  const [artists, setArtists] = useState();

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get("/movie/popular");

      setPopMovies(results[0]);
    }

    async function getTopMovies() {
      const {
        data: { results },
      } = await api.get("/movie/top_rated");

      setTopMovies(results);
    }

    async function getTopSeries() {
      const {
        data: { results },
      } = await api.get("/tv/top_rated");

      setTopSeries(results);
    }

    async function getSeries() {
      const {
        data: { results },
      } = await api.get("/tv/popular");

      setPopSeries(results);
    }

    async function getArtists() {
      const {
        data: { results },
      } = await api.get("/person/popular");

      setArtists(results);
    }

    getMovies();
    getTopMovies();
    getTopSeries();
    getSeries();
    getArtists();
  }, []);

  return (
    <>
      {popMovies && (
        <Background $img={getImage(popMovies.backdrop_path)}>
          <Main>
            <Info>
              <h1>{popMovies.title}</h1>
              <p>{popMovies.overview}</p>
              <div>
                <Button button={1}>Assista Agora</Button>
                <Button button={0}>Assista o Trailer</Button>
              </div>
            </Info>
            <Poster>
              <img src={getImage(popMovies.poster_path)} alt="main-poster" />
            </Poster>
          </Main>
        </Background>
      )}
      {topMovies && <Slider data={topMovies} title={"Melhores Avaliados"} />}
      {topSeries && <Slider data={topSeries} title={"Séries Bombando"} />}
      {popSeries && <Slider data={popSeries} title={"Séries Populares"} />}
      {artists && <Slider data={artists} title={"Principais Atores"} />}
    </>
  );
}

export default Home;
