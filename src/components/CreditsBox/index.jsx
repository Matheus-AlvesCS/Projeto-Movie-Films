import getImage from "../../utils/getImage";

import { Title, Container } from "./styles";

function CreditsBox({ credits }) {
  return (
    <>
      <Title>Créditos</Title>
      {credits && (
        <Container>
          {credits.slice(0, 5).map((artist) => (
            <div key={artist.id}>
              <img src={getImage(artist.profile_path)} />
              <p>{artist.original_name}</p>
            </div>
          ))}
        </Container>
      )}
    </>
  );
}

export default CreditsBox;
