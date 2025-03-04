import { Container } from "./styles";

function GenresBox({ genres }) {
  return (
    <Container>
      {genres &&
        genres.map((genre) => <span key={genre.id}>{genre.name}</span>)}
    </Container>
  );
}

export default GenresBox;
