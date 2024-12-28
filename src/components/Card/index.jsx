import getImage from "../../utils/getImage";

import { Container } from "./styles";

function Card({ item }) {
  return (
    <Container>
      <img src={getImage(item.poster_path || item.profile_path)} />
      <h3>{item.title || item.name}</h3>
    </Container>
  );
}

export default Card;
