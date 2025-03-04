import { useEffect, useState } from "react";
import { useParams } from "react-router";

import {
  Background,
  Container,
  ContainerTrailers,
  Cover,
  Info,
} from "./styles";

import {
  getDetailsById,
  getSimilars,
  getCredtis,
  getMovieTrailer,
} from "../../services/getData";

import Slider from "../../components/Slider";
import getImage from "../../utils/getImage";
import GenresBox from "../../components/GenresBox";
import CreditsBox from "../../components/CreditsBox";

function Details() {
  const [details, setDetails] = useState();
  const [credits, setCredits] = useState();
  const [trailers, setTrailers] = useState();
  const [similars, setSimilars] = useState();

  const { id } = useParams();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getDetailsById(id),
        getCredtis(id),
        getMovieTrailer(id),
        getSimilars(id),
      ])
        .then(([details, credits, trailers, similars]) => {
          setDetails(details);
          setCredits(credits);
          setTrailers(trailers);
          setSimilars(similars);
        })
        .catch((error) => console.error(error.message));
    }

    getAllData();
  }, []);

  console.log(similars);

  return (
    <>
      {details && (
        <>
          <Background $img={getImage(details.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImage(details.poster_path)} />
            </Cover>
            <Info>
              <h2>{details.title}</h2>
              <GenresBox genres={details.genres} />
              <p>{details.overview}</p>
              <div>
                <CreditsBox credits={credits} />
              </div>
            </Info>
          </Container>
          <ContainerTrailers>
            {trailers &&
              trailers.map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    height="500px"
                    width="100%"
                  ></iframe>
                </div>
              ))}
          </ContainerTrailers>
          {similars && <Slider data={similars} title={"Filmes Similares"} />}
        </>
      )}
    </>
  );
}

export default Details;
