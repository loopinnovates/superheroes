import Link from "next/link";
import { MDBBtn } from "mdb-react-ui-kit";

const Navbar = (props) => {
  return (
    <nav className="navbar container">
      <Link href={"/"}>
        <a className="navbar-brand">Superheros</a>
      </Link>
      <Link href={"/add"}>
        <MDBBtn>New Identity</MDBBtn>
      </Link>
    </nav>
  );
};

export default Navbar;
