import { NavLink } from "react-router-dom";
import firma from "../assets/img/carmen-maroto-firma-negro.png";
import Separator from "./Separator";

const Header = (): React.JSX.Element => {
  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__logo" src={firma} alt="firma-carmen-maroto-art-img" />
      </NavLink>
      <div className="header__sections">
        <NavLink to="/">
          <strong className="header__section">Colección</strong>
        </NavLink>
        <NavLink to="/aboutme">
          <strong className="header__section">Sobre mí</strong>
        </NavLink>
        <NavLink to="/contact">
          <strong className="header__section">Contacto</strong>
        </NavLink>
      </div>
      <Separator />
    </header>
  );
};

export default Header;
