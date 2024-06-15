import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HeaderContent } from "../styles.js";

export default function Header() {
  return (
    <Navbar
      expand={"lg"}
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "32px",
      }}
    >
      <HeaderContent>
        <Navbar.Text
          as={Link}
          to="/"
          style={{
            fontSize: "24px",
            textDecoration: "none",
            color: "#81A263",
            fontWeight: 700,
          }}
        >
          Login
        </Navbar.Text>

        <Navbar.Text
          as={Link}
          to="/movies"
          style={{
            fontSize: "24px",
            textDecoration: "none",
            color: "#81A263",
            fontWeight: 700,
          }}
        >
          Filmes
        </Navbar.Text>
      </HeaderContent>
    </Navbar>
  );
}
