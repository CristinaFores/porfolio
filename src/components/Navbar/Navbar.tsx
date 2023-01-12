import { Link } from "react-router-dom";
import { NavbarStyled } from "./NavbarStyled";

const Navbar = (): JSX.Element => {
  return (
    <NavbarStyled>
      <Link to={"/about"}>About me</Link>
      <Link to={"/projects"}>Projects</Link>
      <Link to={"/contact"} className="contact">
        Contact
      </Link>
    </NavbarStyled>
  );
};

export default Navbar;
