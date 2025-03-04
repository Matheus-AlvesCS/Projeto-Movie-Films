import { useState, useEffect } from "react";

import { getMovieTrailer } from "../../services/getData";

import { Background, Container } from "./styles";

function Modal({ movieId, showModal }) {
  const [trailer, setTrailer] = useState();

  useEffect(() => {
    async function getTrailer() {
      setTrailer(await getMovieTrailer(movieId, true));
    }

    getTrailer();
  }, []);

  return (
    <Background onClick={() => showModal(false)}>
      {trailer && (
        <Container>
          <span>X</span>
          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}`}
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  );
}

export default Modal;
