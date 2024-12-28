import Logo from "../../assets/logo.webp";

function Header() {
  return (
    <div>
      <h1>Header</h1>
      <img src={Logo} alt="movie-films-logo" style={{ height: 100 }} />
    </div>
  );
}

export default Header;
