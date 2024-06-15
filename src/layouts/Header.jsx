import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar
      expand={"lg"}
      style={{
        backgroundColor: "#1A1A1A",
      }}
    >
      <Navbar.Brand
        as={Link}
        to="/"
        style={{
          padding: "0px 50px",
          fontSize: "24px",
          color: "#739766",
        }}
      ></Navbar.Brand>
      <Navbar.Toggle aria-controls="minhanav" />
      <Navbar.Collapse
        id="minhanav"
        style={{
          textAlign: "center",
          alignSelf: "stretch",
          fontSize: "30px",
        }}
      >
        <Container
          style={{
            marginRight: "380px",
          }}
        >
          <Navbar.Text
            as={Link}
            to="/login"
            style={{
              fontSize: "21px",
              textDecoration: "none",
              marginLeft: "20px",
              fontFamily: "Roboto",
              color: "#81A263",
              fontWeight: 900,
            }}
          >
            Login
          </Navbar.Text>
          <Navbar.Text
            as={Link}
            to="/sobre"
            style={{
              fontSize: "21px",
              textDecoration: "none",
              marginLeft: "20px",
              fontFamily: "Roboto",
              color: "#81A263",
              fontWeight: 900,
            }}
          >
            Sobre
          </Navbar.Text>
          <Navbar.Text
            as={Link}
            to="/filmes"
            style={{
              fontSize: "21px",
              textDecoration: "none",
              marginLeft: "20px",
              fontFamily: "Roboto",
              color: "#81A263",
              fontWeight: 900,
            }}
          >
            Filmes
          </Navbar.Text>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
}
