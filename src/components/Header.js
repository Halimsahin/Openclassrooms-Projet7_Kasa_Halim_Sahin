import logo from "../images/LOGO.svg";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="header">
      <figure className="header__fig">
        <img className="logo" src={logo} alt="logo kasa" />
      </figure>
      <Nav className="nav-header" />
    </header>
  );
}