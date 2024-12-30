import { useState } from "react";
import { Link, useLocation } from "react-router";

import Logo from "../../assets/logo.webp";
import { Container, Li, Menu } from "./styles";

function Header() {
  const [pageY, setPageY] = useState();
  const { pathname } = useLocation();

  window.onscroll = () => {
    setPageY(pageYOffset);
  };

  return (
    <Container $pagey={pageY}>
      <img src={Logo} alt="Movies-Films-Logo" />
      <Menu>
        <Li $active={pathname === "/"}>
          <Link to="/">Home</Link>
        </Li>
        <Li $active={pathname.includes("movies")}>
          <Link to="/movies">Filmes</Link>
        </Li>
        <Li $active={pathname.includes("series")}>
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </Container>
  );
}

export default Header;
