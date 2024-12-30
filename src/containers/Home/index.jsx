import { useState, useEffect } from "react";

import api from "../../services/api.js";
import getImage from "../../utils/getImage.js";

import { Background, Main, Info, Poster } from "./styles.js";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import Modal from "../../components/Modal";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [mainMovie, setMainMovie] = useState();
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

      setMainMovie(results[0]);
      setPopMovies(results);
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
      {mainMovie && (
        <Background $img={getImage(mainMovie.backdrop_path)}>
          {showModal && (
            <Modal movieId={mainMovie.id} showModal={setShowModal} />
          )}
          <Main>
            <Info>
              <h1>{mainMovie.title}</h1>
              <p>{mainMovie.overview}</p>
              <div>
                <Button button={1}>Assista Agora</Button>
                <Button button={0} onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </div>
            </Info>
            <Poster>
              <img src={getImage(mainMovie.poster_path)} alt="main-poster" />
            </Poster>
          </Main>
        </Background>
      )}
      {popMovies && <Slider data={popMovies} title={"Populares no Momento"} />}
      {topMovies && <Slider data={topMovies} title={"Melhores Avaliados"} />}
      {topSeries && <Slider data={topSeries} title={"Séries Bombando"} />}
      {popSeries && <Slider data={popSeries} title={"Séries Populares"} />}
      {artists && <Slider data={artists} title={"Principais Atores"} />}
    </>
  );
}

export default Home;
